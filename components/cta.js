import styled from 'styled-components';
import theme from '../themes/default';
import { ButtonAnchor } from './anchor';

const CTAWrapper = styled.div`
  padding: ${(props) => props.padding};
  margin: ${(props) => (props.small ? '1rem 0' : '3rem 0')};
  text-align: center;
  h2 {
    margin: 0;
    a {
      font-weight: 600;
    }
  }
  p {
    margin: ${(props) =>
      props.small ? '0.5rem auto 1rem auto' : '1.25rem auto 1.5rem auto'};
    padding: 0 2.5rem;
  }
  svg {
    font-size: 2rem;
    line-height: 2rem;
    vertical-align: top;
    margin-right: 0.5rem;
    position: relative;
    @media (${theme.devices.md}) {
      top: 0.15rem;
    }
  }
`;

export default function (props) {
  return (
    <CTAWrapper {...props}>
      <h2>{props.headline}</h2>
      <p>{props.body}</p>
      <ButtonAnchor
        href={props.buttonLink}
        text={props.buttonText}
        secondary
        large
      />
    </CTAWrapper>
  );
}
