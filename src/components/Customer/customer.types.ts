export type CustomerProps = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    zipcode: number;
    number: number;
  };
  phone: string;
};
