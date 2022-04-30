import styled from 'styled-components';
import { useContext } from 'react';

import theme from '../themes/default';
import { OrderContext } from './orderProvider';
import Price from './price';

const Wrapper = styled.h2`
  margin: 0;
  display: flex;
`;

const Right = styled.div`
  margin: 0 0 0 auto;
`;

const Left = styled.div``;

export default function ({ children }) {
  const { orders } = useContext(OrderContext);
  return (
    <Wrapper>
      <Left>Subtotal</Left>
      <Right>
        <Price
          color={theme.secondary}
          weight={600}
          value={
            (orders &&
              orders.length &&
              orders.reduce(
                (prev, next) => prev + next.quantity * next.variant.price,
                0
              )) ||
            0
          }
        />
      </Right>
    </Wrapper>
  );
}
