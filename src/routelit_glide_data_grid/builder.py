from typing import Any, Callable, ClassVar, Iterable, Literal, Optional, Union, Tuple
import pandas as pd
from routelit import AssetTarget, RouteLitBuilder  # type: ignore[import-untyped]
from .utils import normalize_data, extract_columns, infer_column_types
from .types import ColumnConfig

class RLBuilder(RouteLitBuilder):  # type: ignore[no-any-unimported]
    """
    A builder for a RouteLit application.
    This Builder template serves as example on how to create a RouteLit custom components.
    """

    static_assets_targets: ClassVar[list[AssetTarget]] = [  # type: ignore[no-any-unimported]
        {
            "package_name": "routelit_glide_data_grid",
            "path": "static",
        }
    ]

    def _serialize_column_config(self, config: Optional[dict[str, Union[ColumnConfig, str, None]]]) -> Optional[dict[str, Any]]:
        if config is None:
            return None
        
        serialized = {}
        for col, cfg in config.items():
            if isinstance(cfg, ColumnConfig):
                # Include the class name as type
                data = cfg.to_dict()
                data["type"] = cfg.__class__.__name__
                serialized[col] = data
            else:
                serialized[col] = cfg
        return serialized

    def data_grid(
        self,
        data: Union[pd.DataFrame, dict, list],
        *,
        height: Union[Literal["auto", "content", "stretch"], int] = "auto",
        width: Union[Literal["stretch", "content"], int] = "stretch",
        hide_index: Optional[bool] = None,
        row_height: Optional[int] = None,
        selection_mode: Union[
            Literal["single-row", "multi-row", "single-column", "multi-column", "single-cell", "multi-cell"],
            Iterable[str],
            None
        ] = None,
        on_select: Union[Literal["ignore", "rerun"], Callable[[dict], None], None] = "ignore",
        column_config: Optional[dict[str, Union[ColumnConfig, str, None]]] = None,
        column_order: Optional[Iterable[str]] = None,
        placeholder: Optional[str] = None,
        search: Optional[str] = None,
        theme: Optional[dict[str, Any]] = None,
        key: Optional[str] = None,
    ) -> Any:
        """
        Display a read-only, interactive data grid with optional row/column selection.
        """
        normalized = normalize_data(data)
        all_columns = extract_columns(normalized)
        
        # Filter and order columns if column_order is provided
        if column_order:
            display_columns = [col for col in column_order if col in all_columns]
        else:
            display_columns = all_columns
            
        # Infer types for display columns
        column_types = infer_column_types(normalized, display_columns)
        
        element_key = key or self._new_text_id("grid_data_grid")
        
        # Handle state
        current_selection = self.session_state.get(element_key)
        has_event, event_value = self._get_event_value(element_key, "select")
        if has_event:
            current_selection = event_value
            self.session_state[element_key] = current_selection
            if callable(on_select):
                on_select(current_selection)

        props = {
            "data": normalized,
            "columns": display_columns,
            "columnTypes": column_types,
            "height": height,
            "width": width,
            "hideIndex": hide_index,
            "rowHeight": row_height,
            "selectionMode": selection_mode,
            "columnConfig": self._serialize_column_config(column_config),
            "placeholder": placeholder,
            "search": search,
            "theme": theme,
            "id": element_key,
            "selection": current_selection,
        }
        
        # Handle callbacks and return values
        if callable(on_select):
            props["onSelect"] = "callback"
        else:
            props["onSelect"] = on_select
            
        self._create_element(
            name="grid_data_grid",
            props=props,
            key=element_key
        )
        
        return current_selection

    def data_editor(
        self,
        data: Union[pd.DataFrame, dict, list],
        *,
        height: Union[Literal["auto", "content", "stretch"], int] = "auto",
        width: Union[Literal["stretch", "content"], int] = "stretch",
        hide_index: Optional[bool] = None,
        row_height: Optional[int] = None,
        num_rows: Literal["fixed", "dynamic", "add", "delete"] = "fixed",
        disabled: Union[bool, Iterable[Union[str, int]]] = False,
        on_change: Optional[Callable[[Union[pd.DataFrame, dict, list]], None]] = None,
        column_config: Optional[dict[str, Union[ColumnConfig, str, None]]] = None,
        column_order: Optional[Iterable[str]] = None,
        placeholder: Optional[str] = None,
        theme: Optional[dict[str, Any]] = None,
        key: Optional[str] = None,
    ) -> Any:
        """
        Display an editable data grid with optional dynamic row management.
        """
        normalized = normalize_data(data)
        all_columns = extract_columns(normalized)
        
        # Filter and order columns if column_order is provided
        if column_order:
            display_columns = [col for col in column_order if col in all_columns]
        else:
            display_columns = all_columns
            
        # Infer types for display columns
        column_types = infer_column_types(normalized, display_columns)
        
        element_key = key or self._new_text_id("grid_data_editor")

        # Handle state
        current_data = self.session_state.get(element_key)
        if current_data is None:
            current_data = data
            self.session_state[element_key] = current_data

        has_event, event_value = self._get_event_value(element_key, "change", "data")
        if has_event:
            # event_value is the updated row-major list of dicts
            updated_data = event_value
            
            # Convert back to input type if needed
            if isinstance(data, pd.DataFrame):
                res = pd.DataFrame(updated_data)
            elif isinstance(data, dict):
                # Convert row-major list of dicts back to column-major dict
                if not updated_data:
                    res = {}
                else:
                    res = {k: [row[k] for row in updated_data] for k in updated_data[0].keys()}
            else:
                res = updated_data
            
            current_data = res
            self.session_state[element_key] = current_data
            if on_change:
                on_change(current_data)

        props = {
            "data": normalize_data(current_data), # Use the current state data
            "columns": display_columns,
            "columnTypes": column_types,
            "height": height,
            "width": width,
            "hideIndex": hide_index,
            "rowHeight": row_height,
            "numRows": num_rows,
            "disabled": disabled,
            "columnConfig": self._serialize_column_config(column_config),
            "placeholder": placeholder,
            "theme": theme,
            "id": element_key,
        }
        
        # Handle on_change callback
        if on_change:
            props["onChange"] = "callback"
        else:
            # Default to rerun for data_editor so it returns edited data
            props["onChange"] = "rerun"
            
        self._create_element(
            name="grid_data_editor",
            props=props,
            key=element_key
        )
        
        return current_data
