import styled from "styled-components";
import { COLORS, BG_IMG } from "../../../assets/styles";

export const Header = styled.header`
  background-image: url(${BG_IMG.HEADER});
  display: flex;
  flex-direction: column;

  .container {
    align-items: center;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    margin: 0 auto;
    max-width: 1024px;
    padding: 2.5rem 1rem;
    width: 100%;

    .nav-item {
      align-items: center;
      color: ${COLORS.PRIMARY};
      cursor: pointer;
      display: flex;
      font-size: 18px;
      font-weight: 900;
      gap: 0.5rem;
      width: fit-content;
    }

    .end {
      justify-self: end;
    }

    img {
      display: block;
      margin: 0 auto;
    }
  }

  .banner {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 280px;
    width: 100%;

    div {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-between;
      margin: 0 auto;
      max-width: 1024px;
      padding: 2rem 1rem;
      width: 100%;

      h2 {
        color: #fff;
        font-size: 2rem;
        font-weight: 900;
      }

      p {
        color: #fff;
        font-size: 2rem;
        font-weight: 100;
      }
    }
  }
`;
