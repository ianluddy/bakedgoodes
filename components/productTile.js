import styled from 'styled-components';
import theme from '../themes/default';
import Grid from './grid';
import Image from './image';
import Button from './button';
import Cta from './cta';
import Link from 'next/link';

const Wrapper = styled.div`
  padding: 0.5rem;
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
  padding: 0.25rem 0 0.5rem 0;
  button {
    position: absolute;
    top: -2.5rem;
    right: 0.5rem;
  }  
`;

const Title = styled.h4`
  margin: 0;
  text-align: left;
  font-size: ${props => props.large ? '1.5rem' : '1.2rem' };
`;

export const Small = (props) => {
  return (
    <Link href={props.path}>
      <Wrapper>
        <Image 
          src={props.src}
          alt={props.title}
          title={props.title}
          borderRadius
        />
        <Meta>
          <Button text={props.buttonText} secondary/>
          <Title large={props.large}>
            {props.title}
          </Title>
        </Meta>
      </Wrapper>
    </Link>
  )
}

export const Large = (props) => {
  return (
    <Wrapper>
      <Link href={props.path}>
        <Image 
          padding={'0.5rem'}
          alt={props.title}
          title={props.title}
          {...props}
        />
      </Link>
      <Cta
        headline={props.title}
        body={props.body}
        buttonText={props.buttonText}
        buttonLink={props.path}
        small
      />
    </Wrapper>
  );
}