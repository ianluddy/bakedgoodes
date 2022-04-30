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
  font-size: ${(props) => (props.large ? '1.5rem' : '1.2rem')};
`;

const ImageCTA = styled.div`
  transition: background-color ${theme.transitionTime};
  position: absolute;
  left: 1rem;
  right: 1rem;
  bottom: 0;
  height: 4rem;
  background-color: ${theme.secondary};
  h3 {
    margin: 0;
    padding: 1rem 0;
    color: ${theme.body};
  }
  :hover {
    background-color: ${theme.secondaryLight};
  }
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
          {props.buttonText && <Button text={props.buttonText} secondary />}
          <Title large={props.large}>{props.title}</Title>
        </Meta>
      </Wrapper>
    </Link>
  );
};

export const Large = (props) => {
  return (
    <Wrapper>
      <Link href={props.path}>
        <div>
          <Image
            padding={'0.5rem'}
            alt={props.title}
            title={props.title}
            {...props}
          />
          <ImageCTA>
            <h3>{props.title}</h3>
          </ImageCTA>
        </div>
      </Link>
    </Wrapper>
  );
};

export const LargeWithCTA = (props) => {
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
};
