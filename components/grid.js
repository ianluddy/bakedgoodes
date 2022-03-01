import styled from 'styled-components';
import theme from '../themes/default';
import FadeIn from 'react-fade-in';

const Grid = styled(FadeIn)`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  
  > div {
    flex-grow: 1;
    width: calc(100%);
    padding: 1rem 0;
    
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

export default function({ children }) {
  return (
    <Grid delay="120">
      {children}
    </Grid>
  )
}