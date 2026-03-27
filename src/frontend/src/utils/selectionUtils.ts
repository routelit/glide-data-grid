import { CompactSelection, GridSelection } from "@glideapps/glide-data-grid";

export const createCompactSelection = (indices?: number[]): CompactSelection => {
  let selection = CompactSelection.empty();
  if (indices) {
    for (const index of indices) {
      selection = selection.add(index);
    }
  }
  return selection;
};

export const createGridSelection = (initial?: { rows?: number[]; columns?: number[]; current?: any }): GridSelection => {
  return {
    rows: createCompactSelection(initial?.rows),
    columns: createCompactSelection(initial?.columns),
    current: initial?.current,
  };
};
