import styled from 'styled-components';
import theme from '../themes/default';

export const Title = styled.h1`
  color: ${theme.secondary};
  font-size: 2rem;
  margin: 0.75rem 0 0.1rem 0;
`;

export const PriceWrapper = styled.div`
  font-size: 1.3rem;
  padding-bottom: 0.75rem;
`;

export const Desc = styled.div`
  padding: 0 1rem;
  @media (${theme.devices.md}) {
    padding: 0;
  }
`;

export const ButtonWrapper = styled.div`
  padding-top: 1.5rem;
`;
