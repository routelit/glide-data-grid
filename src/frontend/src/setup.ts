import { componentStore } from "routelit-client";
import './lib.css'
import {
  GridDataGrid,
} from "./components";

componentStore.register("grid_data_grid", GridDataGrid);
componentStore.forceUpdate();
