import {
  GridCell,
  GridCellKind,
  NumberCell,
  ProtectedCell,
} from "@glideapps/glide-data-grid";

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
  value: unknown,
  pythonType: PythonType,
  config?: ColumnConfig,
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

  // Handle specific ColumnConfig types by mapping them to best-fit standard Glide cell kinds
  if (config?.type) {
    switch (config.type) {
      case "NumberColumn":
        return {
          kind: GridCellKind.Number,
          allowOverlay: true,
          // readonly: false,
          data: Number(value),
          displayData: String(value),
        } as NumberCell;
      case "CheckboxColumn":
        return {
          kind: GridCellKind.Boolean,
          allowOverlay: false,
          // readonly: false,
          data: Boolean(value),
        };
      case "ImageColumn":
        return {
          kind: GridCellKind.Image,
          allowOverlay: true,
          data: Array.isArray(value) ? value : [value], // Assuming value is a URL or base64 string
        };
      case "JsonColumn":
        return {
          kind: GridCellKind.Text,
          allowOverlay: true,
          displayData:
            typeof value === "string" ? value : JSON.stringify(value),
          data: typeof value === "string" ? value : JSON.stringify(value),
        };
      case "DateColumn":
      case "DatetimeColumn":
        return {
          kind: GridCellKind.Text,
          allowOverlay: true,
          displayData: String(value),
          data: String(value),
        };
      case "SelectboxColumn":
        return {
          kind: GridCellKind.Drilldown,
          allowOverlay: true,
          // readonly: false,
          // displayData: Array.isArray(value) ? value.join(", ") : String(value),
          data: Array.isArray(value)
            ? (value as unknown[])?.map((v) => ({
                text: String(v),
              }))
            : [{ text: String(value) }],
        };
      case "MultiselectColumn":
        return {
          kind: GridCellKind.Bubble,
          allowOverlay: true,
          // readonly: false,
          // displayData: Array.isArray(value) ? value.join(", ") : String(value),
          data: Array.isArray(value) ? value : [String(value)],
        };
      case "LinkColumn":
        return {
          kind: GridCellKind.Uri,
          allowOverlay: true,
          // readonly: false,
          data: String(value),
          displayData: config.display_text || String(value),
        };
      case "ProtectedColumn":
        return {
          kind: GridCellKind.Protected,
          allowOverlay: false,
        } as ProtectedCell;
      case "IDColumn":
        return {
          kind: GridCellKind.RowID,
          allowOverlay: false,
          readonly: true, // ID columns are typically read-only
          data: String(value),
        };
      case "MarkdownColumn":
        return {
          kind: GridCellKind.Markdown,
          allowOverlay: true,
          // readonly: false,
          data: String(value),
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
