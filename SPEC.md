# routelit-glide-data-grid: Component Library Specification

**Status:** In Planning
**Version:** 0.1.0
**Last Updated:** March 2026

---

## Table of Contents

1. [Overview](#overview)
2. [Component API Specifications](#component-api-specifications)
3. [Architecture & Design](#architecture--design)
4. [Data Flow & Type System](#data-flow--type-system)
5. [Implementation Phases](#implementation-phases)
6. [Feature Parity: Streamlit → Glide](#feature-parity-streamlit--glide)
7. [Column Configuration System](#column-configuration-system)
8. [File Structure](#file-structure)
9. [Testing Strategy](#testing-strategy)
10. [Development Constraints](#development-constraints)

---

## Overview

### Purpose

`routelit-glide-data-grid` is a RouteLit component library that exposes two high-performance, Streamlit-familiar data grid components powered by [Glide Data Grid](https://grid.glideapps.com/):

- **`data_grid`** – Read-only, high-performance data display with selection support
- **`data_editor`** – Fully editable data grid with dynamic row management

### Value Proposition

| Aspect | Benefit |
|--------|---------|
| **Performance** | Glide's lazy-rendering supports millions of rows with native scrolling |
| **Familiarity** | API mirrors Streamlit's `st.dataframe` and `st.data_editor` for intuitive adoption |
| **RouteLit Patterns** | Follows core RouteLit builder patterns, event handling, and component registration |
| **Customization** | Supports Streamlit-compatible column config for rich cell rendering (numbers, selects, dates, charts, etc.) |
| **Type Safety** | Python type → Glide cell type mapping ensures consistent rendering and editing |

### Target Use Cases

- Dashboard builders needing to display large datasets interactively
- Data entry applications with form-like editable grids
- Analytics apps requiring fast scrolling and selection
- Admin panels with multi-row filtering and export capabilities

---

## Component API Specifications

### `data_grid()`

Display a read-only, interactive data grid with optional row/column selection.

```python
def data_grid(
    data: DataFrame | dict | list,
    *,
    height: Literal["auto", "content", "stretch"] | int = "auto",
    width: Literal["stretch", "content"] | int = "stretch",
    hide_index: bool | None = None,
    row_height: int | None = None,
    selection_mode: (
        Literal["single-row", "multi-row", "single-column", "multi-column", "single-cell", "multi-cell"]
        | Iterable[str]
        | None
    ) = None,
    on_select: Literal["ignore", "rerun"] | Callable[[GridSelection], None] | None = "ignore",
    column_config: dict[str, ColumnConfig | str | None] | None = None,
    column_order: Iterable[str] | None = None,
    placeholder: str | None = None,
    key: str | None = None,
) -> GridSelection | None
```

**Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `data` | DataFrame \| dict \| list | **Required** | Data to display. Accepts pandas DataFrame, dict of lists, list of dicts, Polars DataFrame, PyArrow Table, etc. |
| `height` | str \| int | `"auto"` | Grid height: `"auto"` (≤10 rows), `"content"` (fitted), `"stretch"` (fill container), or pixels |
| `width` | str \| int | `"stretch"` | Grid width: `"stretch"` (fill container), `"content"` (fitted), or pixels |
| `hide_index` | bool \| None | None | Hide index column(s) if True; auto-detect if None |
| `row_height` | int \| None | None | Fixed row height in pixels; uses default if None |
| `selection_mode` | str \| Iterable[str] \| None | None | Enable selections: `"single-row"`, `"multi-row"`, `"single-column"`, `"multi-column"`, `"single-cell"`, `"multi-cell"`, or iterable of these |
| `on_select` | str \| Callable \| None | `"ignore"` | Selection behavior: `"ignore"` (read-only), `"rerun"` (rerun on change), or callback function |
| `column_config` | dict | None | Column customization (see [Column Configuration System](#column-configuration-system)) |
| `column_order` | Iterable[str] \| None | None | Ordered list of column names to display; omit columns by excluding them |
| `placeholder` | str \| None | None | Text for missing/None values; `None` displays as `"None"`, `""` leaves empty |
| `key` | str \| None | None | Stable widget identity for session state and CSS class naming |

**Returns:**

- `None` if `on_select="ignore"` (default)
- `GridSelection` dict if `on_select="rerun"` or callable:
  ```python
  {
      "rows": [0, 2, 5],           # Selected row indices
      "columns": [0, 2],           # Selected column indices
      "cells": [(0, 0), (1, 2)],   # Selected cell coordinates [col, row]
  }
  ```

**Example:**

```python
import pandas as pd
from routelit_glide_data_grid import RLBuilder

rl = RLBuilder(...)
df = pd.DataFrame({
    "name": ["Alice", "Bob", "Charlie"],
    "age": [25, 30, 35],
    "salary": [50000, 60000, 75000],
})

# Read-only grid with multi-row selection
selection = rl.data_grid(
    df,
    height=300,
    selection_mode="multi-row",
    on_select="rerun",
    column_config={
        "salary": cc.NumberColumn("Salary ($)", format="$%d"),
    }
)
```

---

### `data_editor()`

Display an editable data grid with optional dynamic row management.

```python
def data_editor(
    data: DataFrame | dict | list,
    *,
    height: Literal["auto", "content", "stretch"] | int = "auto",
    width: Literal["stretch", "content"] | int = "stretch",
    hide_index: bool | None = None,
    row_height: int | None = None,
    num_rows: Literal["fixed", "dynamic", "add", "delete"] = "fixed",
    disabled: bool | Iterable[str | int] = False,
    on_change: Callable[[DataFrame | dict | list], None] | None = None,
    column_config: dict[str, ColumnConfig | str | None] | None = None,
    column_order: Iterable[str] | None = None,
    placeholder: str | None = None,
    key: str | None = None,
) -> DataFrame | dict | list
```

**Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `data` | DataFrame \| dict \| list | **Required** | Data to edit |
| `height` | str \| int | `"auto"` | Same as `data_grid` |
| `width` | str \| int | `"stretch"` | Same as `data_grid` |
| `hide_index` | bool \| None | None | Same as `data_grid` |
| `row_height` | int \| None | None | Same as `data_grid` |
| `num_rows` | str | `"fixed"` | Row management: `"fixed"` (no add/delete), `"dynamic"` (add & delete), `"add"` (only add), `"delete"` (only delete) |
| `disabled` | bool \| Iterable[str \| int] | False | Disable editing: `False` (all editable), `True` (all disabled), or list of column names/indices |
| `on_change` | Callable | None | Callback invoked when cell edited: `on_change(edited_data)` |
| `column_config` | dict | None | Column customization |
| `column_order` | Iterable[str] \| None | None | Column ordering |
| `placeholder` | str \| None | None | Placeholder text for missing values |
| `key` | str | None | Stable widget identity |

**Returns:**

Current modified data as its input type (pandas DataFrame, dict, or list of dicts).

**Special Behavior:**

- **`num_rows="dynamic"`**: Trailing row with "+" icon appears at bottom; clicking triggers `onRowAppended` callback. Users can delete rows via checkbox + delete key/button.
- **`num_rows="add"`**: Only add rows via trailing row; delete disabled.
- **`num_rows="delete"`**: Only delete rows; add disabled.
- **`on_change` Callback**: Invoked after each cell edit with the updated data.

**Example:**

```python
import pandas as pd
from routelit_glide_data_grid import RLBuilder

rl = RLBuilder(...)
df = pd.DataFrame([
    {"name": "Alice", "age": 25, "active": True},
    {"name": "Bob", "age": 30, "active": False},
])

edited = rl.data_editor(
    df,
    height=400,
    num_rows="dynamic",
    disabled=["name"],  # Name column is read-only
    column_config={
        "age": cc.NumberColumn("Age", min_value=0, max_value=120),
        "active": cc.CheckboxColumn("Active"),
    }
)
```

---

## Architecture & Design

### Component Architecture Diagram

```
┌─────────────────────────────────────────────────────────┐
│ RouteLit Backend (Python)                               │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  RLBuilder.data_grid()  RLBuilder.data_editor()         │
│       │                       │                           │
│       └───────────┬───────────┘                           │
│                   ▼                                        │
│      RouteLitElement(name="grid_data_grid"              │
│                      name="grid_data_editor",            │
│                      props={...})                         │
│                   │                                        │
│                   ▼                                        │
│        Data Normalization & Serialization                │
│        (pandas → dict[] → props)                          │
│                   │                                        │
└───────────────────┼───────────────────────────────────────┘
                    │
                    │ HTTP/WebSocket (JSON)
                    ▼
┌─────────────────────────────────────────────────────────┐
│ RouteLit Frontend (React/TypeScript)                    │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  ComponentStore.get("grid_data_grid")                   │
│         │                                                 │
│         ▼                                                 │
│  GridDataGrid Component (Read-Only)                     │
│         │                                                 │
│         ├─→ DataEditor (Glide)                          │
│         │       ├─→ getCellContent()                    │
│         │       │    ├─→ TypeMapper.pythonToGlide()     │
│         │       │    └─→ Returns GridCell(Text/Number)  │
│         │       │                                         │
│         │       └─→ onGridSelectionChange()             │
│         │            └─→ Event → Backend                 │
│         │                                                 │
│         └─→ Render Grid UI                              │
│                                                           │
│  GridDataEditor Component (Editable)                    │
│         │                                                 │
│         ├─→ DataEditor (Glide)                          │
│         │       ├─→ getCellContent() (as above)         │
│         │       ├─→ onCellEdited(cell, newValue)        │
│         │       ├─→ onRowAppended() [if num_rows="dynamic"] │
│         │       └─→ Edit events → Backend               │
│         │                                                 │
│         └─→ Render Editable Grid UI                     │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

### Python Builder Pattern

Both components extend `RouteLitBuilder` following established routelit patterns:

1. **Builder Method**: `data_grid()` / `data_editor()` in `src/routelit_glide_data_grid/builder.py`
2. **Element Creation**: `_create_element(name="grid_data_grid"|"grid_data_editor", props={...}, key=...)`
3. **Props Transformation**:
   - Snake_case inputs → camelCase React props
   - Data serialization (pandas → JSON-compatible dicts)
   - Callback tracking (routes to event system)
4. **Return Value**: Selection state or modified data (via session state)

### React Component Pattern

Each React component wraps Glide's `DataEditor`:

1. **GridDataGrid.tsx** - Read-only wrapper with getCellContent() and selection handling
2. **GridDataEditor.tsx** - Editable wrapper with onCellEdited() and onRowAppended()
3. **Type mapping** - Python types → Glide GridCell types

---

## Data Flow & Type System

### Data Normalization Pipeline

```
Input Data
  ├─ pandas.DataFrame
  ├─ dict: {"col": [val1, val2, ...]}
  ├─ list: [{"col": val1}, {"col": val2}]
  ├─ Polars.DataFrame
  ├─ PyArrow.Table
  └─ Database cursor (PEP 249)
         │
         ▼
    Normalize to "row-major" format (list of dicts)
    [
      {"col_a": 1, "col_b": "text"},
      {"col_a": 2, "col_b": "text2"},
    ]
         │
         ▼
    Extract columns & rows for Glide
    columns: [GridColumn{title, width, ...}, ...]
    rows: 2
         │
         ▼
    Serialize to JSON props
    Send to React
         │
         ▼
    React getCellContent(col, row)
    Returns GridCell with type
```

### Type Mapping: Python → Glide

| Python Type | Glide Cell Type | Notes | Editable |
|---|---|---|---|
| `str` | `Text` | Plain text cells | Yes |
| `int` | `Number` | Integer cells with formatting | Yes |
| `float` | `Number` | Float cells with decimals | Yes |
| `bool` | `Boolean` | Checkbox control | Yes |
| `datetime.date` | `Text` (Phase 1) / `Custom` (Phase 3) | Date formatting via column config | Phase 3 |
| `datetime.datetime` | `Text` (Phase 1) / `Custom` (Phase 3) | Datetime formatting | Phase 3 |
| `None` | `Text` | Placeholder text from `placeholder` param | Yes |
| `list[str]` | `Bubble` (Phase 3) | Rendered as tag pills | Phase 3 |
| `list[dict]` | `Drilldown` (Phase 4) | Complex drill-down cells | Phase 4 |
| `bytes` | Not supported | Phase 1 limitation |  |
| `dict`, `set`, `tuple` | Not supported | Phase 1 limitation |  |

**Phase 1 focuses on:** `str`, `int`, `float`, `bool`, `None` (scalar types only)

---

## Implementation Phases

### Phase 1: Core Data Grid (Read-Only)

**Goal:** Functional read-only data grid with selection support.

**Duration:** ~2 weeks

**Deliverables:**
- ✅ `data_grid()` builder method
- ✅ `GridDataGrid` React component
- ✅ Type mapper (scalar types)
- ✅ Data normalization
- ✅ Selection handling (single/multi-row)
- ✅ Unit & integration tests

**Key Tasks:**
1. Data normalization (pandas/dict/list → row-major format)
2. Type mapper (Python types → Glide GridCell)
3. Builder method implementation
4. React component with getCellContent()
5. Selection event handling
6. Component registration in setup.ts

---

### Phase 1a: Build System & Frontend Setup *(Parallel with Phase 1)*

**Goal:** Vite build pipeline working, components registering in RouteLit.

**Duration:** ~1 week

**Deliverables:**
- ✅ Vite configuration outputting to `static/`
- ✅ Component store integration
- ✅ Development server setup
- ✅ Build validation

---

### Phase 2: Data Editor (Editable) *(Depends on Phase 1)*

**Goal:** Fully editable grid with callbacks and dynamic rows.

**Duration:** ~2.5 weeks

**Deliverables:**
- ✅ `data_editor()` builder method
- ✅ `GridDataEditor` React component
- ✅ Edit callback mechanism
- ✅ Dynamic row add/delete UI
- ✅ Disabled column support
- ✅ Type coercion and validation

---

### Phase 3: Streamlit API Parity *(Depends on Phase 2)*

**Goal:** Full Streamlit column config support, all selection modes.

**Duration:** ~3 weeks

**Deliverables:**
- ✅ ColumnConfig type classes (NumberColumn, TextColumn, etc.)
- ✅ Custom cell editors (date, datetime, select)
- ✅ Type mapper extensions (date, datetime, lists)
- ✅ All selection modes (single/multi cell, column)
- ✅ Placeholder custom text
- ✅ Index column control

---

### Phase 4: Advanced Features *(Depends on Phase 3)*

**Goal:** Rich cell rendering, custom validation, drag-drop, search.

**Duration:** ~3+ weeks

**Deliverables:**
- ✅ Custom cell rendering (sparklines, images, JSON)
- ✅ Frozen columns/rows support
- ✅ Search functionality
- ✅ Cell validation
- ✅ Drag-drop (columns, rows)
- ✅ Custom styling & themes
- ✅ Performance optimizations

---

## Feature Parity: Streamlit → Glide

### `st.dataframe` → `data_grid`

| Feature | Streamlit Param | Phase | Notes |
|---|---|---|---|
| Display data | `data` | 1 | numpy, pandas, polars, pyarrow, etc. |
| Custom height | `height` | 1 | "auto", "content", "stretch", or px |
| Custom width | `width` | 1 | "stretch", "content", or px |
| Hide index | `hide_index` | 1 | Omit index column from display |
| Column reordering | `column_order` | 1 | Pass subset of columns in order |
| Column config | `column_config` | 3 | NumberColumn, TextColumn, etc. |
| Selection: single-row | `selection_mode="single-row"` | 1 | Only one row at a time |
| Selection: multi-row | `selection_mode="multi-row"` | 1 | Multiple rows via ctrl/click |
| Selection: single-column | `selection_mode="single-column"` | 3 | Single column selection |
| Selection: multi-column | `selection_mode="multi-column"` | 3 | Multiple columns |
| Selection: single-cell | `selection_mode="single-cell"` | 3 | Individual cells |
| Selection: multi-cell | `selection_mode="multi-cell"` | 3 | Rectangular cell regions |
| Selection events | `on_select="rerun"` | 1 | Trigger with row[], columns[], cells[] |
| Row height custom | `row_height` | 1 | Fixed px height per row |
| Empty value text | `placeholder` | 1 | Display custom text for None |

---

### `st.data_editor` → `data_editor`

| Feature | Streamlit Param | Phase | Notes |
|---|---|---|---|
| Display & edit data | `data` | 2 | Editable grid |
| Add rows dynamic | `num_rows="dynamic"` | 2 | Ghost row at bottom |
| Add rows only | `num_rows="add"` | 2 | Only append, no deletion |
| Delete rows only | `num_rows="delete"` | 2 | Only delete via checkbox |
| Disable columns | `disabled=["col"]` | 2 | Column not editable |
| Disable all | `disabled=True` | 2 | Entire grid read-only |
| Edit callback | `on_change=fn` | 2 | Invoke on cell changes |
| Column config | `column_config` | 3 | Convert to GridColumn + custom editors |
| Column types | `st.column_config.*` | 3 | Rich cell types (Number, Text, Date, etc.) |
| Row height | `row_height` | 1 | Fixed row height |
| Empty value text | `placeholder` | 1 | Custom text for None |

---

## Column Configuration System

### Phase 1: Basic Column Config (String labels & width)

```python
column_config = {
    "name": "Full Name",          # String: Use as column label
    "age": None,                   # None: Hide this column
    "salary": "Salary ($)",        # Renamed column
}
```

### Phase 2-3: ColumnConfig Type Classes

```python
from routelit_glide_data_grid import column_config as cc

column_config = {
    "salary": cc.NumberColumn(
        label="Annual Salary",
        format="$%d",           # "$50,000"
        min_value=0,
        max_value=1000000,
        step=1000,
        help="Employee salary in USD"
    ),
    "hired_date": cc.DateColumn(
        label="Hire Date",
        format="MMM D, YYYY",   # "Jan 15, 2020"
    ),
    "email": cc.TextColumn(
        label="Email",
        max_chars=100,
    ),
    "active": cc.CheckboxColumn(
        label="Active Employee",
    ),
    "department": cc.SelectboxColumn(
        label="Department",
        options=["Engineering", "Sales", "HR", "Finance"],
    ),
    "tags": cc.MultiselectColumn(
        label="Tags",
        options=["Senior", "Remote", "Lead", "Junior"],
        color="auto",  # Auto-color tags
    ),
}
```

### Supported Column Config Types

| Type | Phase | Parameters | Editable |
|---|---|---|---|
| NumberColumn | 1 | format, min_value, max_value, step | ✅ |
| TextColumn | 1 | max_chars, validate | ✅ |
| CheckboxColumn | 1 | (none) | ✅ |
| SelectboxColumn | 2 | options, format_func | ✅ |
| MultiselectColumn | 2 | options, color | ✅ |
| DateColumn | 3 | min_value, max_value, format | ✅ |
| DatetimeColumn | 3 | min_value, max_value, format, timezone | ✅ |
| LinkColumn | 2 | display_text, max_chars | ✅ |
| ImageColumn | 3 | width | ❌ |
| ProgressColumn | 4 | min_value, max_value, format, color | ❌ |
| BarChartColumn | 4 | y_min, y_max, color | ❌ |
| LineChartColumn | 4 | y_min, y_max, color | ❌ |
| AreaChartColumn | 4 | y_min, y_max, color | ❌ |
| JsonColumn | 4 | (none) | ❌ |

---

## File Structure

```
routelit-glide-data-grid/
├── SPEC.md                              (This file)
├── README.md
├── pyproject.toml                       # Package config (uv)
├── Makefile                             # Development tasks
│
├── src/
│   ├── routelit_glide_data_grid/
│   │   ├── __init__.py                  # Package exports
│   │   ├── builder.py                   # data_grid(), data_editor() methods
│   │   ├── types.py                     # ColumnConfig classes (Phase 3+)
│   │   ├── utils.py                     # normalize_data(), helpers
│   │   ├── py.typed                     # PEP 561 marker
│   │   └── static/                      # Built frontend (generated by Vite)
│   │
│   └── frontend/                        # React/TypeScript
│       ├── package.json
│       ├── pnpm-lock.yaml
│       ├── vite.config.ts
│       ├── tsconfig.json
│       ├── eslint.config.js
│       │
│       └── src/
│           ├── index.ts                 # Exports
│           ├── setup.ts                 # Component registration
│           ├── main.tsx                 # Dev app entry
│           │
│           ├── components/
│           │   ├── GridDataGrid.tsx     # Read-only grid (Phase 1)
│           │   ├── GridDataEditor.tsx   # Editable grid (Phase 2)
│           │   └── editors/             # Custom editors (Phase 3+)
│           │       ├── DatePickerEditor.tsx
│           │       ├── SelectboxEditor.tsx
│           │       └── NumericEditor.tsx
│           │
│           └── utils/
│               ├── typeMapper.ts        # Python type → Glide cell type
│               ├── dataMapper.ts        # Data normalization
│               └── eventMappers.ts      # Event serialization
│
├── tests/
│   ├── conftest.py                      # Pytest fixtures
│   ├── builder_test.py                  # Unit tests
│   ├── integration_test.py              # E2E tests
│   └── test_data/                       # Sample datasets
│
├── docs/
│   ├── index.md                         # Main docs
│   ├── api.md                           # API reference
│   └── examples.md                      # Usage examples
│
└── .github/
    └── workflows/
        ├── main.yml                     # CI/CD
        └── on-release-main.yml          # Release
```

---

## Testing Strategy

### Unit Tests (Python)

**File:** `tests/builder_test.py`

- Data normalization with various input types
- Builder method initialization
- Selection state construction
- Return value types and structures

### Unit Tests (React)

**File:** `tests/*.test.tsx`

- Component rendering with data
- Cell type mapping
- Selection change handlers
- Edit callbacks

### Integration Tests

**File:** `tests/integration_test.py`

- Full cycle: Python → React → display → selection → Python
- Full cycle: Python → React → edit → Python
- Column config rendering
- Dynamic row add/delete

### Test Coverage Goals

- ✅ **Data normalization:** 100%
- ✅ **Builder methods:** 100%
- ✅ **Type mapping:** 100%
- ✅ **Component rendering:** 80%+
- ✅ **Event handling:** 100%

---

## Development Constraints

### Phase 1 Limitations (Intentional)

| Limitation | Reason | Addressed In |
|---|---|---|
| Scalar types only | Simpler type system | Phase 3+ |
| No date/datetime support | Requires custom editor UI | Phase 3 |
| No list/array values | Complex rendering | Phase 3-4 |
| Read-only by default | Focus on display first | Phase 2 |
| No column config | Basic string labels only | Phase 3 |
| Single-row selection max | Simpler event handling | Phase 3 |
| No search/filter | Scope control | Phase 4 |

### Data Type Limitations

**Not Supported (Any Phase):**
- `bytes`, `bytearray`, `memoryview` – Binary data not renderable
- `complex`, `fractions.Fraction` – No clear display format
- `set`, `frozenset`, `tuple` – No grid cell representation
- Nested dicts/objects – Recommend flattening

**Supported Later:**
- `datetime.date`, `datetime.datetime` – Phase 3
- `list[str]` – Phase 3 as Bubble cells
- Images, JSON, charts – Phase 4

### Performance Constraints

- **Row limit:** No hard limit; millions of rows supported
- **Column limit:** Practically ~200 columns
- **Cell limit:** Practically ~10M cells
- **Edit latency:** Target <100ms callback round-trip

---

## Development Roadmap

### Timeline (Estimated)

- **Week 1-2:** Phase 1 + Phase 1a (parallel)
- **Week 3-5:** Phase 2
- **Week 6-8:** Phase 3
- **Week 9-12:** Phase 4

### Success Criteria

✅ Phase 1 Beta: Read-only grid renders 10K+ rows smoothly
✅ Phase 2 Beta: Editable grid with callbacks working
✅ Phase 3 Beta: Full Streamlit API parity achieved
✅ Phase 4 Release: Advanced features complete, production-ready

---

## References & Resources

- [Glide Data Grid Docs](https://docs.grid.glideapps.com/)
- [Streamlit st.dataframe](https://docs.streamlit.io/develop/api-reference/data/st.dataframe)
- [Streamlit st.data_editor](https://docs.streamlit.io/develop/api-reference/data/st.data_editor)
- [RouteLit Core Documentation](https://routelit.readthedocs.io/)
- [routelit-mantine Reference](./routelit-mantine/)

---

**Next Step:** After stakeholder approval, proceed with **Phase 1** implementation.
