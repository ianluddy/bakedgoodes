import styled from 'styled-components';
import theme from '../themes/default';
import { OrderContext } from './orderProvider';
import QuantityPicker from './quantityPicker';
import Price from './price';
import Image from './image';

const OrderWrapper = styled.div`
  padding-bottom: 0.5rem;
  display: ${props => props.visible ? "block" : "none"};
  text-align: left;  
`;

const Meta = styled.div`
  display: inline-block;
  padding: 0.3rem 0 0 1rem;
  font-weight: 400;
  vertical-align: top;
`;

const Title = styled.div`
  font-weight: 400;
  font-size: 1.1rem;
`;

const Variant = styled.div`
  font-weight: 100;
  color: ${theme.midGrey};
  font-size: 1rem;
`;

export default function (order, index) {
  return (
    <OrderWrapper key={index} visible={order.quantity > 0}>
      <Image width={"80px"} src={order.product.src} inline/>
      <Meta>
        <Title>{order.product.title}</Title>
        <Variant>{order.variant.title}</Variant>
        <Price weight={600} color={theme.secondary} value={order.variant.price * order.quantity}></Price>
      </Meta>
      <QuantityPicker order={order} index={index}/>
    </OrderWrapper>
  )
}
