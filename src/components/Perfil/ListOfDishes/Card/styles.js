import styled from "styled-components";
import { COLORS } from "../../../../assets/styles";

export const Card = styled.div`
  background-color: ${COLORS.PRIMARY};
  display: flex;
  flex-direction: column;
  padding: 0.5rem;

  img {
    margin-bottom: 0.5rem;
    width: 100%;
    height: 167px;
    object-fit: cover;
  }

  h2 {
    color: ${COLORS.SECONDARY};
    font-size: 1.125rem;
  }

  p {
    color: ${COLORS.SECONDARY};
    flex-grow: 1;
    font-size: 0.875rem;
    line-height: 22px;
    margin: 0.5rem 0;
  }

  button {
    background-color: ${COLORS.SECONDARY};
    border: none;
    color: ${COLORS.PRIMARY};
    font-size: 0.875rem;
    font-weight: 700;
    padding: 0.25rem 0.375rem;
    cursor: pointer;
  }
`;
