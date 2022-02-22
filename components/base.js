import { createGlobalStyle } from 'styled-components';
import theme from '../themes/default';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.primary};
    color: ${theme.text};
    font-family: ${theme.fontSource};
  }  
`