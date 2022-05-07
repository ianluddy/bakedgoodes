import styled from 'styled-components';
import theme from '../themes/default';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { SidebarAnchor } from './anchor';

const Wrapper = styled.div`
  margin: 0.5rem 0.5rem 0 0;
  padding: 1rem 1rem 2rem 1rem;
  background-color: #f5f5f5;
  border-radius: ${theme.borderRadius};
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
