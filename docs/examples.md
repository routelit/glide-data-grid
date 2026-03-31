# Code Examples

This page provides detailed examples of common usage patterns for `routelit-glide-data-grid`.

## Quick Start

```python
import pandas as pd

df = pd.DataFrame({
    "Name": ["Alice", "Bob", "Charlie"],
    "Role": ["Engineer", "Designer", "Manager"],
    "Salary": [95000, 88000, 105000],
})

ui.data_grid(df)
```

---

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

### Lists of Dictionaries

```python
records = [
    {"name": "Alice", "age": 30},
    {"name": "Bob", "age": 25},
]
ui.data_grid(records)
```

---

## Column Types

Specialized column types provide rich editing and rendering capabilities.

### TextColumn

```python
from routelit_glide_data_grid import TextColumn

ui.data_grid(
    df,
    column_config={
        "Name": TextColumn(label="Full Name", max_chars=50),
    },
)
```

### NumberColumn

```python
from routelit_glide_data_grid import NumberColumn

ui.data_grid(
    df,
    column_config={
        "Salary": NumberColumn(
            label="Annual Salary",
            format="$%,.2f",
            min_value=0,
            max_value=1000000,
        ),
    },
)
```

### DateColumn

```python
from routelit_glide_data_grid import DateColumn

ui.data_grid(
    df,
    column_config={
        "Hire Date": DateColumn(
            format="MMM D, YYYY",
            min_value="2020-01-01",
        ),
    },
)
```

### SelectboxColumn

```python
from routelit_glide_data_grid import SelectboxColumn

ui.data_grid(
    df,
    column_config={
        "Department": SelectboxColumn(
            options=["Engineering", "Sales", "HR", "Finance"],
        ),
    },
)
```

### LinkColumn

```python
from routelit_glide_data_grid import LinkColumn

ui.data_grid(
    df,
    column_config={
        "Website": LinkColumn(
            display_text="Visit Site",
            max_chars=50,
        ),
    },
)
```

### ImageColumn

```python
from routelit_glide_data_grid import ImageColumn

ui.data_grid(
    df,
    column_config={
        "Avatar": ImageColumn(label="Profile Picture"),
    },
)
```

### Other Column Types

```python
from routelit_glide_data_grid import (
    CheckboxColumn,
    MultiselectColumn,
    DatetimeColumn,
    ProtectedColumn,
    IDColumn,
    MarkdownColumn,
    JsonColumn,
)

ui.data_grid(
    df,
    column_config={
        "Active": CheckboxColumn(label="Is Active"),
        "Tags": MultiselectColumn(options=["Senior", "Remote", "Lead"]),
        "Created": DatetimeColumn(format="MMM D, YYYY HH:mm"),
        "Password": ProtectedColumn(label="Secret"),
        "ID": IDColumn(width="small"),
        "Notes": MarkdownColumn(),
        "Metadata": JsonColumn(),
    },
)
```

---

## Column Configuration

All column types share these base properties.

### Common Properties

```python
from routelit_glide_data_grid import TextColumn

ui.data_grid(
    df,
    column_config={
        "Name": TextColumn(
            label="Full Name",
            width=200,               # Pixel width or "small"|"medium"|"large"
            help="Enter the full name",
            content_align="center",  # "left" | "center" | "right"
            style="normal",          # "normal" | "faded"
            required=True,
        ),
    },
)
```

### Hiding Columns

```python
ui.data_grid(
    df,
    column_config={
        "internal_id": TextColumn(hidden=True),
        "temp_col": None,  # Also hides
    },
)
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
    },
)
```

### Reordering Columns

```python
# Show only specific columns in custom order
ui.data_grid(df, column_order=["Name", "Role", "Salary"])
```

---

## Layout & Sizing

### Frozen Columns and Rows

Keep important context visible while scrolling.

```python
# Freeze the first 2 columns
ui.data_grid(large_df, freeze_columns=2)

# Freeze trailing rows (useful for totals/summaries)
ui.data_grid(data, freeze_trailing_rows=1)
```

### Width Control

```python
# Stretch to fill container (default)
ui.data_grid(df, width="stretch")

# Fit to content width
ui.data_grid(df, width="content")

# Fixed pixel width
ui.data_grid(df, width=800)
```

### Row Height

```python
ui.data_grid(df, row_height=48)
ui.data_editor(df, row_height=60)
```

### Hide Index

```python
ui.data_grid(df, hide_index=True)
```

### Row Markers

Customize the index column appearance.

```python
ui.data_grid(df, row_markers="none")      # No index column
ui.data_grid(df, row_markers="number")    # Row numbers only
ui.data_grid(df, row_markers="checkbox")  # Checkboxes for selection
ui.data_grid(df, row_markers="both")      # Numbers + checkboxes
```

### Placeholder for Missing Values

```python
ui.data_grid(df, placeholder="N/A")
ui.data_grid(df, placeholder="")  # Show empty string
```

---

## Theming & Styling

### Custom Theme

```python
dark_theme = {
    "bgCell": "#1e1e1e",
    "bgHeader": "#333333",
    "textDark": "#ffffff",
    "borderColor": "#444444",
    "accentColor": "#007acc",
    "selectionColor": "rgba(0, 122, 204, 0.3)",
}

ui.data_grid(df, theme=dark_theme)
```

### Per-Column Theme Override

```python
from routelit_glide_data_grid import TextColumn

ui.data_grid(
    df,
    column_config={
        "Name": TextColumn(
            theme_override={
                "bgCell": "#f0f7ff",
                "textDark": "#003366",
            },
        ),
    },
)
```

---

## Interactivity

### Search

```python
# Static search
ui.data_grid(df, search="Alice")

# Dynamic search with text input
query = ui.text_input("Search", key="search-input")
ui.data_grid(df, search=query)
```

### Selection Modes

```python
# Single row
ui.data_grid(df, selection_mode="single-row", on_select="rerun")

# Multi row
ui.data_grid(df, selection_mode="multi-row", on_select="rerun")

# Single column
ui.data_grid(df, selection_mode="single-column", on_select="rerun")

# Multi column
ui.data_grid(df, selection_mode="multi-column", on_select="rerun")

# Single cell
ui.data_grid(df, selection_mode="single-cell", on_select="rerun")

# Multi cell (rectangular regions)
ui.data_grid(df, selection_mode="multi-cell", on_select="rerun")
```

### Selection Callback

```python
def on_select(selection):
    if selection and selection["rows"]:
        ui.info(f"Selected rows: {selection['rows']}")

ui.data_grid(
    df,
    selection_mode="multi-row",
    on_select=on_select,
)
```

Selection object structure:
- `rows`: List of selected row indices
- `columns`: List of selected column indices
- `current`: Primary selection details (`cell` and `range`)

---

## Data Editing

The `data_editor` allows users to modify data directly in the browser.

### Basic Editor

```python
def handle_change(new_data):
    save_to_database(new_data)

edited = ui.data_editor(
    df,
    num_rows="dynamic",
    on_change=handle_change,
    trailing_row_options={
        "hint": "Add new record..."
    },
)
```

### Row Modes

```python
ui.data_editor(df, num_rows="fixed")    # No add/delete (default)
ui.data_editor(df, num_rows="dynamic")  # Add AND delete rows
ui.data_editor(df, num_rows="add")      # Add only
ui.data_editor(df, num_rows="delete")   # Delete only
```

### Validation

```python
from routelit_glide_data_grid import NumberColumn, TextColumn

edited = ui.data_editor(
    df,
    column_config={
        "Age": NumberColumn(min_value=0, max_value=120),
        "Email": TextColumn(max_chars=100),
    },
)
```

### Disabled Columns

```python
# Entire grid read-only
ui.data_editor(df, disabled=True)

# Disable specific columns by name
ui.data_editor(df, disabled=["id", "created_at"])

# Disable specific columns by index
ui.data_editor(df, disabled=[0, 2])

# Disable via column config
from routelit_glide_data_grid import IDColumn

ui.data_editor(
    df,
    column_config={
        "id": IDColumn(disabled=True),
    },
)
```

---

## Advanced Patterns

### Complete Example

```python
from routelit_glide_data_grid import (
    TextColumn,
    NumberColumn,
    SelectboxColumn,
    DateColumn,
)

# Theme
theme = {
    "bgCell": "#ffffff",
    "accentColor": "#4a90d9",
    "selectionColor": "rgba(74, 144, 217, 0.15)",
}

# Column config
columns = {
    "Name": TextColumn(label="Full Name", width="large"),
    "Salary": NumberColumn(format="$%,.0f", min_value=0),
    "Department": SelectboxColumn(options=["Engineering", "Sales", "HR"]),
    "Start Date": DateColumn(format="MMM D, YYYY"),
    "Notes": TextColumn(style="faded"),
}

# Grid
ui.data_grid(
    df,
    theme=theme,
    column_config=columns,
    column_order=["Name", "Department", "Salary", "Start Date", "Notes"],
    freeze_columns=1,
    selection_mode="multi-row",
    on_select="rerun",
    hide_index=True,
)
```

### Editor with Trailing Row

```python
edited = ui.data_editor(
    df,
    num_rows="dynamic",
    trailing_row_options={
        "hint": "Click to add a new record",
    },
)
```

---

## TODO

The following column types are currently **read-only** in both `data_grid` and `data_editor`. Editable support will be added in a future release.

### Editable MultiselectColumn

```python
# Currently read-only in both data_grid and data_editor
ui.data_grid(
    df,
    column_config={
        "Tags": MultiselectColumn(options=["Senior", "Remote", "Lead"]),
    },
)

# Editable multiselect in data_editor (coming soon)
# ui.data_editor(df, column_config={"Tags": MultiselectColumn(...)})
```

### Editable SelectboxColumn

```python
# Currently read-only in both data_grid and data_editor
ui.data_grid(
    df,
    column_config={
        "Department": SelectboxColumn(options=["Engineering", "Sales", "HR"]),
    },
)

# Editable selectbox in data_editor (coming soon)
# ui.data_editor(df, column_config={"Department": SelectboxColumn(...)})
```
