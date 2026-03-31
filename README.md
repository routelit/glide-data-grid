# RouteLit Glide Data Grid

[![Release](https://img.shields.io/github/v/release/rolangom/routelit-glide-data-grid)](https://img.shields.io/github/v/release/rolangom/routelit-glide-data-grid)
[![Build status](https://img.shields.io/github/actions/workflow/status/rolangom/routelit-glide-data-grid/main.yml?branch=main)](https://github.com/rolangom/routelit-glide-data-grid/actions/workflows/main.yml?query=branch%3Amain)
[![codecov](https://codecov.io/gh/rolangom/routelit-glide-data-grid/branch/main/graph/badge.svg)](https://codecov.io/gh/rolangom/routelit-glide-data-grid)
[![License](https://img.shields.io/github/license/rolangom/routelit-glide-data-grid)](https://img.shields.io/github/license/rolangom/routelit-glide-data-grid)

`routelit-glide-data-grid` is a high-performance, interactive data grid and editor for RouteLit, powered by the incredible [Glide Data Grid](https://grid.glideapps.com/) library.

- **Github repository**: <https://github.com/rolangom/routelit-glide-data-grid/>
- **Documentation**: <https://rolangom.github.io/routelit-glide-data-grid/>

## Key Features

- **🚀 Performance**: Smoothly renders millions of rows with native-speed scrolling.
- **📝 Data Editing**: A powerful `data_editor` with validation and dynamic row management.
- **🏗️ Advanced Layout**: 
    - **Frozen Columns & Trailing Rows**: Keep context visible while navigating large datasets.
    - **Column Grouping**: Merge headers into logical categories.
    - **Row Markers**: Custom index column with support for numbers, checkboxes, or both.
- **🎨 Rich Column Types**: Specialized cells for Text, Numbers, Dates, Images, Links, Markdown, and JSON.
- **🧩 Flexible Data Formats**: Supports pandas DataFrames, lists of dicts, dictionaries of lists, simple lists, and key-value mappings.
- **🛡️ Robust Typing**: Full Python type hints with specialized selection and configuration types.

## Installation

```bash
pip install routelit-glide-data-grid
```

## Quick Start

```python
import pandas as pd
from routelit_glide_data_grid import RLBuilder, TextColumn

def app(ui: RLBuilder):
    df = pd.DataFrame({
        "Name": ["Alice", "Bob", "Charlie"],
        "Role": ["Engineer", "Designer", "Manager"]
    })
    
    ui.title("Project Dashboard")
    
    # Render an interactive grid
    ui.data_grid(
        df,
        freeze_columns=1,
        column_config={
            "Name": TextColumn(group="Identity"),
            "Role": TextColumn(group="Identity"),
        }
    )
```

## Development

### 1. Set Up Environment
Install dependencies and pre-commit hooks:
```bash
make install
```

### 2. Frontend Development
Start the Vite dev server for the React component:
```bash
cd src/frontend
pnpm install
pnpm run dev
```

### 3. Backend Development
In another terminal, run the feature showcase app:
```bash
uv sync
uv run src/example/example.py
```

### 4. Quality Assurance
Run tests and linting before submitting changes:
```bash
make test
make check
```

---

Maintained by [Rolando Gomez Tabar](https://rolangom.com).  
Initially generated with [fpgmaas/cookiecutter-uv](https://github.com/fpgmaas/cookiecutter-uv).
