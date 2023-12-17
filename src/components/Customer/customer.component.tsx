import { useRef } from "react";
import Grid from "../Grid/grid.component";
import { IGridRef, TransactionActionProps } from "../Grid/grid.types";
import { useGetCustomers } from "./customer.hook";

export const Customers = () => {
  const { customers, columns } = useGetCustomers();
  const gridRef = useRef<IGridRef | null>(null);

  return (
    <>
      <button
        onClick={() =>
          gridRef.current?.applyTransaction(
            {
              id: 1,
              name: "Will Joe",
              username: "will11",
              email: "willjoe@gmail.com",
              address: {
                street: "lorem street",
                zipcode: Math.floor(Math.random() * 1000),
                number: Math.floor(Math.random() * 100),
              },
              phone: "087132113",
            },
            TransactionActionProps.update
          )
        }
      >
        Update Row with id 1
      </button>
      <button
        onClick={() =>
          gridRef.current?.applyTransaction(
            {
              id: 3,
            },
            TransactionActionProps.remove
          )
        }
      >
        Remove row with id 3
      </button>
      <Grid ref={gridRef} columnDefs={columns} rowData={customers} />
    </>
  );
};
