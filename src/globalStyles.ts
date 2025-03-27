import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-gradient: linear-gradient(135deg, #f43630 0%, #ff8674 100%);
    --secondary-gradient: linear-gradient(135deg, #4c47f7 0%, #6fccff 100%);
    --text-light: #ffffff;
    --text-dark: #1a1a1a;
    --text-muted: rgba(0, 0, 0, 0.6);
    --background-light: #ffffff;
    --background-alt: #f8f9fa;
    --primary-color: #f43630;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }
`;

export default GlobalStyles; 