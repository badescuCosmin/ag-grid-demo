import { forwardRef } from "react";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact, AgGridReactProps } from "@ag-grid-community/react";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { IGridRef } from "./grid.types";
import { useGrid } from "./grid.hook";
import "./grid.styles.css";

const Grid = forwardRef<IGridRef, AgGridReactProps>(({ ...props }, ref) => {
  const { getRowId, onFirstDataRendered, gridRef, gridOptions } = useGrid(ref);

  return (
    <div className="ag-theme-alpine ag-theme-custom container">
      <AgGridReact
        ref={gridRef}
        getRowId={getRowId}
        onFirstDataRendered={onFirstDataRendered}
        gridOptions={gridOptions}
        modules={[ClientSideRowModelModule]}
        {...props}
      />
    </div>
  );
});

export default Grid;
