import styled from 'styled-components';
import theme from '../themes/default';
import FadeIn from 'react-fade-in';

const Grid = styled(FadeIn)`
  flex-wrap: wrap;
  margin-top: 0;
  display: ${props => props.hide ? 'none' : 'flex'};  
  @media (${theme.devices.md}) {
    margin-top: 2rem;
  }
  > div {
    flex-grow: 1;
    width: calc(100%);
  }
`;

const Default = styled(Grid)`
  > div {
    @media (${theme.devices.sm}) {
      width: calc(50%);
      max-width: calc(50%);
    }
      
    @media (${theme.devices.md}) {
      width: calc(33%);
      max-width: calc(33%);
    }
  }
`;

const Right = styled(Grid)`
  > div:first-of-type {
    @media (${theme.devices.sm}) {
      width: calc(50%);
      max-width: calc(50%);
    }
      
    @media (${theme.devices.md}) {
      width: calc(33%);
      max-width: calc(33%);
    }
  }
  
  > div:last-of-type {
    @media (${theme.devices.sm}) {
      width: calc(50%);
      max-width: calc(50%);
    }
      
    @media (${theme.devices.md}) {
      width: calc(66%);
      max-width: calc(66%);
    }
  }
`;

const Split = styled(Grid)`
  > div {
    @media (${theme.devices.md}) {
      width: calc(50%);
      max-width: calc(50%);
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

export const GridSplit = ({ children, hide }) => {
  return (
    <Split delay="120" hide={hide}>
      {children}
    </Split>
  )
}
