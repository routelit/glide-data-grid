import { GridCellKind } from "@glideapps/glide-data-grid";

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

export const SelectCellRenderer = {
  kind: GridCellKind.Custom,
  allowOverlay: true,
  readonly: false,
  data: {
    kind: "select-cell",
    value: "",
    options: [],
  },
  copyData: "",
};

export const MultiselectCellRenderer = {
  kind: GridCellKind.Custom,
  allowOverlay: true,
  readonly: false,
  data: {
    kind: "multiselect-cell",
    value: [],
    options: [],
  },
  copyData: "",
};

export const ImageCellRenderer = {
  kind: GridCellKind.Custom,
  allowOverlay: true,
  readonly: true,
  data: {
    kind: "image-cell",
    url: "",
  },
  copyData: "",
};

export const JsonCellRenderer = {
  kind: GridCellKind.Custom,
  allowOverlay: true,
  readonly: false,
  data: {
    kind: "json-cell",
    value: {},
  },
  copyData: "",
};
