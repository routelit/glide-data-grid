import pytest
from routelit_glide_data_grid.builder import RLBuilder
from collections.abc import Mapping
from typing import Any, Optional
from routelit import PropertyDict, RouteLitRequest

class MockRLRequest(RouteLitRequest):
    def __init__(self, method="POST"):
        self._method = method
        self._ui_event = None
    def get_headers(self): return {}
    def get_path_params(self): return {}
    def get_referrer(self): return None
    def is_json(self): return True
    def get_json(self): return None
    def get_query_param(self, key): return None
    def get_query_param_list(self, key): return []
    def get_session_id(self): return "123"
    def get_pathname(self): return "/test"
    def get_host(self): return "localhost"
    def get_files(self): return {}
    def is_multipart(self): return False
    @property
    def method(self): return self._method

@pytest.fixture
def builder():
    return RLBuilder(request=MockRLRequest(), session_state=PropertyDict({}), fragments={})

def test_data_grid_theme(builder):
    theme = {"bgCell": "#000000"}
    builder.data_grid({"col1": [1]}, theme=theme)
    assert builder.elements[0].props["theme"] == theme

def test_data_editor_theme(builder):
    theme = {"bgCell": "#ffffff"}
    builder.data_editor({"col1": [1]}, theme=theme)
    assert builder.elements[0].props["theme"] == theme
