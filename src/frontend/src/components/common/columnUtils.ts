import { GridColumn } from "@glideapps/glide-data-grid";

const widthMap: Record<string, number> = {
  small: 80,
  medium: 150,
  large: 300,
};

export const getGridColumns = (
  columns: string[],
  columnConfig: Record<string, any> | undefined,
  columnOrder?: string[],
): GridColumn[] => {
  let activeColumns = columns;
  if (columnOrder) {
    activeColumns = columnOrder.filter((c) => columns.includes(c));
  }

  return activeColumns.map((col) => {
    const config = columnConfig?.[col];
    // Safely access config.label
    let title = col;
    if (typeof config === "object" && config !== null && "label" in config) {
      title = String(config.label);
    } else if (typeof config === "string") {
      title = config;
    }

    // Calculate width
    let width = 150; // Default
    if (typeof config === "object" && config !== null && "width" in config) {
      const configWidth = config.width;
      if (typeof configWidth === "number") {
        width = configWidth;
      } else if (typeof configWidth === "string" && configWidth in widthMap) {
        width = widthMap[configWidth];
      }
    }

    // Extract group
    let group: string | undefined = undefined;
    if (typeof config === "object" && config !== null && "group" in config) {
      group = String(config.group);
    }

    return {
      title: title,
      id: col,
      width: width,
      group: group,
    };
  });
};
