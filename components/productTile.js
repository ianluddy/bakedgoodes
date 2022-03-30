import styled from 'styled-components';
import theme from '../themes/default';
import Grid from './grid';
import Image from './image';
import Button from './button';
import Link from 'next/link';

const Wrapper = styled.div`
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
  color: ${theme.secondary};
  letter-spacing: 0.03rem;
  font-size: ${props => props.large ? '1.5rem' : '1.2rem' }
`;

const Caption = styled.div`
  text-align: left;
  font-size: 1rem;
  font-size: ${props => props.large ? '1.1rem' : '0.9rem' }
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
          {
            large && 
              <Button href="#" text="Order" secondary/>
          }
          <Title large={large}>
            {title}
          </Title>
            <Caption large={large}>
              {caption}
            </Caption>
        </Meta>
      </Wrapper>
    </Link>
  )
}