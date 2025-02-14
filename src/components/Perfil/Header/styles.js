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
    padding: 2.5rem 1rem;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;

    .nav-item {
      font-size: 18px;
      font-weight: 900;
      display: flex;
      align-items: center;
      width: fit-content;
      gap: 0.5rem;
      color: ${COLORS.PRIMARY};
      cursor: pointer;
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
    height: 280px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    div {
      width: 100%;
      height: 100%;
      max-width: 1024px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 2rem 1rem;

      h2 {
        font-weight: 900;
        font-size: 2rem;
        color: #fff;
      }

      p {
        font-weight: 100;
        font-size: 2rem;
        color: #fff;
      }
    }
  }
`;
