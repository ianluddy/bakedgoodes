import styled from 'styled-components';
import theme from '../themes/default';
import FadeIn from 'react-fade-in';

const Grid = styled(FadeIn)`
  flex-wrap: wrap;
  display: ${props => props.hide ? 'none' : 'flex'};
  text-align: ${props => props.align || 'initial'};
  > div {
    flex-grow: 1;
    width: 100%;
    max-width: 100%;
    @media (${theme.devices.sm}) {
      width: ${props => props.sm || '100%'};
      max-width: ${props => props.sm || '100%'};
    }
    @media (${theme.devices.md}) {
      width: ${props => props.md || '100%'};
      max-width: ${props => props.md || '100%'};
    }
    @media (${theme.devices.lg}) {
      width: ${props => props.lg || '100%'};
      max-width: ${props => props.lg || '100%'};
    }
  }
  p {
    margin-left: ${props => props.align == 'center' && 'auto'};
    margin-right: ${props => props.align == 'center' && 'auto'};
    max-width: ${props => props.align == 'center' && theme.textMaxWidth};
  }
`;

export default function(props) {
  return (
    <Grid delay="120" {...props}>
      {props.children}
    </Grid>
  )
}
