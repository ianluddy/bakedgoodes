import styled from 'styled-components';
import theme from '../themes/default';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { SidebarAnchor } from './anchor';

const Wrapper = styled.div`
  margin: 0rem 0.5rem 0 0;
  padding: 0rem 1rem 2rem 1rem;
  border-radius: ${theme.borderRadius};
  text-align: center;
  h3 {
    margin-top: 0.5rem;
  }
  @media (${theme.devices.lg}) {
    text-align: left;
  }
`;

const LinkWrapper = styled.div``;

export default function (props) {
  const router = useRouter();
  return (
    <Wrapper>
      <h3> Categories </h3>
      <LinkWrapper>
        <SidebarAnchor href="/cakes"> Occasion Cakes </SidebarAnchor>
      </LinkWrapper>
      <LinkWrapper>
        <SidebarAnchor href="/wedding-cakes"> Wedding Cakes </SidebarAnchor>
      </LinkWrapper>
      <LinkWrapper>
        <SidebarAnchor href="/cupcakes"> Cupcakes </SidebarAnchor>
      </LinkWrapper>
      <LinkWrapper>
        <SidebarAnchor href="/more"> Everything Else </SidebarAnchor>
      </LinkWrapper>
    </Wrapper>
  );
}
