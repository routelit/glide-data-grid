import React, { useCallback, useMemo, useState, useEffect, memo } from "react";
import {
  DataEditor,
  GridCell,
  Item,
} from "@glideapps/glide-data-grid";
import { allCells } from "@glideapps/glide-data-grid-cells";
import { mapPythonToGlideCell } from "../utils/typeMapper";
import { useDispatcherWith } from "routelit-client";
import { useGridColumns } from "../hooks/useGridColumns";

import "@glideapps/glide-data-grid/dist/index.css";
import "@glideapps/glide-data-grid-cells/dist/index.css";

interface GridDataEditorProps {
  data: any[];
  columns: string[];
  columnTypes: Record<string, string>;
  height?: "auto" | "content" | "stretch" | number;
  width?: "stretch" | "content" | number;
  hideIndex?: boolean;
  rowHeight?: number;
  numRows?: "fixed" | "dynamic" | "add" | "delete";
  disabled?: boolean | (string | number)[];
  columnConfig?: Record<string, any>;
  placeholder?: string;
  onChange?: "ignore" | "rerun" | "callback";
  columnOrder?: string[];
  id: string;
}

export const GridDataEditor: React.FC<GridDataEditorProps> = memo(({
  data: initialData,
  columns,
  columnTypes,
  height = "auto",
  width = "stretch",
  hideIndex = false,
  rowHeight,
  numRows = "fixed",
  disabled = false,
  columnConfig,
  onChange,
  columnOrder,
  id,
}) => {
  const sendEvent = useDispatcherWith(id, "change");

  const [localData, setLocalData] = useState(initialData);

  useEffect(() => {
    setLocalData(initialData);
  }, [initialData]);

  const gridColumns = useGridColumns(columns, columnConfig, columnOrder);

  const getCellContent = useCallback(
    (cell: Item): GridCell => {
      const [col, row] = cell;
      const dataRow = localData[row];
      const columnName = gridColumns[col].id as string;
      const value = dataRow ? dataRow[columnName] : undefined;
      const pythonType = columnTypes[columnName];
      const config = columnConfig?.[columnName];

      const glideCell = mapPythonToGlideCell(value, pythonType, config);
      
      // Determine if cell is disabled
      let isCellDisabled = false;
      const colConfig = columnConfig?.[columnName];
      
      // Respect column-level disabled configuration
      if (colConfig && colConfig.disabled === true) {
        isCellDisabled = true;
      } else if (disabled === true) {
        isCellDisabled = true;
      } else if (Array.isArray(disabled)) {
        isCellDisabled = disabled.includes(columnName) || disabled.includes(col);
      }

      return {
        ...glideCell,
        readonly: isCellDisabled || (glideCell as any).readonly,
      } as any;
    },
    [localData, gridColumns, columnTypes, disabled, columnConfig]
  );

  const onCellEdited = useCallback(
    (cell: Item, newValue: GridCell) => {
      const [col, row] = cell;
      const columnName = gridColumns[col].id as string;
      
      // Perform validation based on column config
      const config = columnConfig?.[columnName];
      let value: any = (newValue as any).data;

      // Basic type validation
      const pythonType = columnTypes[columnName];
      if (pythonType === "int") {
        const num = parseInt(value);
        if (isNaN(num)) return; // Reject edit
        value = num;
      } else if (pythonType === "float") {
        const num = parseFloat(value);
        if (isNaN(num)) return; // Reject edit
        value = num;
      }

      // ColumnConfig validation
      if (config) {
        if (config.min_value !== undefined && value < config.min_value) return;
        if (config.max_value !== undefined && value > config.max_value) return;
        if (config.max_chars !== undefined && String(value).length > config.max_chars) return;
      }

      const newData = [...localData];
      const newRow = { ...newData[row] };

      newRow[columnName] = value;
      newData[row] = newRow;

      setLocalData(newData);

      if (onChange !== "ignore") {
        sendEvent({ data: newData });
      }
    },
    [localData, gridColumns, columnTypes, columnConfig, onChange, sendEvent]
  );

  const onRowAppended = useCallback(() => {
    const newRow: Record<string, any> = {};
    columns.forEach((col) => {
      const type = columnTypes[col];
      if (type === "int" || type === "float") newRow[col] = 0;
      else if (type === "bool") newRow[col] = false;
      else newRow[col] = "";
    });

    const newData = [...localData, newRow];
    setLocalData(newData);

    if (onChange !== "ignore") {
      sendEvent({ data: newData });
    }
  }, [localData, columns, columnTypes, onChange, sendEvent]);

  const gridHeight = useMemo(() => {
    if (height === "auto") return 400;
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
        rows={localData.length}
        getCellContent={getCellContent}
        onCellEdited={onCellEdited}
        onRowAppended={(numRows === "dynamic" || numRows === "add") ? onRowAppended : undefined}
        rowHeight={rowHeight}
        rowMarkers={!hideIndex ? "number" : "none"}
        getCellsForSelection={true}
        customRenderers={allCells}
        trailingRowOptions={{
          hint: "Add row",
        }}
      />
    </div>
  );
});

export default GridDataEditor;
