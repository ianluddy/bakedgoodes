import styled from 'styled-components';
import theme from '../themes/default';
import Grid from './grid';
import Image from './image';
import Button from '../components/button';
import Link from 'next/link';

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  transition: transform ${theme.transitionTime};
  @media (${theme.devices.sm}) {
    :hover {
      transform: scale(1.03);
    }
  }
`;

const Meta = styled.div`
  position: relative;
  a {
    position: absolute;
    top: -3rem;
    right: 0.5rem;
  }  
`;

const Title = styled.h2`
  margin: 0;
  text-align: left;
  color: ${theme.secondary};
  font-size: 1.3rem;
  letter-spacing: 0.03rem;
`;

const Caption = styled.div`
  text-align: left;
  font-size: 1rem;
`;

export default function({ id, title, caption, desc, src, meta, path }) {
  return (
    <Link href={path}>
      <Wrapper>
        <Image src={src} alt="TODO" title="TODO"/>
        <Meta>
          <Button href="#" text="Order" secondary/>
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