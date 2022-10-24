import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    // Reset CSS
    * {
      margin: 0;
      padding: 0;
      outline: 0;
      // box-sizing: border-box;
    }

    body {
      background-color: ${theme.colors.primaryDarkColor};
      color: ${theme.colors.primaryColor};
    }

    button {
      cursor: pointer;
      background: ${theme.colors.primaryColor};
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      font-weight: 700;
    }

    html, body{
      height: 100%
    }

    a {
      text-decoration: none;
    }

    ul {
      list-style: none;
    }
    // Reset CSS
    :root {
      font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
      font-size: 1rem;
      line-height: 24px;
      font-weight: 400;

      color-scheme: light dark;
      color: rgba(255, 255, 255, 0.87);
      background-color: #0a4f70;

      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-text-size-adjust: 100%;
    }
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    max-width:360px;
    background: #0a4f70;
    margin: 30px auto;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  `}
`;
