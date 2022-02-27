import styled from 'styled-components';
import theme from '../themes/default';
import Grid from './grid';
import Button from '../components/button';

const ProductWrapper = styled.div`
  position: relative;
  cursor: pointer;
  transition: transform 0.3s;  
  img {
    width: 100%;
  }
  @media (${theme.devices.sm}) {
    :hover {
      transform: scale(1.03);
    }
  }
`

const Meta = styled.div`
  position: relative;
  a {
    position: absolute;
    top: -3rem;
    right: 0.5rem;
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

// TODO image optimisation

export default function({ title, desc, link, src }) {
  return (
    <ProductWrapper>
      <img src={src} alt="TODO" title="TODO"/>
      <Meta>
        <Button href="#" text="Order"/>
        <Title>
          {title}
        </Title>
        <Desc>
          {desc}
        </Desc>
      </Meta>
    </ProductWrapper>
  )
}