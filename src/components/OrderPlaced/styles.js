import styled from "styled-components";
import { COLORS } from "../../assets/styles";

export const OrderPlaced = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
  justify-content: space-between;

  h2 {
    color: ${COLORS.SECONDARY};
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  p {
    color: ${COLORS.SECONDARY};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  button {
    border: none;
    color: ${COLORS.PRIMARY};
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 700;
    padding: 4px 0;
  }
`;
