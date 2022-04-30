import Link from 'next/link';
import styled from 'styled-components';
import theme from '../themes/default';
import { Anchor } from './anchor';
import { useRouter } from 'next/router';

const Wrapper = styled.div`
  padding: 1rem 0 0.5rem 0;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 0.075rem;
  @media (${theme.devices.md}) {
    padding: 0 0 0.5rem 0;
  }
`;

const Divider = styled.span`
  padding: 0 0.25rem;
`;

export default function (props) {
  const router = useRouter();
  const urlParts = router.asPath.split('/');
  return (
    <Wrapper>
      <Link href={'/' + urlParts[1]}>
        <span>
          <Anchor>{urlParts[1]}</Anchor>
        </span>
      </Link>
      <Divider>/</Divider>
      <Link href={router.asPath}>
        <span>
          <Anchor bold>{router.query.id}</Anchor>
        </span>
      </Link>
    </Wrapper>
  );
}
