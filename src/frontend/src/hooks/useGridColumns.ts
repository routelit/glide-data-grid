import { useMemo } from "react";
import { GridColumn } from "@glideapps/glide-data-grid";
import { getGridColumns } from "../components/common/columnUtils";

export const useGridColumns = (
  columns: string[],
  columnConfig: Record<string, any> | undefined,
  columnOrder?: string[]
) => {
  return useMemo<GridColumn[]>(() => {
    return getGridColumns(columns, columnConfig, columnOrder);
  }, [columns, columnConfig, columnOrder]);
};
