import { useEffect, useState, createContext } from "react";

export const OrderContext = createContext();

export default function ({ children }) {
  const [orders, setOrders] = useState(null);
  const [count, setCount] = useState(null);

  useEffect(() => {
    console.log(orders);
    setCount(orders ? orders.filter(order => {return order.quantity > 0}).length : 0);    
    if( orders != undefined ) {
      localStorage.setItem("orders", JSON.stringify(orders));
    }
  }, [orders]);
  
  useEffect(() => {
    setOrders(JSON.parse(localStorage.getItem("orders")) || []);
  }, []);
  
  const addOrder = (product, variant, quantity) => {
    setOrders(prevState => {
      return [...prevState, { product, variant, quantity }]
    });
  }
  
  const updateOrder = (index, quantity) => {
    setOrders(prevState => {
      const updated = [...prevState];
      updated[index].quantity = quantity;
      return updated;
    });
  }
  
  return (
    <>
      <OrderContext.Provider value={{orders, count, addOrder, updateOrder}}>
        {children}
      </OrderContext.Provider>
    </>
  )
};
