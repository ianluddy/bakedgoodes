import { useContext } from "react";
import { OrderContext } from './orderProvider';
import theme from '../themes/default';
import Price from './price';

export default function ({ children }) {
  const { orders } = useContext(OrderContext);
  return (
    <>
      <Price 
        color={theme.secondary}
        weight={600}
        value={
          orders && orders.length && orders.reduce(
            (prev, next) => prev + next.quantity * next.variant.price
          , 0) || 0
        }
      />
    </>
  )
};