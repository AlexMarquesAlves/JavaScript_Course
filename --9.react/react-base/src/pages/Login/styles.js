import styled, { css } from "styled-components";

export const Title = styled.h1`
  ${({ theme }) => css`
    background: green;

    small {
      font-size: 12pt;
      margin-left: 15px;
      color: #999;
    }
  `}
`;

export const Paragrafo = styled.p`
  ${({ theme }) => css`
    font-size: 2rem;
  `}
`;
