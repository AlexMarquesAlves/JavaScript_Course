import "react-toastify/dist/ReactToastify.css";
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
      color: ${theme.colors.primaryDarkColor};
    }

    html, body, #root {
    height: 100%;
    }

    button {
      cursor: pointer;
      background: ${theme.colors.primaryColor};
      border: none;
      color: #c1c1c1;
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

    body .Toastify .Toastify__toast-container .Toastify__toast--success {
      background: ${theme.colors.successColor}
    }

    body .Toastify .Toastify__toast-container .Toastify__toast--error {
      background: ${theme.colors.errorColor}
    }
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 480px;
    background: #c1c1c1;
    margin: 30px auto;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  `}
`;
