import styled from 'styled-components';
import theme from '../themes/default';

const Page = styled.div`  
  text-align: center;
  min-height: 80vh;  
  font-size: 1.1em;
  letter-spacing: 0.04em;
  font-weight: 200;
  position: relative;
  @media (${theme.devices.md}) {
    text-align: left;
  }
`;

export default function ({ children }) {
  return (
    <Page>{children}</Page>
  )
}