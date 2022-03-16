import styled from 'styled-components';
import theme from '../themes/default';
import { OrderContext } from './orderProvider';
import QuantityPicker from './quantityPicker';
import Price from './price';
import Image from './image';

const Wrapper = styled.div`
  padding-bottom: 0.75rem;
  display: ${props => props.visible ? "block" : "none"};
  text-align: left;  
`;

const Meta = styled.div`
  width: calc(100% - (84px + 2rem));
  padding: 0.35rem 0.5rem 0 0.75rem;
  font-weight: 400;
  display: inline-block;
  vertical-align: top;
  font-size: 1.1rem;
`;

const Title = styled.div`
  font-weight: 400;
`;

const Variant = styled.div`
  font-weight: 100;
  color: ${theme.midGrey};
`;

export default function (order, index) {
  return (
    <Wrapper key={index} visible={order.quantity > 0}>
      <Image width={"84px"} src={order.product.src} inline/>
      <Meta>
        <Title>{order.product.title}</Title>
        <Variant>{order.variant.shortTitle}</Variant>
        <div>
          <Price weight={600} color={theme.secondary} value={order.variant.price * order.quantity}></Price>
          <QuantityPicker order={order} index={index}/>
        </div>
      </Meta>
    </Wrapper>
  )
}
