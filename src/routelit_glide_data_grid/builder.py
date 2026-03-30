from collections.abc import Callable, Iterable
from typing import (
    Any,
    ClassVar,
    Literal,
    TypeVar,
    overload,
)

import pandas as pd
from routelit import AssetTarget, RouteLitBuilder

from .types import ColumnConfig, GridSelection
from .utils import extract_columns, infer_column_types, normalize_data

T = TypeVar("T", pd.DataFrame, dict, list)


class RLBuilder(RouteLitBuilder):
    """
    A builder for a RouteLit application.
    This Builder template serves as example on how to create a RouteLit custom components.
    """

    static_assets_targets: ClassVar[list[AssetTarget]] = [
        {
            "package_name": "routelit_glide_data_grid",
            "path": "static",
        }
    ]

    def _serialize_column_config(self, config: dict[str, ColumnConfig | str | None] | None) -> dict[str, Any] | None:
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

    def _prepare_grid_data(
        self,
        data: pd.DataFrame | dict | list,
        column_order: Iterable[str] | None,
    ) -> tuple[list[dict[str, Any]], list[str], dict[str, str]]:
        """Normalize data and extract/infer column information."""
        normalized = normalize_data(data)
        all_columns = extract_columns(normalized)

        # Filter and order columns if column_order is provided
        display_columns = [col for col in column_order if col in all_columns] if column_order else all_columns

        # Infer types for display columns
        column_types = infer_column_types(normalized, display_columns)

        return normalized, display_columns, column_types

    def _get_common_props(
        self,
        columns: list[str],
        column_types: dict[str, str],
        height: Literal["auto", "content", "stretch"] | int,
        width: Literal["stretch", "content"] | int,
        hide_index: bool | None,
        row_height: int | None,
        row_markers: str | None,
        freeze_columns: int,
        freeze_trailing_rows: int,
        trailing_row_options: dict[str, Any] | None,
        column_config: dict[str, ColumnConfig | str | None] | None,
        placeholder: str | None,
        theme: dict[str, Any] | None,
        element_id: str,
    ) -> dict[str, Any]:
        """Prepare props common to both data_grid and data_editor."""
        return {
            "columns": columns,
            "columnTypes": column_types,
            "height": height,
            "width": width,
            "hideIndex": hide_index,
            "rowHeight": row_height,
            "rowMarkers": row_markers,
            "freezeColumns": freeze_columns,
            "freezeTrailingRows": freeze_trailing_rows,
            "trailingRowOptions": trailing_row_options,
            "columnConfig": self._serialize_column_config(column_config),
            "placeholder": placeholder,
            "theme": theme,
            "id": element_id,
        }

    def data_grid(
        self,
        data: pd.DataFrame | dict | list,
        *,
        height: Literal["auto", "content", "stretch"] | int = "auto",
        width: Literal["stretch", "content"] | int = "stretch",
        hide_index: bool | None = None,
        row_height: int | None = None,
        row_markers: Literal["none", "number", "checkbox", "both"] | None = None,
        freeze_columns: int = 0,
        freeze_trailing_rows: int = 0,
        trailing_row_options: dict[str, Any] | None = None,
        selection_mode: Literal["single-row", "multi-row", "single-column", "multi-column", "single-cell", "multi-cell"]
        | Iterable[str]
        | None = None,
        on_select: Literal["ignore", "rerun"] | Callable[[dict], None] | None = "ignore",
        column_config: dict[str, ColumnConfig | str | None] | None = None,
        column_order: Iterable[str] | None = None,
        placeholder: str | None = None,
        search: str | None = None,
        theme: dict[str, Any] | None = None,
        key: str | None = None,
    ) -> GridSelection | None:
        """
        Display a read-only, interactive data grid with optional row/column selection.

        Args:
            data (Union[pd.DataFrame, dict, list]): The data to display. Supports
                pandas DataFrame, column-major dict, row-major list of dicts, simple
                lists, and key-value dicts.
            height (Union[Literal["auto", "content", "stretch"], int]): Grid
                height. "auto" (default), "content", "stretch", or pixel value.
            width (Union[Literal["stretch", "content"], int]): Grid width.
                "stretch" (default), "content", or pixel value.
            hide_index (Optional[bool]): Whether to hide the index column.
            row_height (Optional[int]): Fixed row height in pixels.
            row_markers (Optional[Literal["none", "number", "checkbox", "both"]]):
                Type of row markers to display.
            freeze_columns (int): Number of columns to freeze on the left.
            freeze_trailing_rows (int): Number of rows to freeze at the bottom.
            trailing_row_options (Optional[dict[str, Any]]): Options for the
                trailing row (hint, addIcon, etc.).
            selection_mode (Union[Literal["single-row", "multi-row", ...], Iterable[str], None]):
                Selection mode.
            on_select (Union[Literal["ignore", "rerun"], Callable[[dict], None], None]):
                Action on selection.
            column_config (Optional[dict[str, Union[ColumnConfig, str, None]]]):
                Dictionary of column names to ColumnConfig objects.
            column_order (Optional[Iterable[str]]): Ordered list of column names to display.
            placeholder (Optional[str]): Text to display for missing/None values.
            search (Optional[str]): Search query to filter data.
            theme (Optional[dict[str, Any]]): Theme override dictionary.
            key (Optional[str]): Stable widget identity.

        Returns:
            Optional[GridSelection]: The current selection state if on_select is
                not "ignore".
        """
        normalized, display_columns, column_types = self._prepare_grid_data(data, column_order)
        element_key = key or self._new_text_id("grid_data_grid")

        # Handle state
        current_selection = self.session_state.get(element_key)
        has_event, event_value = self._get_event_value(element_key, "select")
        if has_event:
            current_selection = event_value
            self.session_state[element_key] = current_selection
            if callable(on_select):
                on_select(current_selection)

        props = self._get_common_props(
            columns=display_columns,
            column_types=column_types,
            height=height,
            width=width,
            hide_index=hide_index,
            row_height=row_height,
            row_markers=row_markers,
            freeze_columns=freeze_columns,
            freeze_trailing_rows=freeze_trailing_rows,
            trailing_row_options=trailing_row_options,
            column_config=column_config,
            placeholder=placeholder,
            theme=theme,
            element_id=element_key,
        )
        props.update({
            "data": normalized,
            "selectionMode": selection_mode,
            "search": search,
            "selection": current_selection,
        })

        # Handle callbacks and return values
        if callable(on_select):
            props["onSelect"] = "callback"
        else:
            props["onSelect"] = on_select

        self._create_element(name="grid_data_grid", props=props, key=element_key)

        return current_selection

    @overload
    def data_editor(
        self,
        data: pd.DataFrame,
        *,
        height: Literal["auto", "content", "stretch"] | int = "auto",
        width: Literal["stretch", "content"] | int = "stretch",
        hide_index: bool | None = None,
        row_height: int | None = None,
        row_markers: Literal["none", "number", "checkbox", "both"] | None = None,
        freeze_columns: int = 0,
        freeze_trailing_rows: int = 0,
        trailing_row_options: dict[str, Any] | None = None,
        num_rows: Literal["fixed", "dynamic", "add", "delete"] = "fixed",
        disabled: bool | Iterable[str | int] = False,
        on_change: Callable[[pd.DataFrame], None] | None = None,
        column_config: dict[str, ColumnConfig | str | None] | None = None,
        column_order: Iterable[str] | None = None,
        placeholder: str | None = None,
        theme: dict[str, Any] | None = None,
        key: str | None = None,
    ) -> pd.DataFrame: ...

    @overload
    def data_editor(
        self,
        data: dict,
        *,
        height: Literal["auto", "content", "stretch"] | int = "auto",
        width: Literal["stretch", "content"] | int = "stretch",
        hide_index: bool | None = None,
        row_height: int | None = None,
        row_markers: Literal["none", "number", "checkbox", "both"] | None = None,
        freeze_columns: int = 0,
        freeze_trailing_rows: int = 0,
        trailing_row_options: dict[str, Any] | None = None,
        num_rows: Literal["fixed", "dynamic", "add", "delete"] = "fixed",
        disabled: bool | Iterable[str | int] = False,
        on_change: Callable[[dict], None] | None = None,
        column_config: dict[str, ColumnConfig | str | None] | None = None,
        column_order: Iterable[str] | None = None,
        placeholder: str | None = None,
        theme: dict[str, Any] | None = None,
        key: str | None = None,
    ) -> dict: ...

    @overload
    def data_editor(
        self,
        data: list,
        *,
        height: Literal["auto", "content", "stretch"] | int = "auto",
        width: Literal["stretch", "content"] | int = "stretch",
        hide_index: bool | None = None,
        row_height: int | None = None,
        row_markers: Literal["none", "number", "checkbox", "both"] | None = None,
        freeze_columns: int = 0,
        freeze_trailing_rows: int = 0,
        trailing_row_options: dict[str, Any] | None = None,
        num_rows: Literal["fixed", "dynamic", "add", "delete"] = "fixed",
        disabled: bool | Iterable[str | int] = False,
        on_change: Callable[[list], None] | None = None,
        column_config: dict[str, ColumnConfig | str | None] | None = None,
        column_order: Iterable[str] | None = None,
        placeholder: str | None = None,
        theme: dict[str, Any] | None = None,
        key: str | None = None,
    ) -> list: ...

    def data_editor(
        self,
        data: pd.DataFrame | dict | list,
        *,
        height: Literal["auto", "content", "stretch"] | int = "auto",
        width: Literal["stretch", "content"] | int = "stretch",
        hide_index: bool | None = None,
        row_height: int | None = None,
        row_markers: Literal["none", "number", "checkbox", "both"] | None = None,
        freeze_columns: int = 0,
        freeze_trailing_rows: int = 0,
        trailing_row_options: dict[str, Any] | None = None,
        num_rows: Literal["fixed", "dynamic", "add", "delete"] = "fixed",
        disabled: bool | Iterable[str | int] = False,
        on_change: Callable[[pd.DataFrame | dict | list], None] | None = None,
        column_config: dict[str, ColumnConfig | str | None] | None = None,
        column_order: Iterable[str] | None = None,
        placeholder: str | None = None,
        theme: dict[str, Any] | None = None,
        key: str | None = None,
    ) -> pd.DataFrame | dict | list:
        """
        Display an editable data grid with optional dynamic row management.

        Args:
            data (Union[pd.DataFrame, dict, list]): The initial data to display.
                Supports pandas DataFrame, column-major dict, row-major list of
                dicts, simple lists, and key-value dicts.
            height (Union[Literal["auto", "content", "stretch"], int]): Grid
                height. "auto" (default), "content", "stretch", or pixel value.
            width (Union[Literal["stretch", "content"], int]): Grid width.
                "stretch" (default), "content", or pixel value.
            hide_index (Optional[bool]): Whether to hide the index column.
            row_height (Optional[int]): Fixed row height in pixels.
            row_markers (Optional[Literal["none", "number", "checkbox", "both"]]):
                Type of row markers to display.
            freeze_columns (int): Number of columns to freeze on the left.
            freeze_trailing_rows (int): Number of rows to freeze at the bottom.
            trailing_row_options (Optional[dict[str, Any]]): Options for the
                trailing row (hint, addIcon, etc.).
            num_rows (Literal["fixed", "dynamic", "add", "delete"]): Row
                management mode.
            disabled (Union[bool, Iterable[Union[str, int]]]): Global disable
                flag, or list of column names/indices to disable.
            on_change (Optional[Callable]): Optional callback when data is modified.
            column_config (Optional[dict[str, Union[ColumnConfig, str, None]]]):
                Dictionary of column names to ColumnConfig objects.
            column_order (Optional[Iterable[str]]): Ordered list of column names to display.
            placeholder (Optional[str]): Text to display for missing/None values.
            theme (Optional[dict[str, Any]]): Theme override dictionary.
            key (Optional[str]): Stable widget identity.

        Returns:
            Union[pd.DataFrame, dict, list]: The current state of the data
                (updated after edits).
        """
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
                res = {} if not updated_data else {k: [row[k] for row in updated_data] for k in updated_data[0]}
            else:
                res = updated_data

            current_data = res
            self.session_state[element_key] = current_data
            if on_change:
                on_change(current_data)

        normalized, display_columns, column_types = self._prepare_grid_data(current_data, column_order)

        props = self._get_common_props(
            columns=display_columns,
            column_types=column_types,
            height=height,
            width=width,
            hide_index=hide_index,
            row_height=row_height,
            row_markers=row_markers,
            freeze_columns=freeze_columns,
            freeze_trailing_rows=freeze_trailing_rows,
            trailing_row_options=trailing_row_options,
            column_config=column_config,
            placeholder=placeholder,
            theme=theme,
            element_id=element_key,
        )
        props.update({
            "data": normalized,
            "numRows": num_rows,
            "disabled": disabled,
        })

        # Handle on_change callback
        if on_change:
            props["onChange"] = "callback"
        else:
            # Default to rerun for data_editor so it returns edited data
            props["onChange"] = "rerun"

        self._create_element(name="grid_data_editor", props=props, key=element_key)

        return current_data
