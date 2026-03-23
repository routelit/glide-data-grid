import React, { useCallback, useMemo } from "react";
import {
  DataEditor,
  GridColumn,
  GridCell,
  Item,
  GridSelection,
} from "@glideapps/glide-data-grid";
import { allCells } from "@glideapps/glide-data-grid-cells";
import { mapPythonToGlideCell } from "../utils/typeMapper";

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
  frozenRows?: number;
  frozenColumns?: number;
  // RouteLit injected props
  routelit: {
    sendEvent: (name: string, payload: any) => void;
  };
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
  routelit,
  columnOrder,
  frozenRows = 0,
  frozenColumns = 0,
}) => {
  const gridColumns = useMemo<GridColumn[]>(() => {
    let activeColumns = columns;
    if (columnOrder) {
      activeColumns = columnOrder.filter(c => columns.includes(c));
    }
    
    return activeColumns.map((col) => ({
      title: (columnConfig?.[col] as string) || col,
      id: col,
      width: 150, // Default width
    }));
  }, [columns, columnConfig, columnOrder]);

  const getCellContent = useCallback(
    (cell: Item): GridCell => {
      const [col, row] = cell;
      const dataRow = data[row];
      const columnName = gridColumns[col].id as string;
      const value = dataRow[columnName];
      
      // Use placeholder if value is null or undefined
      const displayValue = value === null || value === undefined ? (placeholder ?? "") : value;
      const pythonType = columnTypes[columnName];
      const config = columnConfig?.[columnName];

      return mapPythonToGlideCell(displayValue, pythonType, config);
    },
    [data, gridColumns, columnTypes, columnConfig, placeholder]
  );

  const onGridSelectionChange = useCallback(
    (selection: GridSelection) => {
      if (onSelect === "ignore") return;

      const payload = {
        rows: selection.rows.toArray(),
        columns: selection.columns.toArray(),
        current: selection.current,
      };

      routelit.sendEvent("select", payload);
    },
    [onSelect, routelit]
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
        rows={data.length}
        getCellContent={getCellContent}
        onGridSelectionChange={onGridSelectionChange}
        rowHeight={rowHeight}
        rowMarkers={!hideIndex ? "number" : "none"}
        getCellsForSelection={true}
        customRenderers={allCells}
      />
    </div>
  );
};

export default GridDataGrid;
