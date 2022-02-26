import styled from 'styled-components';
import theme from '../themes/default';

const Page = styled.div`  
  text-align: center;  
  p {
    font-size: 1.1em;
    letter-spacing: 0.02em;
    padding: 1rem 1rem 0 1rem;
  }
  h1 {
    margin: 0 auto;
    display: inline-block;
    padding: 0 1rem;
  }
  @media (${theme.devices.md}) {
    text-align: left;
    h1 {
      border-bottom: none;
      padding: 0;
      display: none;
      margin: 3rem;
      text-align: center;
    }
  }
`

export default function ({ children }) {
  return (
    <Page>{children}</Page>
  )
}