import React, { useCallback, useMemo, useState, useEffect } from "react";
import {
  DataEditor,
  GridCell,
  Item,
  GridSelection,
  Theme,
} from "@glideapps/glide-data-grid";
import { mapPythonToGlideCell, ColumnConfig } from "../utils/typeMapper";
import { useGridColumns } from "../hooks/useGridColumns";
import { useDispatcherWith } from "routelit-client";
import { createGridSelection, createCompactSelection } from "../utils/selectionUtils";

import "@glideapps/glide-data-grid/dist/index.css";

interface PythonSelection {
  rows?: number[];
  columns?: number[];
  current?: any;
}

interface GridDataGridProps {
  data: any[];
  columns: string[];
  columnTypes: Record<string, string>;
  height?: "auto" | "content" | "stretch" | number;
  width?: "stretch" | "content" | number;
  hideIndex?: boolean;
  rowHeight?: number;
  selectionMode?: string | string[];
  columnConfig?: Record<string, ColumnConfig>;
  placeholder?: string;
  onSelect?: "ignore" | "rerun" | "callback";
  columnOrder?: string[];
  search?: string;
  theme?: Theme;
  frozenRows?: number;
  frozenColumns?: number;
  selection?: PythonSelection;
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
  selectionMode,
  columnConfig,
  placeholder,
  onSelect = "ignore",
  columnOrder,
  search,
  theme,
  selection: initialSelection,
  id,
}) => {
  const sendEvent = useDispatcherWith(id, "select");

  const [gridSelection, setGridSelection] = useState<GridSelection>(() => 
    createGridSelection(initialSelection)
  );

  // Sync with backend selection if provided
  useEffect(() => {
    if (initialSelection) {
      setGridSelection(createGridSelection(initialSelection));
    }
  }, [initialSelection]);

  const filteredData = useMemo(() => {
    if (!search || search.trim() === "") return data;
    const lowerSearch = search.toLowerCase();
    return data.filter((row) =>
      columns.some((col) =>
        String(row[col] ?? "").toLowerCase().includes(lowerSearch),
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

      const glideCell = mapPythonToGlideCell(displayValue, pythonType, config);
      return {
        ...glideCell,
        readonly: true,
      } as GridCell;
    },
    [filteredData, gridColumns, columnTypes, columnConfig, placeholder],
  );

  const onGridSelectionChange = useCallback(
    (selection: GridSelection) => {
      let finalSelection = selection;
      
      // If we are in row selection mode and a cell is selected, expand to row selection
      const isRowMode = selectionMode === "single-row" || selectionMode === "multi-row" || (Array.isArray(selectionMode) && selectionMode.includes("row"));
      
      if (isRowMode && selection.current?.cell !== undefined) {
        const [_, row] = selection.current.cell;
        if (selectionMode === "single-row") {
          finalSelection = {
            ...selection,
            rows: createCompactSelection([row]),
          };
        } else {
          finalSelection = {
            ...selection,
            rows: selection.rows.add(row),
          };
        }
      }

      setGridSelection(finalSelection);
      
      if (onSelect === "ignore") return;

      const payload: PythonSelection = {
        rows: finalSelection.rows.toArray(),
        columns: finalSelection.columns.toArray(),
        current: finalSelection.current,
      };

      sendEvent(payload as any);
    },
    [onSelect, sendEvent, selectionMode],
  );

  const rowSelectionMode = useMemo(() => {
    if (selectionMode === "multi-row") return "multi";
    if (selectionMode === "single-row") return "auto";
    if (Array.isArray(selectionMode) && selectionMode.includes("row")) return "multi";
    return undefined;
  }, [selectionMode]);

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
        gridSelection={gridSelection}
        onGridSelectionChange={onGridSelectionChange}
        rowSelectionMode={rowSelectionMode}
        rowHeight={rowHeight}
        rowMarkers={!hideIndex ? "both" : "none"}
        getCellsForSelection={true}
        theme={theme}
      />
    </div>
  );
};

export default GridDataGrid;
