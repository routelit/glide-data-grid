from routelit_glide_data_grid.types import NumberColumn, TextColumn, ColumnConfig

def test_number_column_serialization():
    col = NumberColumn(label="Test", min_value=0, max_value=100)
    data = col.to_dict()
    assert data == {"label": "Test", "min_value": 0, "max_value": 100, "hidden": False, "required": False}

def test_text_column_serialization():
    col = TextColumn(label="Name", max_chars=50)
    data = col.to_dict()
    assert data == {"label": "Name", "max_chars": 50, "hidden": False, "required": False}
