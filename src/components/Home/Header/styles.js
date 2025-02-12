import styled from "styled-components";
import { COLORS, BG_IMG } from "../../../assets/styles";

export const Header = styled.header`
  align-items: center;
  background-image: url(${BG_IMG.HEADER});
  display: flex;
  flex-direction: column;
  height: 22.5rem;
  justify-content: space-between;
  padding: 2.5rem 1rem;

  h1 {
    color: ${COLORS.PRIMARY};
    font-size: 2.25rem;
    font-weight: 900;
    text-align: center;
  }
`;
