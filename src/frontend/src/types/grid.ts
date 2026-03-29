import { Theme } from "@glideapps/glide-data-grid";
import { ColumnConfig } from "../utils/typeMapper";

export interface PythonSelection {
  rows?: number[];
  columns?: number[];
  current?: any;
}

export interface BaseGridProps {
  data: any[];
  columns: string[];
  columnTypes: Record<string, string>;
  height?: "auto" | "content" | "stretch" | number;
  width?: "stretch" | "content" | number;
  hideIndex?: boolean;
  rowMarkers?: "none" | "number" | "checkbox" | "both";
  rowHeight?: number;
  selectionMode?: string | string[];
  columnConfig?: Record<string, ColumnConfig>;
  placeholder?: string;
  columnOrder?: string[];
  theme?: Theme;
  freezeTrailingRows?: number;
  freezeColumns?: number;
  trailingRowOptions?: any;
  selection?: PythonSelection;
  id: string;
}
