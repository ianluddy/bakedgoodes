import styled from 'styled-components';

import ExportedImage from "next-image-export-optimizer";

const Wrapper = styled.div`
  padding: ${props => props.padding || 'unset'};
  > span {
    position: static !important;
  }
  img {
    width: auto !important;
    height: auto !important;
    position: static !important;
  }
`;

export default function (props) {
  return (
    <Wrapper {...props}>
      <ExportedImage 
        src={props.src}
        alt={props.alt}
        width={props.width}
        layout="fill"
        objectFit="cover"
      />
    </Wrapper>
  )
}