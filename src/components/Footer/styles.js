import styled from "styled-components";
import { COLORS } from "../../assets/styles";

export const Footer = styled.footer`
  background-color: ${COLORS.SECONDARY};
  height: 18rem;
  padding: 2.5rem 1rem;

  div {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    height: 100%;

    ul {
      display: flex;
      gap: 0.5rem;

      li {
        a {
          align-items: center;
          background-color: ${COLORS.PRIMARY};
          border-radius: 50%;
          display: flex;
          justify-content: center;
          padding: 0.5rem;

          svg {
            color: ${COLORS.SECONDARY};
          }
        }
      }
    }

    p {
      color: ${COLORS.PRIMARY};
      font-size: 0.625rem;
      text-align: center;
    }
  }
`;
