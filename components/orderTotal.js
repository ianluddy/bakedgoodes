import styled from 'styled-components';
import { useContext } from 'react';

import theme from '../themes/default';
import { OrderContext } from './orderProvider';
import Price from './price';

const Wrapper = styled.h2`
  margin: 0;
  display: flex;
  font-size: ${(props) => props.small && '1.1rem'};
  color: ${(props) => props.color || 'inherit'};
`;

const Right = styled.div`
  margin: 0 0 0 auto;
`;

const Left = styled.div``;

export default function ({ children, showDelivery }) {
  const { delivery, total } = useContext(OrderContext);
  return (
    <>
      {showDelivery && delivery > 0 && (
        <Wrapper small color={theme.midGrey}>
          <Left>Delivery</Left>
          <Right>
            <Price color={theme.midGrey} weight={600} value={delivery} />
          </Right>
        </Wrapper>
      )}
      <Wrapper>
        <Left>Total</Left>
        <Right>
          <Price
            color={theme.secondary}
            weight={600}
            value={showDelivery ? total + delivery : total}
          />
        </Right>
      </Wrapper>
    </>
  );
}
