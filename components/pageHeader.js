import styled from 'styled-components';
import theme from '../themes/default';

const PageHeader = styled.h1`  
  text-align: center;
  font-size: 1.7rem;
  display: ${props => props.hideMobile ? 'none' : 'block'};  
  @media (${theme.devices.md}) {
    padding-top: 2rem;
    display: ${props => props.hideDesktop ? 'none' : 'block'};
  }
`;

export default function ({ children, hideDesktop, hideMobile }) {
  return (
    <PageHeader 
      hideDesktop={hideDesktop}
      hideMobile={hideMobile}
    >
      {children}
    </PageHeader>
  )
}