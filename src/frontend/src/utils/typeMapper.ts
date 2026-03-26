import {
  GridCell,
  GridCellKind,
  NumberCell,
} from "@glideapps/glide-data-grid";

export type PythonType = "str" | "int" | "float" | "bool" | "NoneType" | string;

export interface ColumnConfig {
  type?: string;
  label?: string;
  width?: number | "small" | "medium" | "large";
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

  // Base GridCell properties
  theme_override?: any;
  style?: "normal" | "faded";
  content_align?: "left" | "center" | "right";
  cursor?: string;

  disabled?: boolean;
}

export function mapPythonToGlideCell(
  value: unknown,
  pythonType: PythonType,
  config?: ColumnConfig,
): GridCell {
  const baseProps: any = {};

  if (config) {
    if (config.theme_override) baseProps.themeOverride = config.theme_override;
    if (config.style) baseProps.style = config.style;
    if (config.content_align) baseProps.contentAlign = config.content_align;
    if (config.cursor) baseProps.cursor = config.cursor;
  }

  if (value === null || value === undefined || pythonType === "NoneType") {
    return {
      ...baseProps,
      kind: GridCellKind.Text,
      allowOverlay: false,
      readonly: true,
      displayData: "",
      data: "",
    };
  }

  // Handle specific ColumnConfig types by mapping them to best-fit standard or custom Glide cell kinds
  if (config?.type) {
    switch (config.type) {
      case "NumberColumn":
        return {
          ...baseProps,
          kind: GridCellKind.Number,
          allowOverlay: true,
          // readonly: false,
          data: Number(value),
          displayData: String(value),
        } as NumberCell;
      case "CheckboxColumn":
        return {
          ...baseProps,
          kind: GridCellKind.Boolean,
          allowOverlay: false,
          // readonly: false,
          data: Boolean(value),
        };
      case "ImageColumn":
        return {
          ...baseProps,
          kind: GridCellKind.Image,
          allowOverlay: true,
          displayData: Array.isArray(value) ? value : [String(value)],
          data: Array.isArray(value) ? value : [String(value)],
        };
      case "JsonColumn":
        return {
          ...baseProps,
          kind: GridCellKind.Text,
          allowOverlay: true,
          displayData:
            typeof value === "string" ? value : JSON.stringify(value),
          data: typeof value === "string" ? value : JSON.stringify(value),
        };
      case "DateColumn":
      case "DatetimeColumn":
        return {
          ...baseProps,
          kind: GridCellKind.Text,
          allowOverlay: true,
          displayData: String(value),
          data: String(value),
        };
      case "SelectboxColumn":
        return {
          ...baseProps,
          kind: GridCellKind.Custom,
          allowOverlay: true,
          data: {
            kind: "dropdown-cell",
            allowedValues: config.options?.map(String) || [],
            value: String(value),
          },
          copyData: String(value),
        } as any;
      case "MultiselectColumn":
        const tags = Array.isArray(value) ? value.map(String) : [String(value)];
        return {
          ...baseProps,
          kind: GridCellKind.Custom,
          allowOverlay: true,
          data: {
            kind: "tags-cell",
            tags: tags,
            possibleTags:
              config.options?.map((opt) => ({ tag: String(opt) })) ||
              tags.map((t) => ({ tag: t })),
          },
          copyData: tags.join(", "),
        } as any;
      case "SparklineColumn":
        return {
          ...baseProps,
          kind: GridCellKind.Custom,
          allowOverlay: false,
          readonly: true,
          data: {
            kind: "sparkline-cell",
            values: Array.isArray(value) ? value : [],
          },
          copyData: Array.isArray(value) ? value.join(",") : "",
        } as any;
      case "LinkColumn":
        return {
          ...baseProps,
          kind: GridCellKind.Uri,
          allowOverlay: true,
          // readonly: false,
          data: String(value),
          displayData: config.display_text || String(value),
        };
      case "ProtectedColumn":
        return {
          ...baseProps,
          kind: GridCellKind.Protected,
          allowOverlay: false,
          data: String(value),
        } as any;
      case "IDColumn":
        return {
          ...baseProps,
          kind: GridCellKind.RowID,
          allowOverlay: false,
          readonly: true, // ID columns are typically read-only
          data: String(value),
        };
      case "MarkdownColumn":
        return {
          ...baseProps,
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
        ...baseProps,
        kind: GridCellKind.Number,
        allowOverlay: true,
        readonly: false,
        data: Number(value),
        displayData: String(value),
      };
    case "bool":
      return {
        ...baseProps,
        kind: GridCellKind.Boolean,
        allowOverlay: false,
        readonly: false,
        data: Boolean(value),
      };
    case "str":
    default:
      return {
        ...baseProps,
        kind: GridCellKind.Text,
        allowOverlay: true,
        readonly: false,
        displayData: String(value),
        data: String(value),
      };
  }
}
