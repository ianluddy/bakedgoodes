import styled from 'styled-components';
import theme from '../themes/default';

export const Title = styled.h1`
  color: ${theme.secondary};
  margin: 0.75rem 0 0.1rem 0;
`;

export const ImageWrapper = styled.div`
  width: 100vw;
  position: relative;
  right: 1rem;
  padding-bottom: 1rem;
  @media (${theme.devices.md}) {
    img {
      border-radius: ${theme.borderRadius};
    }
    width: initial;
    position: static;
    padding: 1rem;
  }
`;

export const PriceWrapper = styled.div`
  color: ${theme.secondary};
  font-size: 1.8rem;
  padding-bottom: 0.75rem;
`;

export const Desc = styled.div`
  padding: 0 1rem;
  p {
    text-align: center;
    margin: 0 auto;
    padding: 1rem 2rem;
  }
  @media (${theme.devices.md}) {
    padding: 0;
  }
`;

export const ButtonWrapper = styled.div`
  padding-top: 1.5rem;
`;

export const MetaWrapper = styled.div`
  text-align: center;
  @media (${theme.devices.md}) {
    padding: 1rem;
  }
`;
