import { useEffect, useState, createContext } from 'react';

export const OrderContext = createContext();
const OrderTTL = 60000 * 60 * 24 * 7; // 1 Week

export default function ({ children }) {
  const [orders, setOrders] = useState(null);
  const [orderString, setOrderString] = useState(null);
  const [count, setCount] = useState(0);
  const [delivery, setDelivery] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (orders != undefined) {
      localStorage.setItem('orders', JSON.stringify(orders));
      localStorage.setItem('orderStamp', Date.now() + OrderTTL);
    }
    setCount(getOrderCount(orders));
    setTotal(getOrderTotal(orders));
    setOrderString(getOrderString(orders));
  }, [orders]);

  useEffect(() => {
    const stamp = localStorage.getItem('orderStasmp');
    const expired = stamp && stamp < Date.now();
    const orders = expired
      ? []
      : JSON.parse(localStorage.getItem('orders')) || [];
    const count = getOrderCount(orders);
    setOrders(count ? orders : []);
  }, []);

  const getOrderCount = (orders) => {
    return orders
      ? orders.filter((order) => {
          return order.quantity > 0;
        }).length
      : 0;
  };

  const getOrderTotal = (orders) => {
    return orders && orders.length
      ? orders.reduce(
          (prev, next) => prev + next.quantity * next.variant.price,
          0
        )
      : 0;
  };

  const getOrderString = (orders) => {
    let htmlString = '';
    if (orders && orders.length) {
      let activeOrders = orders.filter((order) => {
        return order.quantity > 0;
      });
      for (var item of activeOrders) {
        htmlString += `
          <div>
            <div>${item.product.title}</div>
            <div>${item.variant.title}</div>
            <div>Quantity: ${item.quantity}</div>
          </div>
          <br/>
        `;
      }
    }
    return htmlString;
  };

  const addOrder = (product, variant, quantity) => {
    setOrders((prevState) => {
      return [...prevState, { product, variant, quantity }];
    });
  };

  const updateOrder = (index, quantity) => {
    setOrders((prevState) => {
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
      <OrderContext.Provider
        value={{
          orders,
          count,
          delivery,
          total,
          addOrder,
          updateOrder,
          clearOrder,
          setDelivery,
          orderString,
        }}
      >
        {children}
      </OrderContext.Provider>
    </>
  );
}
