import styled from 'styled-components';
import theme from '../themes/default';
import Grid from './grid';

const ProductWrapper = styled.div`
  flex-grow: 1;
  width: calc(100%);
  padding: 1rem 0;
  cursor: pointer;
  transition: transform 0.3s;
  img {
    width: 100%;
  }

  @media (${theme.devices.sm}) {
    padding: 1rem;
    width: calc(50% - 2rem);
    :hover {
      transform: scale(1.1);
    }
  }
    
  @media (${theme.devices.md}) {
    width: calc(33% - 2rem);
  }
`

const Title = styled.h2`
  font-weight: bold;
  margin: 0;
  text-align: left;
  color: ${theme.secondary};
  text-transform: uppercase;
  font-size: 1.3rem;
  letter-spacing: 0.03rem;
`;

const Desc = styled.div`
  font-size: 1rem;
  text-align: left;
`;

export default function({ title, desc, link, src }) {
  return (
    <ProductWrapper>
      <img src={src} alt="TODO" title="TODO" />
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
    </ProductWrapper>
  )
}