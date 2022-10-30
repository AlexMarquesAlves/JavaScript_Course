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


  `}
`;
