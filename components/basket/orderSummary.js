import styled from 'styled-components';
import theme from '../../themes/default';
import { useState, useContext } from "react";
import { OrderContext } from './orderProvider';
import Order from './order';
import { IconAnchor } from '../anchor';
import Price from '../price';
import { AiOutlineDelete } from "react-icons/ai";

const Header = styled.h2`
  text-align: center;
`;

const Placeholder = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  display: ${props => props.visible ? 'flex' : 'none'};
  flex-direction: row;
  align-items: center;
  div {
    width: 100%;
  }
`;

const Summary = styled.div`
  display: ${props => props.visible ? 'block' : 'none'};
`;

const Table = styled.table`
  width: 100%;
  height: 100%;
  overflow: auto;
  border: 1px solid;
`;

export default function ({ children }) {
  const {addOrder, removeOrder, orders} = useContext(OrderContext);
  
  const orderList = orders ? orders.map((order, i) => 
    <Order 
      key={i} 
      order={order} 
      remove={() => {removeOrder(i)}}
    />
  ) : null;

  return (
    <>
      <Header> Order summary </Header>
      <Placeholder visible={!orders || !orders.length}>
        <div>Your basket is empty :(</div>
      </Placeholder>
      <Summary visible={orders && orders.length}>
        <Table>
          <tbody>
            {orderList}
          </tbody>
        </Table>
      </Summary>
    </>
  )
};