import { useEffect, useState } from "react";
import { useColumns } from "./customerColumns.config";
import { CustomerProps } from "./customer.types";

export const MOCK_DATA = [
  {
    id: 1,
    name: "Jane Doe",
    username: "janeDoe23",
    email: "janeDoe@gmail.com",
    address: {
      street: "melody drive",
      zipcode: 12345,
      number: 23,
    },
    phone: "0762131223",
  },
  {
    id: 2,
    name: "John Will",
    username: "john2@",
    email: "johnwill@gmail.com",
    address: {
      street: "new st",
      zipcode: 44223,
      number: 31,
    },
    phone: "2323114212",
  },
  {
    id: 3,
    name: "Sam Doe",
    username: "samm",
    email: "samdoe@gmail.com",
    address: {
      street: "loch ness road",
      zipcode: 44421,
      number: 23,
    },
    phone: "4231234211",
  },
  {
    id: 4,
    name: "Jane Lee",
    username: "lee32",
    email: "janelee@gmail.com",
    address: {
      street: "gramdios drive",
      zipcode: 31255,
      number: 31,
    },
    phone: "444828281",
  },
  {
    id: 5,
    name: "Crow Ross",
    username: "ross",
    email: "ross@gmail.com",
    address: {
      street: "gramdios drive",
      zipcode: 31255,
      number: 55,
    },
    phone: "4141231241",
  },
];

const getData = (): Promise<CustomerProps[]> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_DATA), 500);
  });

export const useGetCustomers = () => {
  const [customers, setCustomers] = useState<CustomerProps[]>([]);
  const columns = useColumns();

  useEffect(() => {
    getData()
      .then((res) => setCustomers(res))
      .catch((err) => console.log(err));
  }, []);

  return { customers, columns };
};
