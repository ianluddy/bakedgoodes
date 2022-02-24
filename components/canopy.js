import styled from 'styled-components';
import theme from '../themes/default';

const Canopy = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
`;

export default function () {
  return (
    <Canopy>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="50">
        <defs>
          <pattern id="bg" patternUnits="userSpaceOnUse" width="100" height="50">
            <circle stroke={theme.shadow} stroke-width="2" cx="50" cy="-35" fill={theme.primary} r="60"></circle>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bg)"/>
      </svg>
    </Canopy>     
  )
}