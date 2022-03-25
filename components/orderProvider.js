import { useEffect, useState, createContext } from "react";

export const OrderContext = createContext();
const OrderTTL = 60000 * 60 * 24 * 7; // 1 Week

export default function ({ children }) {
  const [orders, setOrders] = useState(null);
  const [count, setCount] = useState(null);

  useEffect(() => {
    console.log(orders);
    setCount(orderCount(orders));
    if( orders != undefined ) {
      localStorage.setItem("orders", JSON.stringify(orders));
      localStorage.setItem("orderStamp", Date.now() + OrderTTL);
    }
  }, [orders]);
  
  useEffect(() => {
    const stamp = localStorage.getItem("orderStasmp");
    const expired = stamp && stamp < Date.now();
    const orders = expired ? [] : (JSON.parse(localStorage.getItem("orders")) || []);
    const count = orderCount(orders);
    setOrders(count ? orders : []);
  }, []);
  
  const orderCount = (orders) => {
    return orders ? orders.filter(order => {return order.quantity > 0}).length : 0;
  };

  const addOrder = (product, variant, quantity) => {
    setOrders(prevState => {
      return [...prevState, { product, variant, quantity }]
    });
  };
  
  const updateOrder = (index, quantity) => {
    setOrders(prevState => {
      const updated = [...prevState];
      updated[index].quantity = quantity;
      return updated;
    });
  };

  const clearOrder = () => {
    setOrders([]);
  };
  
  return (
    <>
      <OrderContext.Provider value={{orders, count, addOrder, updateOrder, clearOrder}}>
        {children}
      </OrderContext.Provider>
    </>
  )
};
