import styled from 'styled-components';
import theme from '../themes/default';
import FadeIn from 'react-fade-in';

const GridWithSidebarWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  > div {
    flex-grow: 1;
  }
  > div:first-of-type {
    width: 100%;
  }
  > div:last-of-type {
    width: 100%;
  }
  @media (${theme.devices.md}) {
    > div:first-of-type {
      width: 25%;
    }
    > div:last-of-type {
      width: 75%;
    }
  }
`;

const Grid = styled(FadeIn)`
  flex-wrap: wrap;
  display: ${(props) => (props.hide ? 'none' : 'flex')};
  text-align: ${(props) => props.align || 'initial'};
  > div {
    flex-grow: 1;
    width: 100%;
    max-width: 100%;
    @media (${theme.devices.sm}) {
      width: ${(props) => props.sm || '100%'};
      max-width: ${(props) => props.sm || '100%'};
    }
    @media (${theme.devices.md}) {
      width: ${(props) => props.md || '100%'};
      max-width: ${(props) => props.md || '100%'};
    }
    @media (${theme.devices.lg}) {
      width: ${(props) => props.lg || '100%'};
      max-width: ${(props) => props.lg || '100%'};
    }
  }
  p {
    margin-left: ${(props) => props.align == 'center' && 'auto'};
    margin-right: ${(props) => props.align == 'center' && 'auto'};
    max-width: ${(props) => props.align == 'center' && theme.textMaxWidth};
  }
`;

export default function (props) {
  return (
    <Grid delay={props.delay || 120} {...props}>
      {props.children}
    </Grid>
  );
}

export const GridWithSidebar = (props) => {
  return (
    <GridWithSidebarWrapper>
      <div>{props.sidebar}</div>
      <div>{props.grid}</div>
    </GridWithSidebarWrapper>
  );
};
