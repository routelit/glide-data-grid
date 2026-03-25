import React, { useCallback, useMemo } from "react";
import {
  DataEditor,
  GridCell,
  Item,
  GridSelection,
  Theme,
} from "@glideapps/glide-data-grid";
import { allCells } from "@glideapps/glide-data-grid-cells";
import { mapPythonToGlideCell } from "../utils/typeMapper";
import { useGridColumns } from "../hooks/useGridColumns";
import { useDispatcherWith } from "routelit-client";

import "@glideapps/glide-data-grid/dist/index.css";
import "@glideapps/glide-data-grid-cells/dist/index.css";

interface GridDataGridProps {
  data: any[];
  columns: string[];
  columnTypes: Record<string, string>;
  height?: "auto" | "content" | "stretch" | number;
  width?: "stretch" | "content" | number;
  hideIndex?: boolean;
  rowHeight?: number;
  selectionMode?: string | string[];
  columnConfig?: Record<string, any>;
  placeholder?: string;
  onSelect?: "ignore" | "rerun" | "callback";
  columnOrder?: string[];
  search?: string;
  theme?: Theme;
  frozenRows?: number;
  frozenColumns?: number;
  id: string;
}

export const GridDataGrid: React.FC<GridDataGridProps> = ({
  data,
  columns,
  columnTypes,
  height = "auto",
  width = "stretch",
  hideIndex = false,
  rowHeight,
  // selectionMode, // For future use
  columnConfig,
  placeholder,
  onSelect,
  columnOrder,
  search,
  theme,
  id,
}) => {
  const sendEvent = useDispatcherWith(id, "select");

  const filteredData = useMemo(() => {
    if (!search) return data;
    const lowerSearch = search.toLowerCase();
    return data.filter((row) =>
      columns.some((col) =>
        String(row[col]).toLowerCase().includes(lowerSearch),
      ),
    );
  }, [data, columns, search]);

  const gridColumns = useGridColumns(columns, columnConfig, columnOrder);

  const getCellContent = useCallback(
    (cell: Item): GridCell => {
      const [col, row] = cell;
      const dataRow = filteredData[row];
      const columnName = gridColumns[col].id as string;
      const value = dataRow[columnName];
      
      // Use placeholder if value is null or undefined
      const displayValue = value === null || value === undefined ? (placeholder ?? "") : value;
      const pythonType = columnTypes[columnName];
      const config = columnConfig?.[columnName];

      return mapPythonToGlideCell(displayValue, pythonType, config);
    },
    [filteredData, gridColumns, columnTypes, columnConfig, placeholder],
  );

  const onGridSelectionChange = useCallback(
    (selection: GridSelection) => {
      if (onSelect === "ignore") return;

      const payload = {
        rows: selection.rows.toArray(),
        columns: selection.columns.toArray(),
        current: selection.current,
      };

      sendEvent(payload);
    },
    [onSelect, sendEvent],
  );

  const gridHeight = useMemo(() => {
    if (height === "auto") return 400; // Fixed default for auto in Phase 1
    if (height === "stretch") return "100%";
    return height;
  }, [height]);

  const gridWidth = useMemo(() => {
    if (width === "stretch") return "100%";
    return width;
  }, [width]);

  return (
    <div style={{ height: gridHeight, width: gridWidth }}>
      <DataEditor
        width="100%"
        height="100%"
        columns={gridColumns}
        rows={filteredData.length}
        getCellContent={getCellContent}
        onGridSelectionChange={onGridSelectionChange}
        rowHeight={rowHeight}
        rowMarkers={!hideIndex ? "number" : "none"}
        getCellsForSelection={true}
        customRenderers={allCells}
        theme={theme}
      />
    </div>
  );
};

export default GridDataGrid;
