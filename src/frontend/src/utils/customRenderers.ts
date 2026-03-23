import { GridCell, GridCellKind, GridDataType } from "@glideapps/glide-data-grid";
import { Theme } from "@glideapps/glide-data-grid";

// Placeholder for custom cell renderer for Date/Datetime
export const DateCellRenderer = {
  kind: GridCellKind.Custom,
  allowOverlay: true,
  readonly: false,
  data: {
    kind: "date-cell",
    value: "",
  },
  copyData: "",
};

export const DatetimeCellRenderer = {
  kind: GridCellKind.Custom,
  allowOverlay: true,
  readonly: false,
  data: {
    kind: "datetime-cell",
    value: "",
  },
  copyData: "",
};
