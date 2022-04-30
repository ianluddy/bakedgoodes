import styled from 'styled-components';
import theme from '../themes/default';
import Image from './image';

const PolaroidAnchor = styled.a`
  transition: all ${theme.transitionTime};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  background: #ffffff;
  display: inline-block;
  margin: 1rem;
  padding: 15px 15px 30px;
  position: relative;
  z-index: 0;

  ${(props) =>
    props.nozoom ||
    `
    :hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, .7);
      transform: scale(1.9);
      z-index: 10;
    }
  `}
`;

const Polaroid = styled.div`
  z-index: 0;
  display: inline-block;

  :nth-child(even) {
    transform: rotate(2deg);
  }
  :nth-child(odd) {
    transform: rotate(-2deg);
  }
  :nth-child(3n + 3) {
    transform: rotate(1deg);
  }
  :hover {
    z-index: 10;
  }
`;

export default function ({ link, src, height, nozoom }) {
  return (
    <Polaroid>
      <PolaroidAnchor href={link} title="" nozoom={nozoom}>
        <Image height={height} src={src} alt="TODO" title="TODO" />
      </PolaroidAnchor>
    </Polaroid>
  );
}
