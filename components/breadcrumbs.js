import Link from 'next/link';
import styled from 'styled-components';
import theme from '../themes/default';
import { Anchor } from './anchor';
import { useRouter } from 'next/router';

const Wrapper = styled.div`
  padding: 0rem 0 0.5rem 0;
  color: ${theme.midGrey};
  text-transform: uppercase;
  font-size: 1rem;
`;

const Divider = styled.span`
  padding: 0 0.25rem;
`;

export default function( props ) {
  const router = useRouter();
  const urlParts = router.asPath.split('/');
  return (
    <Wrapper>
      <Link href={'/' + urlParts[1]}>
        <span>
          <Anchor color={theme.midGrey}>
            {urlParts[1]}
          </Anchor>
        </span>
      </Link>
      <Divider>
        /
      </Divider>
      <Link href={router.asPath}>
        <span>
          <Anchor color={theme.midGrey} bold>
            {router.query.id}
          </Anchor>
        </span>
      </Link>
    </Wrapper>
  )
}