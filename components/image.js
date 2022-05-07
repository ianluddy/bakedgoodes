import styled from 'styled-components';
import theme from '../themes/default';
import ExportedImage from 'next-image-export-optimizer';

const Wrapper = styled.div`
  padding: ${(props) => props.padding || 'unset'};
  > span {
    position: static !important;
  }
  img {
    width: auto !important;
    height: auto !important;
    position: static !important;
    border-radius: ${(props) => props.borderRadius && theme.borderRadius};
  }
`;

export default function ({ src, alt, width, borderRadius, padding }) {
  return (
    <Wrapper borderRadius={borderRadius} padding={padding}>
      <ExportedImage
        src={src}
        alt={alt}
        width={width}
        layout="fill"
        objectFit="cover"
      />
    </Wrapper>
  );
}
