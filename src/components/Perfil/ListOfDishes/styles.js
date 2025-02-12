import styled from "styled-components";
import { COLORS } from "../../../assets/styles";

export const Main = styled.main`
  padding: 2.5rem 1rem;
  background-color: ${COLORS.TERTIARY};

  .container {
    gap: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0 auto;
    max-width: 1024px;
    width: 100%;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;
