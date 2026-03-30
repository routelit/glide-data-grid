from routelit_glide_data_grid.types import ColumnConfig, NumberColumn, TextColumn


def test_column_config_serialization():
    assert NumberColumn(label="Age", min_value=0).to_dict() == {
        "label": "Age",
        "min_value": 0,
        "hidden": False,
        "required": False,
        "disabled": False,
    }
    assert TextColumn(label="Name", max_chars=10).to_dict() == {
        "label": "Name",
        "max_chars": 10,
        "hidden": False,
        "required": False,
        "disabled": False,
    }


def test_column_config_hidden():
    assert ColumnConfig(hidden=True).to_dict() == {"hidden": True, "required": False, "disabled": False}
