import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const AlunoContainer = styled.div`
  ${({ theme }) => css`
    margin-top: 20px;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 0;
      transition: all 400ms ease-in-out;

      &:hover {
        background: #51c5de;
        border-radius: 0.73rem;
      }

      a {
        svg {
          transition: all 400ms ease-in-out;

          &:hover {
            scale: calc(1.1);
          }
        }
      }
    }

    div + div {
      border-top: 1px solid ${theme.colors.primaryColor};
    }
  `}
`;

export const ProfilePicture = styled.div`
  ${({ theme }) => css`
    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
    }

    svg {
      transition: all 400ms ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    }
  `}
`;

export const NovoAluno = styled(Link)`
  ${({ theme }) => css`
    display: block;
    padding: 20px 0 10px 0;
  `}
`;
