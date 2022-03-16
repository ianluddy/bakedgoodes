import CurrencyFormat from 'react-currency-format';
import theme from '../themes/default';
import styled from 'styled-components';

const Wrapper = styled.span`
  color: ${props => props.color || theme.text};
  font-weight: ${props => props.weight || "normal"};
`;

export default function (props) {
  return (
    <Wrapper 
      weight={props.weight} 
      color={props.color}
      >
      <CurrencyFormat 
        value={props.value} 
        displayType={'text'} 
        thousandSeparator={true} 
        prefix={'€ '} 
        suffix={'.00'} // hmmm TODO
      />
    </Wrapper>      
  )
}