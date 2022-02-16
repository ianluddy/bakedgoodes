import styled from 'styled-components';
import theme from '../themes/default';
import Socials from './socials';
import Anchor from './anchor';

const Footer = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

const Break = styled.div`
  border-top: ${theme.border};  
  margin-bottom: 1rem;  
`;

const Signature = styled.span`
  display: inline-block;
  margin: 0 2rem 1rem 2rem;
`;

export default function () {  
  return (
    <Footer>
      <Break></Break>
      <Signature>© {new Date().getFullYear()} Baked Goodes</Signature>
      <Signature>
        Baked in Inchicore, Dublin 8
      </Signature>
      <Signature>
        <Anchor href="mailto:order@bakedgoodes.ie"> order@bakedgoodes.ie </Anchor>
      </Signature>
      <Socials white>
        Test
      </Socials>
    </Footer>
  )
}