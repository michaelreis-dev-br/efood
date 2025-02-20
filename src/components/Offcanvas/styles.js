import styled from "styled-components";
import { COLORS } from "../../assets/styles";

export const Offcanvas = styled.div`
  width: 100%;
  height: 100dvh;
  position: fixed;
  top: 0;
  left: 0;
  display: none;

  &.open {
    display: flex;
  }

  aside {
    background-color: rgb(0, 0, 0, 0.8);
    flex-grow: 1;
  }

  .container {
    padding: 1rem;
    width: 25rem;
    background-color: ${COLORS.PRIMARY};
  }
`;
