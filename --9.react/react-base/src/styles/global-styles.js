import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    // Reset CSS
    * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
      font-size: 1rem;
      line-height: 24px;
      font-weight: 400;
      background-color: ${theme.colors.primaryDarkColor};
      color: ${theme.colors.primaryColor};
    }

    html, body, #root {
    height: 100%;
    }

    button {
      cursor: pointer;
      background: ${theme.colors.primaryColor};
      border: none;
      color: #fff;
      padding: 10px 20px;
      border-radius: 4px;
      font-weight: 700;
    }

    a {
      text-decoration: none;
      color: ${theme.colors.primaryColor};
    }

    ul {
      list-style: none;
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
