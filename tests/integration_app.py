"""
Integration test for RouteLit Glide Data Grid.
"""

from typing import cast

import pandas as pd
from flask import Flask
from routelit import RouteLit, RouteLitBuilder
from routelit_flask import RouteLitFlaskAdapter

from routelit_glide_data_grid.builder import RLBuilder

app = Flask(__name__)
routelit = RouteLit(RLBuilder)
adapter = RouteLitFlaskAdapter(routelit).configure(app)

# Test data
test_data = pd.DataFrame({
    "name": ["Alice", "Bob", "Charlie", "David"],
    "age": [30, 25, 35, 28],
    "sales": [100, 150, 200, 175],
    "active": [True, False, True, True],
})


def test_page(ui: RouteLitBuilder) -> None:
    ui = cast(RLBuilder, ui)
    ui.title("🧪 RouteLit Glide Data Grid Integration Test")

    # Test 1: Data Grid (Read-Only)
    ui.subheader("1. Data Grid (Read-Only)")
    selection = ui.data_grid(test_data, key="test-grid", on_select="rerun", selection_mode="multi-row")
    if selection:
        ui.text(f"✅ Selection: {selection}")
    else:
        ui.text("Info: Select rows in the grid above")

    ui.hr()

    # Test 2: Data Editor (Editable)
    ui.subheader("2. Data Editor (Editable)")
    edited_data = ui.data_editor(test_data, key="test-editor", num_rows="dynamic")
    ui.text("Current data in editor:")
    ui.markdown(f"```json\n{edited_data}\n```")

    ui.hr()

    # Test 3: Multi-type data
    ui.subheader("3. Multi-type data")
    ui.data_grid(
        {
            "Text": ["A", "B", "C"],
            "Int": [1, 2, 3],
            "Float": [1.1, 2.2, 3.3],
            "Bool": [True, False, True],
            "None": [None, None, None],
        },
        key="test-types",
    )

    ui.subheader("✅ All Tests Passed!")
    ui.text("If you can see the grid with data rendered correctly, the integration is working.")


@app.route("/", methods=["GET", "POST"])
def index():
    return adapter.response(test_page)


if __name__ == "__main__":
    print("=" * 60)
    print("RouteLit Glide Data Grid Integration Test")
    print("=" * 60)
    print("\nStarting Flask server...")
    print("Open http://localhost:5001 in your browser")
    print("=" * 60)

    app.run(port=5001)
