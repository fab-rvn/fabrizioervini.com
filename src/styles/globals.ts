import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  @font-face {
    font-family: Lato, sans-serif;
    font-style: normal;
    font-display: fallback;
    src: url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');
  }
  @font-face {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-display: fallback;
    src: url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500&display=swap');
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    line-height: 1.5;
    transition: all 1s ease;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
 }
  ::-webkit-scrollbar {
    display: none;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: Lato, sans-serif;
  }
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
