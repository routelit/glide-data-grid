from collections.abc import Mapping, Sequence
from typing import Any, cast

import pandas as pd


def normalize_data(data: pd.DataFrame | Mapping[str, Any] | Sequence[Any]) -> list[dict[str, Any]]:
    """
    Normalize various data formats into a row-major list of dicts.

    Supported formats:
    - pandas.DataFrame
    - Dict[str, List[Any]] (column-major)
    - List[Dict[str, Any]] (row-major)
    - List[Any] (simple list -> one "value" column)
    - Dict[Any, Any] (key-value -> "key" and "value" columns)
    """
    if isinstance(data, pd.DataFrame):
        return cast(list[dict[str, Any]], data.to_dict(orient="records"))

    if isinstance(data, Mapping):
        if not data:
            return []

        # Check if it's column-major (all values are lists of same length)
        # or simple key-value.
        first_key = next(iter(data))
        first_val = data[first_key]
        if isinstance(first_val, (list, tuple, pd.Series)):
            num_rows = len(first_val)
            # Pre-extract sequences to avoid repeated lookups and type issues
            # We cast to Mapping[Any, Any] to allow general indexing safely here
            m_data = cast(Mapping[Any, Any], data)
            cols = {str(k): m_data[k] for k in m_data}
            return [{k: cast(Sequence[Any], seq)[i] for k, seq in cols.items()} for i in range(num_rows)]
        else:
            # Key-value mapping
            return [{"key": str(k), "value": v} for k, v in data.items()]

    if isinstance(data, Sequence):
        if not data:
            return []

        # If it's a list of dicts, it's already row-major
        first_item = data[0]
        if isinstance(first_item, Mapping):
            # Ensure keys are strings
            return [{str(k): v for k, v in cast(Mapping[Any, Any], item).items()} for item in data]

        # Otherwise, treat as simple list
        return [{"value": item} for item in data]

    msg = f"Unsupported data type: {type(data)}"
    raise ValueError(msg)


def extract_columns(data: list[dict[str, Any]]) -> list[str]:
    """Extract column names from a list of dicts."""
    if not data:
        return []
    return list(data[0].keys())


def infer_column_types(data: list[dict[str, Any]], columns: list[str]) -> dict[str, str]:
    """Infer Python types for each column."""
    types = {}
    if not data:
        return dict.fromkeys(columns, "str")

    for col in columns:
        # Find first non-None value to infer type
        first_val = next((row[col] for row in data if row.get(col) is not None), None)
        if first_val is None:
            types[col] = "str"
        else:
            types[col] = type(first_val).__name__
    return types
