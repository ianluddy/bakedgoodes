import styled from 'styled-components';
import theme from '../themes/default';

const PageHeader = styled.h1`  
  text-align: center;
  font-size: 1.7rem;

  @media (${theme.devices.md}) {
    padding-top: 2rem;
  }
`

export default function ({ children }) {
  return (
    <PageHeader>
      {children}
    </PageHeader>
  )
}