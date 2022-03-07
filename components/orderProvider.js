import { useEffect, useState, createContext } from "react";

export const OrderContext = createContext();

export default function ({ children }) {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    if( orders != undefined ) localStorage.setItem("orders", JSON.stringify(orders));
    console.log(orders);
  }, [orders]);
  
  useEffect(() => {
    setOrders(JSON.parse(localStorage.getItem("orders")) || []);
  }, []);
  
  const addOrder = (product, variant, quantity) => {
    setOrders(prevState => {
      return [...prevState, { product, variant, quantity }]
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
