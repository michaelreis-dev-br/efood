import styled from "styled-components";
import { COLORS } from "../../assets/styles";

export const Cart = styled.div`
  display: none;
  height: 100dvh;
  position: fixed;
  top: 0;
  width: 100dvw;

  &.show-cart {
    display: flex;
  }

  .overlay {
    background-color: rgba(0, 0, 0, 0.8);
    flex-grow: 1;
  }

  aside {
    background-color: ${COLORS.PRIMARY};
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 100dvh;
    justify-content: space-between;
    padding: 1rem;
    position: relative;

    @media (max-width: 425px) {
      width: 70%;
    }

    @media (min-width: 426px) and (max-width: 768px) {
      width: 40%;
    }

    @media (min-width: 769px) {
      width: 30%;
      max-width: 25rem;
    }
  }

  ul {
    overflow-y: auto;
  }

  li {
    background-color: ${COLORS.SECONDARY};
    color: ${COLORS.PRIMARY};
    display: flex;
    gap: 0.5rem;
    margin: 0 0.5rem 0.5rem 0;
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

  .total {
    padding-right: 1rem;

    .total-price {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;

      p {
        color: ${COLORS.SECONDARY};
        font-size: 1rem;
        font-weight: 700;
      }
    }

    .total-btn {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      button {
        background-color: ${COLORS.SECONDARY};
        border: none;
        color: ${COLORS.PRIMARY};
        font-weight: 700;
        padding: 0.25rem 0.5rem;
        width: 100%;
      }
    }
  }
`;
