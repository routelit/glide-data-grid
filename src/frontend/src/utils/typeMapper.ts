import { GridCell, GridCellKind } from "@glideapps/glide-data-grid";
import { 
  DateCellRenderer, 
  DatetimeCellRenderer, 
  SelectCellRenderer, 
  MultiselectCellRenderer,
  ImageCellRenderer,
  JsonCellRenderer,
} from "./customRenderers";

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
          ...ImageCellRenderer,
          kind: GridCellKind.Custom,
          data: {
            kind: "image-cell",
            url: String(value),
          },
        } as any;
      case "JsonColumn":
        return {
          ...JsonCellRenderer,
          kind: GridCellKind.Custom,
          data: {
            kind: "json-cell",
            value: typeof value === "string" ? JSON.parse(value) : value,
          },
        } as any;
      case "DateColumn":
        return {
          ...DateCellRenderer,
          kind: GridCellKind.Custom,
          data: {
            kind: "date-cell",
            value: String(value),
          },
        } as any;
      case "DatetimeColumn":
        return {
          ...DatetimeCellRenderer,
          kind: GridCellKind.Custom,
          data: {
            kind: "datetime-cell",
            value: String(value),
          },
        } as any;
      case "SelectboxColumn":
        return {
          ...SelectCellRenderer,
          kind: GridCellKind.Custom,
          data: {
            kind: "select-cell",
            value: String(value),
            options: config.options || [],
          },
        } as any;
      case "MultiselectColumn":
        return {
          ...MultiselectCellRenderer,
          kind: GridCellKind.Custom,
          data: {
            kind: "multiselect-cell",
            value: Array.isArray(value) ? value : [value],
            options: config.options || [],
          },
        } as any;
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
