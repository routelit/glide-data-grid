import { useMemo, useState, useEffect } from "react";
import { GridSelection } from "@glideapps/glide-data-grid";
import { createGridSelection } from "../utils/selectionUtils";

export const useGridDimensions = (
  height: "auto" | "content" | "stretch" | number = "auto",
  width: "stretch" | "content" | number = "stretch",
) => {
  const gridHeight = useMemo(() => {
    if (height === "auto") return 400;
    if (height === "stretch") return "100%";
    return height;
  }, [height]);

  const gridWidth = useMemo(() => {
    if (width === "stretch") return "100%";
    return width;
  }, [width]);

  return { gridHeight, gridWidth };
};

export const useRowMarkers = (
  rowMarkers: "none" | "number" | "checkbox" | "both" | undefined,
  hideIndex: boolean,
  defaultMarker: "both" | "number" = "both",
) => {
  return useMemo(() => {
    if (rowMarkers !== undefined && rowMarkers !== null) return rowMarkers;
    return !hideIndex ? defaultMarker : "none";
  }, [rowMarkers, hideIndex, defaultMarker]);
};

export const useGridSelectionSync = (initialSelection: any) => {
  const [gridSelection, setGridSelection] = useState<GridSelection>(() =>
    createGridSelection(initialSelection),
  );

  useEffect(() => {
    if (initialSelection) {
      setGridSelection(createGridSelection(initialSelection));
    }
  }, [initialSelection]);

  return [gridSelection, setGridSelection] as const;
};
