import { GridCell, GridCellKind } from "@glideapps/glide-data-grid";
import { DateCellRenderer, DatetimeCellRenderer } from "./customRenderers";

export type PythonType = "str" | "int" | "float" | "bool" | "NoneType" | string;

export interface ColumnConfig {
  type?: string;
  label?: string;
  width?: number;
  help?: string;
  hidden?: boolean;
  required?: boolean;
  format?: string;
  min_value?: any;
  max_value?: any;
  step?: number;
  options?: any[];
  max_chars?: number;
  validate?: string;
  display_text?: string;
  timezone?: string;
}

export function mapPythonToGlideCell(
  value: any,
  pythonType: PythonType,
  config?: ColumnConfig
): GridCell {
  if (value === null || value === undefined || pythonType === "NoneType") {
    return {
      kind: GridCellKind.Text,
      allowOverlay: false,
      readonly: true,
      displayData: "",
      data: "",
    };
  }

  // Handle specific ColumnConfig types
  if (config?.type) {
    switch (config.type) {
      case "NumberColumn":
        return {
          kind: GridCellKind.Number,
          allowOverlay: true,
          readonly: false,
          data: Number(value),
          displayData: String(value),
        };
      case "CheckboxColumn":
        return {
          kind: GridCellKind.Boolean,
          allowOverlay: false,
          readonly: false,
          data: Boolean(value),
        };
      case "ImageColumn":
        return {
          kind: GridCellKind.Image,
          allowOverlay: true,
          readonly: true,
          data: [String(value)],
          displayData: [String(value)],
        };
      case "DateColumn":
        return {
          ...DateCellRenderer,
          data: {
            kind: "date-cell",
            value: String(value),
          },
        };
      case "DatetimeColumn":
        return {
          ...DatetimeCellRenderer,
          data: {
            kind: "datetime-cell",
            value: String(value),
          },
        };
    }
  }

  // Fallback to basic type mapping
  switch (pythonType) {
    case "int":
    case "float":
      return {
        kind: GridCellKind.Number,
        allowOverlay: true,
        readonly: false,
        data: Number(value),
        displayData: String(value),
      };
    case "bool":
      return {
        kind: GridCellKind.Boolean,
        allowOverlay: false,
        readonly: false,
        data: Boolean(value),
      };
    case "str":
    default:
      return {
        kind: GridCellKind.Text,
        allowOverlay: true,
        readonly: false,
        displayData: String(value),
        data: String(value),
      };
  }
}
