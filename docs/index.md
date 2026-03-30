# RouteLit Glide Data Grid

[![Release](https://img.shields.io/github/v/release/rolangom/routelit-glide-data-grid)](https://img.shields.io/github/v/release/rolangom/routelit-glide-data-grid)
[![Build status](https://img.shields.io/github/actions/workflow/status/rolangom/routelit-glide-data-grid/main.yml?branch=main)](https://github.com/rolangom/routelit-glide-data-grid/actions/workflows/main.yml?query=branch%3Amain)
[![License](https://img.shields.io/github/license/rolangom/routelit-glide-data-grid)](https://img.shields.io/github/license/rolangom/routelit-glide-data-grid)

`routelit-glide-data-grid` is a high-performance, interactive data grid component for RouteLit, powered by [Glide Data Grid](https://grid.glideapps.com/).

## Key Features

- **🚀 High Performance**: Effortlessly renders millions of rows with native-speed smooth scrolling.
- **📝 Data Editing**: Fully interactive `data_editor` with validation, dynamic row addition/deletion, and state synchronization.
- **🏗️ Advanced Layout**:
    - **Frozen Columns & Rows**: Keep primary identifiers visible while scrolling large datasets.
    - **Column Grouping**: Logically organize headers under merged "super-headers".
    - **Custom Row Markers**: Flexible index column options including numbers, checkboxes, or both.
- **🎨 Rich Column Types**: Specialized rendering for Numbers, Dates, Images, Links, Markdown, JSON, and more.
- **🧩 Flexible Data Formats**: Use pandas DataFrames, lists of dicts, dictionaries of lists, simple lists, or key-value mappings.
- **🛡️ Strong Typing**: Fully typed Python API with specialized selection and configuration types for robust development.

## Installation

Install the package via pip:

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

    ui.title("My Project Grid")

    # Simple data grid with frozen column and grouping
    ui.data_grid(
        df,
        freeze_columns=1,
        column_config={
            "Name": TextColumn(group="Identity"),
            "Role": TextColumn(group="Identity"),
        }
    )
```

## Next Steps

- **[Examples](examples.md)**: Explore detailed code snippets for common use cases.
- **[API Reference](modules.md)**: Deep dive into method signatures and configuration options.
