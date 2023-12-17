import { CustomerProps } from "../Customer/customer.types";

export interface IGridRef {
  applyTransaction: (
    data: CustomerProps | { id: number },
    action?: TransactionActionProps
  ) => void;
}

export enum TransactionActionProps {
  add = "add",
  remove = "remove",
  update = "update",
}
