import styled from 'styled-components';
import theme from '../themes/default';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

export default function({ children }) {
  return (
    <Grid>
      {children}
    </Grid>
  )
}