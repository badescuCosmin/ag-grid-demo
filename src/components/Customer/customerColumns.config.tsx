import { ColDef, ValueGetterParams } from "@ag-grid-community/core";
import { useMemo } from "react";
import { CustomerProps } from "./customer.types";
import { EmailCellRender } from "./emailCellRenderer.component";

export const useColumns = (): ColDef<CustomerProps>[] =>
  useMemo(
    () => [
      {
        field: "id",
        enableCellChangeFlash: true,
        suppressMovable: true,
        sortable: false,
        resizable: false,
      },
      { field: "name", sort: "asc", enableCellChangeFlash: true },
      {
        field: "username",
        enableCellChangeFlash: true,
      },
      {
        field: "email",
        enableCellChangeFlash: true,
        cellRenderer: EmailCellRender,
      },
      {
        field: "phone",
        enableCellChangeFlash: true,
      },
      {
        enableCellChangeFlash: true,
        headerName: "Addresss",
        children: [
          {
            field: "Street address",
            valueGetter: (params: ValueGetterParams<CustomerProps, string>) =>
              params.data?.address.street,
            enableCellChangeFlash: true,
          },
          { field: "address.zipcode", enableCellChangeFlash: true },
          { field: "address.number", enableCellChangeFlash: true },
        ],
      },
    ],
    []
  );
