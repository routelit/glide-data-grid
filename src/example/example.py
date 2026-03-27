import pandas as pd
from flask import Flask
from routelit_flask import RouteLitFlaskAdapter
from routelit import RouteLit
from routelit_glide_data_grid.builder import RLBuilder
from routelit_glide_data_grid.types import (
    NumberColumn,
    TextColumn,
    SelectboxColumn,
    MultiselectColumn,
    DateColumn,
    ImageColumn,
    JsonColumn,
    LinkColumn,
    IDColumn,
    MarkdownColumn,
    ProtectedColumn,
)

app = Flask(__name__)
routelit = RouteLit(RLBuilder)
adapter = RouteLitFlaskAdapter(
    routelit,
    run_mode="dev_components",
    local_components_server="http://localhost:5173",
).configure(app)


def showcase_features(ui: RLBuilder):
    ui.title("🚀 RouteLit Glide Data Grid: Feature Showcase")

    # 1. Basic Data Grid (Read-Only)
    ui.header("1. Basic Data Grid")
    df = pd.DataFrame(
        {
            "ID": [1, 2, 3],
            "Name": ["Alice", "Bob", "Charlie"],
            "Score": [95.5, 88.0, 92.0],
        }
    )
    selection = ui.data_grid(df, key="basic-grid", on_select="rerun")
    if selection:
        ui.markdown(f"✅ **Selected:** {selection}")

    # 2. Data Editor with Validation
    ui.header("2. Data Editor (Editable with Validation)")
    ui.text("Try editing the 'Score' column (0-100 limit):")
    edited_df = ui.data_editor(
        df,
        key="editable-grid",
        num_rows="dynamic",
        column_config={
            "ID": IDColumn(label="User ID", width="small"),
            "Score": NumberColumn(
                label="Final Score", min_value=0, max_value=100, width="medium"
            ),
        },
    )
    ui.markdown(f"```python\n{edited_df}\n```")

    # 3. Advanced Column Types
    ui.header("3. Advanced Column Types")
    complex_data = {
        "Date": ["2026-03-22", "2026-03-23"],
        "Status": ["Active", "Pending"],
        "Tags": [["Red", "Blue"], ["Green"]],
        "Image": [
            "https://placecats.com/neo/50/50",
            "https://placecats.com/millie/50/50",
        ],
        "JSON": ['{"a": 1}', '{"b": 2}'],
        "Link": ["https://google.com", "https://github.com"],
        "Markdown": ["**Bold** text", "*Italic* text"],
        "Secret": ["password123", "top-secret"],
        # "Trend": [[1, 5, 3, 7, 2, 8], [2, 4, 8, 3, 9, 1]],
    }
    ui.data_grid(
        complex_data,
        key="complex-grid",
        column_config={
            "Date": DateColumn(label="Event Date"),
            "Status": SelectboxColumn(
                label="Status", options=["Active", "Pending", "Closed"]
            ),
            "Tags": MultiselectColumn(label="Tags", options=["Red", "Green", "Blue"]),
            "Image": ImageColumn(label="Thumbnail"),
            "JSON": JsonColumn(label="Metadata"),
            "Link": LinkColumn(label="Website", display_text="Click here"),
            "Markdown": MarkdownColumn(label="Notes"),
            "Secret": ProtectedColumn(label="Password"),
            # "Trend": SparklineColumn(label="Trendline", width="large"),
        },
    )
    ui.subheader("Editable Version of Complex Grid")

    ui.data_editor(
        complex_data,
        key="complex-editor-grid",
        column_config={
            "Date": DateColumn(label="Event Date"),
            "Status": SelectboxColumn(
                label="Status", options=["Active", "Pending", "Closed"]
            ),
            "Tags": MultiselectColumn(label="Tags", options=["Red", "Green", "Blue"]),
            "Image": ImageColumn(label="Thumbnail"),
            "JSON": JsonColumn(label="Metadata"),
            "Link": LinkColumn(label="Website", display_text="Click here"),
            "Markdown": MarkdownColumn(label="Notes"),
            "Secret": ProtectedColumn(label="Password"),
            # "Trend": SparklineColumn(label="Trendline", width="large"),
        },
    )

    # 4. Selection Modes
    ui.header("4. Selection Modes")

    col1, col2 = ui.columns(2)

    with col1:
        ui.subheader("Row Selection")
        row_sel = ui.data_grid(
            df,
            key="row-sel-grid",
            selection_mode="multi-row",
            on_select="rerun",
            column_config={"Score": NumberColumn(content_align="right")},
        )
        ui.text("Selected Rows:" + str(row_sel.get("rows")) if row_sel else [])

    with col2:
        ui.subheader("Cell Selection")
        cell_sel = ui.data_grid(
            df,
            key="cell-sel-grid",
            selection_mode="single-cell",
            on_select="rerun",
            theme={"bgCell": "#f0f7ff"},
        )
        ui.text("Selected Cell:" + str(cell_sel.get("current")) if cell_sel else None)

    # 5. Search & Filter
    ui.header("5. Search Functionality")
    search_query = ui.text_input(
        "Search in Grid", key="search-box", placeholder="Type to filter..."
    )
    ui.data_grid(df, key="searchable-grid", search=search_query)


@app.route("/", methods=["GET", "POST"])
def index():
    return adapter.response(showcase_features)


if __name__ == "__main__":
    print("🚀 Running Feature Showcase on http://localhost:5001")
    app.run(debug=True, port=5001)
