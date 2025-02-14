import styled from "styled-components";
import { COLORS } from "../../assets/styles";

export const Modal = styled.div`
  position: fixed;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  height: 100dvh;
  width: 100dvw;
  background-color: rgba(0, 0, 0, 0.8);

  &.show-modal {
    display: flex;
  }

  .modal-body {
    background-color: ${COLORS.PRIMARY};
    display: flex;
    gap: 1.5rem;
    padding: 2rem;
    position: relative;
    width: 75%;
    max-width: 1024px;

    @media (max-width: 768px) {
      flex-direction: column;
      width: 87.5%;
      max-width: 312px;
    }

    .close-btn {
      color: #fff;
      cursor: pointer;
      position: absolute;
      right: 0.5rem;
      top: 0.5rem;
    }

    img {
      width: 100%;
      max-width: 280px;
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    h1 {
      color: #fff;
      font-size: 18px;
      font-weight: 900;
      margin-bottom: 1rem;
    }

    p {
      color: #fff;
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      margin-bottom: 1rem;
    }

    button {
      background-color: ${COLORS.SECONDARY};
      color: ${COLORS.PRIMARY};
      font-weight: 700;
      padding: 4px 8px;
      width: fit-content;
      border: none;
    }
  }
`;
