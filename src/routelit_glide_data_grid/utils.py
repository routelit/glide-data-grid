from typing import Any, Dict, List, Union
import pandas as pd

def normalize_data(data: Union[pd.DataFrame, Dict[str, List[Any]], List[Dict[str, Any]]]) -> List[Dict[str, Any]]:
    """
    Normalize various data formats into a row-major list of dicts.
    
    Supported formats:
    - pandas.DataFrame
    - Dict[str, List[Any]] (column-major)
    - List[Dict[str, Any]] (row-major)
    """
    if isinstance(data, pd.DataFrame):
        return data.to_dict(orient="records")
    
    if isinstance(data, dict):
        # Column-major dict to row-major list of dicts
        keys = list(data.keys())
        if not keys:
            return []
        
        num_rows = len(data[keys[0]])
        return [
            {key: data[key][i] for key in keys}
            for i in range(num_rows)
        ]
    
    if isinstance(data, list):
        return data
    
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
