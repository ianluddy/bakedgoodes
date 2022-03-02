import { useEffect, useState, createContext } from "react";

export const OrderContext = createContext();

export default function ({ children }) {
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    if( orders.length ) localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);
  
  useEffect(() => {
    setOrders(JSON.parse(localStorage.getItem("orders")) || []);
  }, []);
  
  const addOrder = (product, quantity) => {
    setOrders(prevState => {
      return [...prevState, { product, quantity }]
    });
  }
  
  const removeOrder = (index) => {
    setOrders(orders.filter((_, i) => i !== index));
  }
  
  return (
    <>
      <OrderContext.Provider value={{orders, addOrder, removeOrder}}>
        {children}
      </OrderContext.Provider>
    </>
  )
};
