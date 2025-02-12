import styled from "styled-components";
import { COLORS } from "../../../assets/styles";

export const ListOfRestaurants = styled.main`
  padding: 2.5rem 1rem;
  background-color: ${COLORS.TERTIARY};

  .container {
    display: grid;
    gap: 3rem;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    max-width: 1024px;
    width: 100%;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;
