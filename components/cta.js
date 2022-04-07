import styled from 'styled-components';
import theme from '../themes/default';
import { ButtonAnchor } from './anchor';

const CTAWrapper = styled.div`
  margin: ${props => props.small ? '1rem 0' : '3rem 0'};
  text-align: center;
  h2 {
    margin: 0;
  }
  p {
    margin: 1.25rem auto 1.5rem auto;
    margin: ${props => props.small ? '0.5rem auto 1rem auto' : '1.25rem auto 1.5rem auto'};
  }
`;

export default function (props) {
  return (
    <CTAWrapper {...props}>
      <h2>
        {props.headline}
      </h2>
      <p>
        {props.body}
      </p>
      <ButtonAnchor
        href={props.buttonLink}
        text={props.buttonText}
        secondary
        large
      />
    </CTAWrapper>
  )
}