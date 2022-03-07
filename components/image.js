import styled from 'styled-components';
import theme from '../themes/default';

const Wrapper = styled.div`
  display: ${props => props.inline ? "inline-block" : "block"};
  width: ${props => props.width ? props.width : "unset"};
  img {
    border-radius: 8px;
    width: 100%;
  }
`;

// TODO optimise

export default function (props) {
  return (
    <Wrapper inline={props.inline} width={props.width}>
      <img src={props.src} alt={props.alt}/>
    </Wrapper>
  )
}