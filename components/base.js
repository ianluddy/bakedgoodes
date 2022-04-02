import { createGlobalStyle } from 'styled-components';
import theme from '../themes/default';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.body};
    color: ${theme.text};
    font-family: ${theme.fontSource};
    margin: 0;
    border-bottom: ${theme.fatBorder} ${theme.primary};
    border-top: ${theme.fatBorder} ${theme.primary};
  }}
  h1, h2, h3, h4, h5 {
    font-family: ${theme.fontMontserrat};
    font-weight: 400;
  }
  h1 {
    text-align: center;
    font-size: 1.6em;
    @media (${theme.devices.xs}) {
      font-size: 1.7em;
    }
    @media (${theme.devices.sm}) {
      font-size: 1.8em;
    }
    @media (${theme.devices.md}) {
      font-size: 2em;
    }
  }
  h2 {
    font-size: 1.3em;
    @media (${theme.devices.xs}) {
      font-size: 1.4em;
    }
    @media (${theme.devices.sm}) {
      font-size: 1.5em;
    }
    @media (${theme.devices.md}) {
      font-size: 1.7em;
    }
  }
  p {
    letter-spacing: 0.04em;
    font-weight: 200;
    max-width: ${theme.textMaxWidth};
    @media (${theme.devices.md}) {
      font-size: 1.1em;
    }
  }
  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: ${theme.darkGrey};
  }
  .swiper-pagination-bullet-active {
    background: ${theme.secondary};
  }
  .swiper {
    padding-bottom: 2.5rem;
  }
`;