from collections.abc import Mapping
from typing import Any, Optional

import pytest
from routelit import PropertyDict, RouteLitRequest

from routelit_glide_data_grid.builder import RLBuilder


class MockRLRequest(RouteLitRequest):
    def __init__(
        self,
        headers: Mapping[str, str] = {},
        path_params: Mapping[str, Any] = {},
        referrer: Optional[str] = None,
        is_json: bool = True,
        json: Optional[dict[str, Any]] = None,
        query_params: Mapping[str, str] = {},
        query_param_list: Mapping[str, list[str]] = {},
        session_id: str = "123",
        pathname: str = "/test",
        host: str = "localhost",
        method: str = "GET",
    ):
        self.headers = headers
        self.path_params = path_params
        self.referrer = referrer
        self._is_json = is_json
        self.json = json
        self.query_params = query_params
        self.query_param_list = query_param_list
        self.session_id = session_id
        self.pathname = pathname
        self.host = host
        self._method = method
        self._ui_event = None

    def get_headers(self) -> dict[str, str]:
        return self.headers

    def get_path_params(self) -> Optional[Mapping[str, Any]]:
        return self.path_params

    def get_referrer(self) -> Optional[str]:
        return self.referrer

    def is_json(self) -> bool:
        return self._is_json

    def get_json(self) -> Optional[dict[str, Any]]:
        return self.json

    def get_query_param(self, key: str) -> Optional[str]:
        return self.query_params.get(key)

    def get_query_param_list(self, key: str) -> list[str]:
        return self.query_param_list.get(key, [])

    def get_session_id(self) -> str:
        return self.session_id

    def get_pathname(self) -> str:
        return self.pathname

    def get_host(self) -> str:
        return self.host

    def get_files(self) -> dict[str, Any]:
        return {}

    def is_multipart(self) -> bool:
        return False

    @property
    def method(self) -> str:
        return self._method


class TestRLBuilder:
    @pytest.fixture
    def mock_request(self) -> MockRLRequest:
        return MockRLRequest(method="POST")

    @pytest.fixture
    def builder(self, mock_request: MockRLRequest) -> RLBuilder:
        return RLBuilder(request=mock_request, session_state=PropertyDict({}), fragments={})

    def test_data_grid_dict(self, builder: RLBuilder) -> None:
        data = {"col1": [1, 2], "col2": ["a", "b"]}
        builder.data_grid(data)

        elements = builder.elements
        assert len(elements) == 1
        assert elements[0].name == "grid_data_grid"
        assert elements[0].props["data"] == [
            {"col1": 1, "col2": "a"},
            {"col1": 2, "col2": "b"},
        ]
        assert elements[0].props["columns"] == ["col1", "col2"]
        assert elements[0].props["columnTypes"] == {"col1": "int", "col2": "str"}

    def test_data_grid_pandas(self, builder: RLBuilder) -> None:
        import pandas as pd
        df = pd.DataFrame({"col1": [1, 2], "col2": ["a", "b"]})
        builder.data_grid(df)

        elements = builder.elements
        assert len(elements) == 1
        assert elements[0].name == "grid_data_grid"
        assert elements[0].props["data"] == [
            {"col1": 1, "col2": "a"},
            {"col1": 2, "col2": "b"},
        ]

    def test_data_grid_list(self, builder: RLBuilder) -> None:
        data = [{"col1": 1, "col2": "a"}, {"col1": 2, "col2": "b"}]
        builder.data_grid(data)

        elements = builder.elements
        assert len(elements) == 1
        assert elements[0].name == "grid_data_grid"
        assert elements[0].props["data"] == data

    def test_data_editor_basic(self, builder: RLBuilder) -> None:
        data = {"col1": [1, 2], "col2": ["a", "b"]}
        builder.data_editor(data, num_rows="dynamic")

        elements = builder.elements
        assert len(elements) == 1
        assert elements[0].name == "grid_data_editor"
        assert elements[0].props["data"] == [
            {"col1": 1, "col2": "a"},
            {"col1": 2, "col2": "b"},
        ]
        assert elements[0].props["numRows"] == "dynamic"
