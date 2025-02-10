import styled from "styled-components";
import { colors } from "../../../assets/styles";

export const Main = styled.main`
  padding: 5rem 0 7.5rem;
  background-color: ${colors.tertiary};
`;

export const Container = styled.div`
  gap: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0 auto;
  max-width: 1024px;
  width: 100%;
`;
