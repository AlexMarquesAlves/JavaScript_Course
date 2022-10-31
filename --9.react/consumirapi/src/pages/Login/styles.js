import styled, { css } from "styled-components";

export const Form = styled.form`
  ${({ theme }) => css`
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    input {
      margin-bottom: 20px;
      height: 40px;
      padding: 0 10px;
      border-radius: 4px;
      border: 1px solid #ddd;
    }
  `}
`;
