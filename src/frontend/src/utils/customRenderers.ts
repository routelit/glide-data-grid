import { GridCellKind } from "@glideapps/glide-data-grid";

export const DateCellRenderer = {
  kind: GridCellKind.Text,
  data: {
    value: "",
  },
  copyData: "",
};

export const DatetimeCellRenderer = {
  kind: GridCellKind.Text,
  allowOverlay: true,
  readonly: false,
  data: {
    value: "",
  },
  copyData: "",
};

export const SelectCellRenderer = {
  kind: GridCellKind.Drilldown,
  data: {
    value: "",
    options: [],
  },
  copyData: "",
};

export const MultiselectCellRenderer = {
  kind: GridCellKind.Bubble,
  data: {
    value: [],
    options: [],
  },
  copyData: "",
};

export const ImageCellRenderer = {
  kind: GridCellKind.Image,
  allowOverlay: true,
  readonly: true,
  copyData: "",
};
