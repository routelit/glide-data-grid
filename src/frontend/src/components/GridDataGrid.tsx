import React, { useCallback, useMemo } from "react";
import {
  DataEditor,
  GridCell,
  Item,
  GridSelection,
} from "@glideapps/glide-data-grid";
import { mapPythonToGlideCell } from "../utils/typeMapper";
import { useGridColumns } from "../hooks/useGridColumns";
import { useDispatcherWith } from "routelit-client";
import { createCompactSelection } from "../utils/selectionUtils";
import { BaseGridProps, PythonSelection } from "../types/grid";
import { useGridDimensions, useRowMarkers, useGridSelectionSync } from "../hooks/gridHooks";

import "@glideapps/glide-data-grid/dist/index.css";

interface GridDataGridProps extends BaseGridProps {
  onSelect?: "ignore" | "rerun" | "callback";
  search?: string;
}

export const GridDataGrid: React.FC<GridDataGridProps> = ({
  data,
  columns,
  columnTypes,
  height = "auto",
  width = "stretch",
  hideIndex = false,
  rowMarkers,
  rowHeight,
  selectionMode,
  columnConfig,
  placeholder,
  onSelect = "ignore",
  columnOrder,
  search,
  theme,
  freezeTrailingRows = 0,
  freezeColumns = 0,
  trailingRowOptions,
  selection: initialSelection,
  id,
}) => {
  const sendEvent = useDispatcherWith(id, "select");

  const [gridSelection, setGridSelection] = useGridSelectionSync(initialSelection);

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
    [onSelect, sendEvent, selectionMode, setGridSelection],
  );

  const rowSelectionMode = useMemo(() => {
    if (selectionMode === "multi-row") return "multi";
    if (selectionMode === "single-row") return "auto";
    if (Array.isArray(selectionMode) && selectionMode.includes("row")) return "multi";
    return undefined;
  }, [selectionMode]);

  const { gridHeight, gridWidth } = useGridDimensions(height, width);
  const finalRowMarkers = useRowMarkers(rowMarkers, hideIndex, "both");

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
        rowMarkers={finalRowMarkers}
        getCellsForSelection={true}
        theme={theme}
        freezeColumns={freezeColumns}
        freezeTrailingRows={freezeTrailingRows}
        trailingRowOptions={trailingRowOptions}
      />
    </div>
  );
};

export default GridDataGrid;
