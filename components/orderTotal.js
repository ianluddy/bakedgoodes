import { useContext } from "react";
import { OrderContext } from './orderProvider';
import Price from './price';

export default function ({ children }) {
  const {addOrder, removeOrder, orders} = useContext(OrderContext);
  return (
    <>
      <Price value={
        orders && orders.length && orders.reduce(
          (prev, next) => prev + next.quantity * next.variant.price
        , 0) || 0
      }/>
    </>
  )
};