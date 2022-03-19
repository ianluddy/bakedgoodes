import styled from 'styled-components';
import theme from '../themes/default';

const Wrapper = styled.div`
  display: ${props => props.inline ? "inline-block" : "block"};
  width: ${props => props.width ? props.width : "unset"};
  img {
    width: 100%;
    border-radius: ${props => props.hero ? '0' : '8px'};
    @media (${theme.devices.md}) {
      border-radius: 8px;
    }
  }
`;

// TODO optimise

export default function (props) {
  return (
    <Wrapper {...props}>
      <img {...props}/>
    </Wrapper>
  )
}