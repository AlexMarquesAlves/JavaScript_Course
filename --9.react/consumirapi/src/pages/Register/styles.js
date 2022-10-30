import styled, { css } from "styled-components";

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    label {
      color: ${theme.colors.primaryColor};
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
    }

    input {
      height: 40px;
      font-size: 18px;
      border: 1px solid #ddd;
      padding: 0 10px;
      border-radius: 4px;
      margin-top: 5px;

      &:focus {
        border: 1px solid ${theme.colors.primaryColor};
      }
    }

    
  `}
`;
