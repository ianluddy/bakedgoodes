import styled from 'styled-components';
import theme from '../themes/default';
import Image from './image';
import Link from 'next/link';

const Wrapper = styled.div`
  text-align: center;
  padding: 0 0 4rem 0;
  transition: transform ${theme.transitionTime};
  @media (${theme.devices.sm}) {
    :hover {
      transform: scale(1.03);
    }
  }
  @media (${theme.devices.md}) {
    padding: 1.5rem 2rem 4rem 2rem;
  }
  > div {
    border: 2px solid;
    border-radius: 2px;
    cursor: pointer;
  }
`;

export default function (props) {
  return (
    <Wrapper>
      <h2>Follow me</h2>
      {!props.hideSubtitle && (
        <p>
          Check out my Instagram to see my most recent bakes. You can message me
          there to chat about an order.
        </p>
      )}
      <Link href="https://www.instagram.com/baked_goodes/">
        <Image src="images/instagram.jpg" alt="Instagram" title="Instagram" />
      </Link>
    </Wrapper>
  );
}
