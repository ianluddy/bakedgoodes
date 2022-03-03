import styled from 'styled-components';
import theme from '../themes/default';
import Button from '../components/button';

const Wrapper = styled.div`
  padding: 3rem 0;
  margin: 3rem 0;
  text-align: center;
  line-height: 2.5rem;
`;

const Headline = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Body = styled.div`
  font-size: 1.1rem;
  padding: 1rem 0 1.5rem 0;
  line-height: 1.5rem;
`;

export default function (props) {
  return (
    <Wrapper>
      <Headline>{props.headline}</Headline>
      <Body>{props.body}</Body>
      <Button href={props.buttonLink} text={props.buttonText} large/>
    </Wrapper>
  )
}