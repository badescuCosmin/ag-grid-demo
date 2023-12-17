import { GetRowIdParams, GridOptions } from "@ag-grid-community/core";
import { AgGridReact } from "@ag-grid-community/react";
import { useRef, useImperativeHandle, useCallback } from "react";
import { CustomerProps } from "../Customer/customer.types";
import { IGridRef, TransactionActionProps } from "./grid.types";

const gridOptions: GridOptions = {
  groupHeaderHeight: 34,
  headerHeight: 30,
  defaultColDef: {
    resizable: true,
    sortable: true,
    editable: true,
    filter: "agTextColumnFilter",
    menuTabs: ["filterMenuTab"],
  },
};

export const useGrid = (ref: React.ForwardedRef<IGridRef>) => {
  const gridRef = useRef<AgGridReact<CustomerProps>>(null);

  useImperativeHandle(ref, () => ({
    applyTransaction: (
      data: CustomerProps | { id: number },
      action: TransactionActionProps = TransactionActionProps.add
    ) =>
      gridRef.current?.api.applyTransaction({
        [action]: [{ ...data }],
      }),
  }));

  const onFirstDataRendered = useCallback(() => {
    gridRef.current &&
      gridRef.current.api.sizeColumnsToFit({
        defaultMinWidth: 100,
      });
  }, []);

  const getRowId = useCallback(
    (params: GetRowIdParams<CustomerProps>) => String(params.data.id),
    []
  );

  return {
    getRowId,
    onFirstDataRendered,
    gridRef,
    gridOptions,
  };
};
