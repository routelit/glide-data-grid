import { GridCell, GridCellKind } from "@glideapps/glide-data-grid";

export type PythonType = "str" | "int" | "float" | "bool" | "NoneType" | string;

export function mapPythonToGlideCell(value: any, pythonType: PythonType): GridCell {
  if (value === null || value === undefined || pythonType === "NoneType") {
    return {
      kind: GridCellKind.Text,
      allowOverlay: false,
      readonly: true,
      displayData: "",
      data: "",
    };
  }

  switch (pythonType) {
    case "int":
    case "float":
      return {
        kind: GridCellKind.Number,
        allowOverlay: false,
        readonly: true,
        data: Number(value),
        displayData: String(value),
      };
    case "bool":
      return {
        kind: GridCellKind.Boolean,
        allowOverlay: false,
        readonly: true,
        data: Boolean(value),
      };
    case "str":
    default:
      return {
        kind: GridCellKind.Text,
        allowOverlay: false,
        readonly: true,
        displayData: String(value),
        data: String(value),
      };
  }
}
