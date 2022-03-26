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

const Title = styled.h2`
  margin: 0;
  text-align: left;
  color: ${theme.secondary};
  letter-spacing: 0.03rem;
`;

const Caption = styled.div`
  text-align: left;
  font-size: 1rem;
`;

export default function({ id, title, caption, desc, src, meta, path, orderButton }) {
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
            orderButton && <Button href="#" text="Order" secondary/>
          }
          <Title>
            {title}
          </Title>
          <Caption>
            {caption}
          </Caption>
        </Meta>
      </Wrapper>
    </Link>
  )
}