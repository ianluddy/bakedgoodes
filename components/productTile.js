import styled from 'styled-components';
import theme from '../themes/default';
import Grid from './grid';
import Image from './image';
import Button from './button';
import Link from 'next/link';

const Wrapper = styled.div`
  font-family: ${theme.fontMontserrat};
  padding: 0.5rem;
  position: relative;
  cursor: pointer;
  transition: transform ${theme.transitionTime};
  img {
    border-radius: ${theme.borderRadius};
  }
  @media (${theme.devices.sm}) {
    :hover {
      transform: scale(1.03);
    }
  }
`;

const Meta = styled.div`
  position: relative;
  padding: 0.25rem 0 0.5rem 0;
  button {
    position: absolute;
    top: -2.5rem;
    right: 0.5rem;
  }  
`;

const Title = styled.div`
  margin: 0;
  text-align: left;
  color: ${theme.midGrey};
  font-size: ${props => props.large ? '1.5rem' : '1.2rem' };
`;

export default function({ 
    id, title, caption, desc, src, meta, path, large
  }) {
  return (
    <Link href={path}>
      <Wrapper>
        <Image 
          src={src}
          alt={title}
          title={title}
        />
        <Meta>
          <Button href="#" text="Order" secondary/>
          <Title large={large}>
            {title}
          </Title>
        </Meta>
      </Wrapper>
    </Link>
  )
}