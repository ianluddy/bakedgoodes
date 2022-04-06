import styled from 'styled-components';
import theme from '../themes/default';
import FadeIn from 'react-fade-in';

const Grid = styled(FadeIn)`
  flex-wrap: wrap;
  display: ${props => props.hide ? 'none' : 'flex'};
  text-align: ${props => props.textAlign || 'initial'};
  > div {
    flex-grow: 1;
    width: calc(100%);
  }
`;

const ThreeCol = styled(Grid)`
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

const TwoCol = styled(Grid)`
  > div {
    @media (${theme.devices.md}) {
      width: calc(50%);
      max-width: calc(50%);
    }
  }
`;

export const GridThreeCol = (props) => {
  return (
    <ThreeCol delay="120" {...props}>
      {props.children}
    </ThreeCol>
  )  
}

export const GridTwoCol = (props) => {
  return (
    <TwoCol delay="120" {...props}>
      {props.children}
    </TwoCol>
  )
}
