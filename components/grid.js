import styled from 'styled-components';
import theme from '../themes/default';
import FadeIn from 'react-fade-in';

const Grid = styled(FadeIn)`
  flex-wrap: wrap;
  margin-top: 2rem;
  display: ${props => props.hide ? 'none' : 'flex'};
  
  > div {
    flex-grow: 1;
    width: calc(100%);
    padding: 1rem 0;
    
    @media (${theme.devices.sm}) {
      padding: 1rem;
    }
  }
`;

const Default = styled(Grid)`
  > div {
    @media (${theme.devices.sm}) {
      padding: 1rem;
      width: calc(50% - 2rem);
      max-width: calc(50% - 2rem);
    }
      
    @media (${theme.devices.md}) {
      width: calc(33% - 2rem);
      max-width: calc(33% - 2rem);
    }
  }
`;

const Right = styled(Grid)`
  > div:first-of-type {
    @media (${theme.devices.sm}) {
      width: calc(50% - 2rem);
      max-width: calc(50% - 2rem);
    }
      
    @media (${theme.devices.md}) {
      width: calc(33% - 2rem);
      max-width: calc(33% - 2rem);
    }
  }
  
  > div:last-of-type {
    @media (${theme.devices.sm}) {
      width: calc(50% - 2rem);
      max-width: calc(50% - 2rem);
    }
      
    @media (${theme.devices.md}) {
      width: calc(66% - 2rem);
      max-width: calc(66% - 2rem);
    }
  }
`;

export const GridDefault = ({ children, hide }) => {
  return (
    <Default delay="120" hide={hide}>
      {children}
    </Default>
  )  
}

export const GridRight = ({ children, hide }) => {
  return (
    <Right delay="120" hide={hide}>
      {children}
    </Right>
  )
}
