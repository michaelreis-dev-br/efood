import styled from "styled-components";
import { COLORS } from "../../assets/styles";

export const Container = styled.div`
  .modal {
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    height: 100dvh;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100dvw;

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

      a {
        background-color: ${COLORS.SECONDARY};
        color: ${COLORS.PRIMARY};
        font-weight: 700;
        padding: 4px 8px;
        text-decoration: none;
        width: fit-content;
      }
    }
  }
`;
