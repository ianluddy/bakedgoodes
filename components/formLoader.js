import theme from '../themes/default';
import styled from 'styled-components';

import { ImSpinner8 } from 'react-icons/im';
import { FaTimesCircle, FaCheckCircle } from 'react-icons/fa';

const Wrapper = styled.div`
  margin-top: 1rem;
  text-align: center;
  display: ${(props) =>
    props.$loading || props.$success || props.$error ? 'block' : 'none'};
  svg {
    font-size: 2em;
  }
`;

const Message = styled.div`
  flex-direction: column;
  align-items: center;
  height: 100%;
  display: flex;
  display: ${(props) => (props.show ? 'flex' : 'none')};
  div {
    max-width: 300px;
  }
  h2 {
    margin: 0.25rem 0 0.5rem 0;
  }
  p {
    font-weight: normal;
    margin: 0 0 0.75rem 0;
  }
`;

const Success = styled(Message)`
  svg {
    color: ${theme.secondary};
  }
`;

const Error = styled(Message)`
  svg {
    color: ${theme.red};
  }
`;

const Loading = styled(Message)``;

const Loader = styled.div`
  svg {
    animation-name: rotate;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    position: relative;
    top: 0.25rem;
    left: 0.5rem;
    font-size: 1em;
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

export default function (props) {
  return (
    <Wrapper {...props}>
      <Loading show={props.$loading}>
        <Loader>
          <h2>
            {props.loadingMsg} <ImSpinner8 />
          </h2>
        </Loader>
      </Loading>
      <Success show={props.$success}>
        <div>
          <h2>Thanks!</h2>
          <p>{props.successMsg}</p>
          <FaCheckCircle />
        </div>
      </Success>
      <Error show={props.$error}>
        <div>
          <h2>Hmmmmm</h2>
          <p>{props.errorMsg}</p>
          <FaTimesCircle />
        </div>
      </Error>
    </Wrapper>
  );
}
