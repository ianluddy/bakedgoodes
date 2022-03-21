import theme from '../themes/default';
import styled from 'styled-components';

import { ImSpinner8 } from "react-icons/im";
import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: ${props => 
    props.$loading || props.$success || props.$error ? 
    'block' : 
    'none'
  };
  font-size: 1.1em;
  font-weight: bold;
  text-align: center;
  svg {
    font-size: 1.5em;
  }
`;

const Message = styled.div`
  flex-direction: column;
  align-items: center;
  height: 100%;
  display: flex;
  display: ${props => props.show ? 'flex' : 'none'};
  div {
    margin: auto 0;
    max-width: 400px;
  }
`;

const Success = styled(Message)`
  color: ${theme.secondary};
`;

const Error = styled(Message)`
  color: ${theme.red};
`;

const Loading = styled(Message)`
  color: ${theme.midGrey};
`;

const Loader = styled.div`
  svg {
    animation-name: rotate;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    position: relative;
    top: 0.25rem;
    left: 0.5rem;
    font-size: 1.1em;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }  
`;

export default function(props) {
  return (
    <Wrapper {...props}>
      <Loading show={props.$loading}>
        <Loader>
          {props.loadingMsg}
          <ImSpinner8/>
        </Loader>
      </Loading>
      <Success show={props.$success}>
        <div>
          <FaCheckCircle/><br/>      
          {props.successMsg}
        </div>
      </Success>
      <Error show={props.$error}>
        <div>
          <FaTimesCircle/><br/>        
          {props.errorMsg}
        </div>        
      </Error>
    </Wrapper>
  );
}