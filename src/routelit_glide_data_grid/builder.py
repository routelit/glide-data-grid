from typing import Any, Callable, ClassVar, Iterable, Literal, Optional, Union
import pandas as pd
from routelit import AssetTarget, RouteLitBuilder  # type: ignore[import-untyped]
from .utils import normalize_data, extract_columns, infer_column_types

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
        column_config: Optional[dict[str, Any]] = None,
        column_order: Optional[Iterable[str]] = None,
        placeholder: Optional[str] = None,
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
        
        props = {
            "data": normalized,
            "columns": display_columns,
            "columnTypes": column_types,
            "height": height,
            "width": width,
            "hideIndex": hide_index,
            "rowHeight": row_height,
            "selectionMode": selection_mode,
            "columnConfig": column_config,
            "placeholder": placeholder,
        }
        
        # Handle callbacks and return values
        element_key = key or self._new_text_id("grid_data_grid")
        
        if callable(on_select):
            # Register callback
            def selection_callback(payload: dict) -> None:
                on_select(payload)
            
            # Use RouteLit's callback system (assuming it exists in RouteLitBuilder)
            # This is a placeholder for actual callback registration logic
            # self._register_callback(element_key, selection_callback)
            props["onSelect"] = "callback"
        elif on_select == "rerun":
            props["onSelect"] = "rerun"
        else:
            props["onSelect"] = "ignore"
            
        return self._create_element(
            name="grid_data_grid",
            props=props,
            key=element_key
        )
