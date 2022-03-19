import styled from 'styled-components';
import theme from '../themes/default';
import { Wrapper } from './wrapper';

const Paragraph = styled.p`
  max-width: ${theme.textMaxWidth};
`;

export default function (props) {
  return (
    <Wrapper {...props}>
      <Paragraph>
        {props.children}
      </Paragraph>
    </Wrapper>
  )
}