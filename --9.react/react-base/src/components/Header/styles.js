import styled, { css } from "styled-components";

export const Nav = styled.nav`
  ${({ theme }) => css`
    background: ${theme.colors.primaryColor};
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      color: rgba(255, 255, 255, 0.87);

    }
  `}
`;
