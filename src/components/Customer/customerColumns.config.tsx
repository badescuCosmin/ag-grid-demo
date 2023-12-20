import { ColDef, ValueGetterParams } from "@ag-grid-community/core";
import { useMemo } from "react";
import { CustomerProps } from "./customer.types";

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
        cellRenderer: (props: { value: string }) => (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginRight: "5px" }}
            >
              <rect x="1" y="3" width="22" height="18" rx="2" ry="2" />
              <polyline points="1 10 12 15 23 10" />
            </svg>
            {props.value}
          </div>
        ),
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
