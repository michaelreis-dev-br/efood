import styled from "styled-components";
import { COLORS } from "../../assets/styles";

export const Cart = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;

  ul {
    overflow-y: auto;
  }

  li {
    background-color: ${COLORS.SECONDARY};
    color: ${COLORS.PRIMARY};
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    position: relative;

    &:last-child {
      margin-bottom: 0;
    }

    img {
      width: 100%;
      max-width: 80px;
    }

    h3 {
      font-weight: 900;
      font-size: 1.125rem;
      margin-bottom: 1rem;
    }

    p {
      font-weight: 400;
      font-size: 1rem;
    }

    svg {
      bottom: 0.5rem;
      color: ${COLORS.PRIMARY};
      height: 1rem;
      position: absolute;
      right: 0.5rem;
      width: 1rem;
      cursor: pointer;
    }
  }

  .price-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    p {
      color: ${COLORS.SECONDARY};
      font-size: 1rem;
      font-weight: 700;
    }
  }

  .btn-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  button {
    color: ${COLORS.PRIMARY};
    font-size: 0.875rem;
    font-weight: 700;
    border: none;
    padding: 4px 0;
    cursor: pointer;
  }
`;
