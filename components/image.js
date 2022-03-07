import styled from 'styled-components';
import theme from '../themes/default';

const Wrapper = styled.div`
  img {
    border-radius: 8px;
    width: 100%;
  }
`;

// TODO optimise

export default function (props) {
  return (
    <Wrapper>
      <img src={props.src} alt={props.alt}/>
    </Wrapper>
  )
}