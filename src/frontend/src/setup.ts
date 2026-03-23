import { componentStore } from "routelit-client";
import './lib.css'
import {
  GridDataGrid,
  GridDataEditor,
} from "./components";

// Ensure portal exists for Glide Data Grid overlay editor
const ensurePortal = () => {
  if (!document.getElementById("portal")) {
    const portal = document.createElement("div");
    portal.id = "portal";
    portal.style.position = "fixed";
    portal.style.left = "0";
    portal.style.top = "0";
    portal.style.zIndex = "9999";
    document.body.appendChild(portal);
  }
};

ensurePortal();

componentStore.register("grid_data_grid", GridDataGrid);
componentStore.register("grid_data_editor", GridDataEditor);
componentStore.forceUpdate();
