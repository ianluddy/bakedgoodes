import styled from 'styled-components';
import theme from '../themes/default';

const Image = styled.div`
  /* padding: 1rem 1rem 1rem 0; */
  /* margin: 1rem 1rem 1rem 0; */
  margin-right: 0.5rem;
  display: inline-block;
`;

export default function ({ link, src, height }) {
  return (
    <Image>
      <img height={height} src={src} alt="TODO" title="TODO" />
    </Image>
  )
}