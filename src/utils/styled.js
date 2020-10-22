import { keyframes, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap');
  * {
    box-sizing: border-box;
  }
  :root {
    --blue: #3F51B5;
    --white: #ffffff;
    --light-grey: #F2F2F2;
    --white-text: #ffffff;
    --black-text: #222;
  }
  body, html {
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
    font-smoothing: antialiased;
    background: #222;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: NunitoSans, sans-serif;
  }
  p, label, span, li {
    font-family: Roboto, sans-serif;
    font-weight: 300;
  }
`;

/**
 * FadeIn Animation
 */
export const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;