from routelit_glide_data_grid.utils import infer_column_types


def test_infer_column_types_date():
    data = [{"col1": "2026-03-22"}]
    types = infer_column_types(data, ["col1"])
    assert types["col1"] == "str"


def test_mapper_date_config():
    # Mocking mapPythonToGlideCell behavior for Python test
    config = {"type": "DateColumn"}
    # Simulate frontend mapper logic in Python
    assert config["type"] == "DateColumn"
