import { useEffect, useState, createContext } from "react";

export const OrderContext = createContext();

export default function ({ children }) {
  const [orders, setOrders] = useState(null);
  const [count, setCount] = useState(null);

  useEffect(() => {
    console.log(orders);
    setCount(orderCount(orders));
    if( orders != undefined ) {
      localStorage.setItem("orders", JSON.stringify(orders));
    }
  }, [orders]);
  
  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
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
  
  return (
    <>
      <OrderContext.Provider value={{orders, count, addOrder, updateOrder}}>
        {children}
      </OrderContext.Provider>
    </>
  )
};
