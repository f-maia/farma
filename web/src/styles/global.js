import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

import 'react-confirm-alert/src/react-confirm-alert.css';

import stylesConstants from './constants';

export default createGlobalStyle`
  ${normalize()}

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    position: fixed;

    height: 100vh;
    width: 100vw;

    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 13px 'Noto Sans', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  h1 {
    font-size: 3.3rem;
    line-height: 5.1rem;
    color: ${stylesConstants.colors.dark_blue};
    font-weight: 400;
    display: none;
  }

  h2 {
    font-size: 2.6rem;
    line-height: 2.7rem;
    color: ${stylesConstants.colors.dark_blue};
    font-weight: 400;
    padding: ${stylesConstants.paddings.paddin_middle};
  }

  h3 {
    font-size: 2rem;
    line-height: 2.6rem;
    font-weight: normal;
    color: ${stylesConstants.colors.dark_grey};
    padding: ${stylesConstants.paddings.paddin_middle};
  }

  p {
    margin: 0 auto;
    padding: ${stylesConstants.paddings.paddin_middle};
    width: 90%;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: ${stylesConstants.colors.dark_grey};
  }

  h4 {
    font-size: 1.3rem;
    line-height: 1.375rem;
    font-weight: normal;
    color: ${stylesConstants.colors.middle_grey};
  }

  button:disabled {
    background-color: ${stylesConstants.colors.middle_grey} !important;
    cursor: default;
  }
`;
