# Code Examples

This page provides detailed examples of common usage patterns for `routelit-glide-data-grid`.

## Data Formats

The grid automatically normalizes various Python data structures.

### Pandas DataFrame
The standard way to display structured data.

```python
import pandas as pd
df = pd.DataFrame({"A": [1, 2], "B": [3, 4]})
ui.data_grid(df)
```

### Simple Lists
A list of scalar values automatically becomes a single-column grid.

```python
plan_items = ["Research", "Drafting", "Review"]
# Result: A grid with one column named 'value'
ui.data_grid(plan_items)
```

### Key-Value Dictionaries
A simple dictionary is normalized into 'key' and 'value' columns.

```python
config = {"Host": "localhost", "Port": 8080}
# Result: A grid with columns 'key' and 'value'
ui.data_grid(config)
```

## Advanced Layout

### Frozen Columns and Rows
Keep important context visible while scrolling.

```python
# Freeze the first 2 columns and the header (default)
ui.data_grid(large_df, freeze_columns=2)

# Freeze rows at the bottom (useful for totals/summaries)
ui.data_grid(data, freeze_trailing_rows=1)
```

### Column Grouping
Organize related columns under a shared header.

```python
from routelit_glide_data_grid import TextColumn

ui.data_grid(
    employee_df,
    column_config={
        "First Name": TextColumn(group="Personal"),
        "Last Name": TextColumn(group="Personal"),
        "Office": TextColumn(group="Location"),
        "City": TextColumn(group="Location"),
    }
)
```

### Row Markers
Customize the index column appearance.

```python
# Show checkboxes for multi-selection
ui.data_grid(df, row_markers="checkbox")

# Show both numbers and checkboxes
ui.data_grid(df, row_markers="both")
```

## Data Editing

The `data_editor` allows users to modify data directly in the browser.

```python
def handle_change(new_data):
    # This callback runs whenever a cell is edited
    save_to_database(new_data)

edited = ui.data_editor(
    df,
    num_rows="dynamic", # Allow adding/deleting rows
    on_change=handle_change,
    trailing_row_options={
        "hint": "Add new record..."
    }
)
```

## Selection Handling

You can respond to selection events in real-time.

```python
def on_select(selection):
    if selection and selection["rows"]:
        ui.info(f"You selected rows: {selection['rows']}")

ui.data_grid(
    df,
    selection_mode="multi-row",
    on_select=on_select
)
```

The `selection` object structure:
- `rows`: List of selected row indices.
- `columns`: List of selected column indices.
- `current`: Details about the primary selected cell or range.
