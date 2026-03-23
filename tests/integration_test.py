"""
Integration test for RouteLit Glide Data Grid.
"""

import pandas as pd
from flask import Flask
from routelit_flask import RouteLitFlaskAdapter
from routelit_glide_data_grid.builder import RLBuilder

app = Flask(__name__)
adapter = RouteLitFlaskAdapter(app)

# Test data
test_data = pd.DataFrame({
    "name": ["Alice", "Bob", "Charlie", "David"],
    "age": [30, 25, 35, 28],
    "sales": [100, 150, 200, 175],
    "active": [True, False, True, True],
})

@adapter.route("/")
def test_page(ui: RLBuilder):
    ui.title("🧪 RouteLit Glide Data Grid Integration Test")
    
    # Test 1: Data Grid (Read-Only)
    ui.subheader("1. Data Grid (Read-Only)")
    selection = ui.data_grid(
        test_data,
        key="test-grid",
        on_select="rerun",
        selection_mode="multi-row"
    )
    if selection:
        ui.success(f"✅ Selection: {selection}")
    else:
        ui.info("Select rows in the grid above")
    
    ui.divider()
    
    # Test 2: Multi-type data
    ui.subheader("2. Multi-type data")
    ui.data_grid(
        {
            "Text": ["A", "B", "C"],
            "Int": [1, 2, 3],
            "Float": [1.1, 2.2, 3.3],
            "Bool": [True, False, True],
            "None": [None, None, None]
        },
        key="test-types"
    )
    
    ui.subheader("✅ All Tests Passed!")
    ui.text("If you can see the grid with data rendered correctly, the integration is working.")

if __name__ == "__main__":
    print("=" * 60)
    print("RouteLit Glide Data Grid Integration Test")
    print("=" * 60)
    print("\nStarting Flask server...")
    print("Open http://localhost:5001 in your browser")
    print("=" * 60)
    
    app.run(debug=True, port=5001)
