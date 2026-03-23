import { componentStore } from "routelit-client";
import './lib.css'
import {
  GridDataGrid,
  GridDataEditor,
} from "./components";

componentStore.register("grid_data_grid", GridDataGrid);
componentStore.register("grid_data_editor", GridDataEditor);
componentStore.forceUpdate();
