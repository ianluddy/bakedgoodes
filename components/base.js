import { createGlobalStyle } from 'styled-components';
import theme from '../themes/default';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.pink};
    color: ${theme.white};
    font-family: ${theme.fontSource};
  }  
`