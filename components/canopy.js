import styled from 'styled-components';
import theme from '../themes/default';

const Canopy = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border-top: ${theme.fatBorder} ${theme.primary};
  display: none;
  @media (${theme.devices.md}) {
    display: block;
  }
`;

export default function () {
  return (
    <Canopy/>
  )
}