import styled from 'styled-components';
import theme from '../../themes/default';
import { IconAnchor } from '../anchor';
import Price from '../price';
import { AiOutlineDelete } from "react-icons/ai";

const Meta = styled.div`
  padding: 1rem 1rem;
  font-size: 1.4rem;
  position: relative;
  bottom: 0.4rem;
  color: ${theme.secondary};
  span {
    font-size: 1rem;
    color: ${theme.text};
  }
`;

const Image = styled.div`
  img {
    height: 100%;
  }
`;

const Row = styled.tr`
  td:first-of-type {
    width: 100px;
  }
  td:last-of-type {
    width: 50px;
  }    
  img {
    width: 100%;
  }
`;

export default function( props ) {
  return (
    <Row>
      <td>
        <img src={props.order.product.src}/>
      </td>
      <td>
        <Meta>
          <div>
            {props.order.product.title}
          </div>
          <span>
            {props.order.quantity.title} (<Price value={props.order.quantity.price}/>)
          </span>
        </Meta>
      </td>
      <td>
        <IconAnchor href="#" onClick={props.remove} size="1.4rem">
          <AiOutlineDelete/>
        </IconAnchor>
      </td>      
    </Row>
  )
}