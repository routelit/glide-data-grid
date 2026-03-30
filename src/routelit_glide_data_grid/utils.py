from typing import Any, Dict, List, Union
import pandas as pd

def normalize_data(data: Any) -> List[Dict[str, Any]]:
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
        return data.to_dict(orient="records")
    
    if isinstance(data, dict):
        keys = list(data.keys())
        if not keys:
            return []
        
        # Check if it's column-major (all values are lists of same length)
        # or simple key-value.
        first_val = data[keys[0]]
        if isinstance(first_val, (list, tuple, pd.Series)):
            num_rows = len(first_val)
            return [
                {key: data[key][i] for key in keys}
                for i in range(num_rows)
            ]
        else:
            # Key-value mapping
            return [
                {"key": k, "value": v}
                for k, v in data.items()
            ]
    
    if isinstance(data, list):
        if not data:
            return []
        
        # If it's a list of dicts, it's already row-major
        if isinstance(data[0], dict):
            return data
            
        # Otherwise, treat as simple list
        return [{"value": item} for item in data]
    
    raise ValueError(f"Unsupported data type: {type(data)}")

def extract_columns(data: List[Dict[str, Any]]) -> List[str]:
    """Extract column names from a list of dicts."""
    if not data:
        return []
    return list(data[0].keys())

def infer_column_types(data: List[Dict[str, Any]], columns: List[str]) -> Dict[str, str]:
    """Infer Python types for each column."""
    types = {}
    if not data:
        return {col: "str" for col in columns}
        
    for col in columns:
        # Find first non-None value to infer type
        first_val = next((row[col] for row in data if row.get(col) is not None), None)
        if first_val is None:
            types[col] = "str"
        else:
            types[col] = type(first_val).__name__
    return types
