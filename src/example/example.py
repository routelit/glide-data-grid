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

    def on_select1(selection):
        ui.markdown(f"✅ **Selected 0:** {selection}")

    selection = ui.data_grid(df, key="basic-grid", on_select=on_select1)
    if selection:
        ui.markdown(f"✅ **Selected:** {selection}")

    # 2. Data Editor with Validation
    ui.header("2. Data Editor (Editable with Validation)")
    ui.text("Try editing the 'Score' column (0-100 limit):")

    def on_change2(changes):
        ui.markdown(f"🔄 **Changes:** {changes}")

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
        on_change=on_change2,
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

    # 5. Search Functionality
    ui.header("5. Search Functionality")
    search_query = ui.text_input(
        "Search in Grid", key="search-box", placeholder="Type to filter..."
    )
    ui.data_grid(df, key="searchable-grid", search=search_query)

    # 6. Frozen Columns/Rows & Column Grouping
    ui.header("6. Frozen Columns/Rows & Column Grouping")
    ui.markdown(
        "Keep context visible while scrolling through large datasets using "
        "`freeze_columns` and `freeze_trailing_rows`. Organize columns into logical sets "
        "using the `group` parameter in `column_config`."
    )

    large_df = pd.DataFrame(
        {
            "ID": range(1, 101),
            "First Name": [f"First_{i}" for i in range(1, 101)],
            "Last Name": [f"Last_{i}" for i in range(1, 101)],
            "Email": [f"user_{i}@example.com" for i in range(1, 101)],
            "Phone": [f"+1-555-{i:04d}" for i in range(1, 101)],
            "Street": [f"{i} Main St" for i in range(1, 101)],
            "City": ["New York", "London", "Paris", "Tokyo", "Berlin"] * 20,
            "Zip": [f"{10000 + i}" for i in range(1, 101)],
            "Country": ["USA", "UK", "France", "Japan", "Germany"] * 20,
        }
    )

    ui.data_grid(
        large_df,
        key="frozen-group-grid",
        freeze_columns=3,  # Fix ID, First Name, Last Name
        freeze_trailing_rows=2,  # Fix last 2 rows
        height=400,
        column_config={
            "ID": IDColumn(width="small"),
            "First Name": TextColumn(group="Personal Info"),
            "Last Name": TextColumn(group="Personal Info"),
            "Email": TextColumn(group="Contact Details"),
            "Phone": TextColumn(group="Contact Details"),
            "Street": TextColumn(group="Location"),
            "City": TextColumn(group="Location"),
            "Zip": TextColumn(group="Location"),
            "Country": TextColumn(group="Location"),
        },
    )

    # 7. Row Markers & Trailing Row Options
    ui.header("7. Row Markers & Trailing Row Options")

    col1, col2 = ui.columns(2)

    with col1:
        ui.subheader("Custom Row Markers (Checkbox)")
        ui.data_grid(
            df,
            key="markers-grid",
            row_markers="checkbox",
            height=200,
        )

    with col2:
        ui.subheader("Custom Trailing Row Hint")
        ui.data_editor(
            df,
            key="trailing-editor",
            num_rows="dynamic",
            trailing_row_options={
                "hint": "Click here to add a new teammate",
            },
            height=200,
        )

    # 8. Alternative Data Formats (List & Dict)
    ui.header("8. Alternative Data Formats")
    ui.markdown(
        "Glide Data Grid natively supports Python `list` (row-major) and `dict` (column-major) formats "
        "in addition to pandas DataFrames."
    )

    col3, col4 = ui.columns(2)

    with col3:
        ui.subheader("From List of Dicts")
        list_data = [
            {"Task": "Research", "Status": "Done"},
            {"Task": "Implementation", "Status": "In Progress"},
            {"Task": "Testing", "Status": "Pending"},
        ]
        ui.data_grid(list_data, key="list-grid", height=200)

    with col4:
        ui.subheader("From Dict of Lists")
        dict_data = {
            "Metric": ["Throughput", "Latency", "Errors"],
            "Value": [1200, 15.5, 2],
            "Unit": ["req/s", "ms", "count"],
        }
        ui.data_grid(dict_data, key="dict-grid", height=200)

    # 9. Extended Data Formats (Simple List & KV Dict)
    ui.header("9. Extended Data Formats")
    ui.markdown(
        "Glide Data Grid also supports simple lists and key-value dictionaries "
        "by automatically generating appropriate column names."
    )

    col5, col6 = ui.columns(2)

    with col5:
        ui.subheader("Simple List of Items")
        ui.markdown("A `List[str]` automatically becomes a single 'value' column.")
        plan_items = ["Initial Research", "Draft Spec", "Implementation", "QA Testing"]
        ui.data_grid(plan_items, key="simple-list-grid", height=200)

    with col6:
        ui.subheader("Key-Value Dictionary")
        ui.markdown("A simple `Dict[str, Any]` becomes 'key' and 'value' columns.")
        kv_config = {
            "version": "1.2.0",
            "environment": "production",
            "debug": False,
            "max_connections": 100,
        }
        ui.data_grid(kv_config, key="kv-dict-grid", height=200)


@app.route("/", methods=["GET", "POST"])
def index():
    return adapter.response(showcase_features)


if __name__ == "__main__":
    print("🚀 Running Feature Showcase on http://localhost:5001")
    app.run(debug=True, port=5001)
