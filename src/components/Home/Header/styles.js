import styled from "styled-components";
import BgHeader from "../../../assets/images/bg-header.jpg";
import { colors } from "../../../assets/styles";

export const Header = styled.header`
  align-items: center;
  background-image: url(${BgHeader});
  display: flex;
  flex-direction: column;
  height: 360px;
  justify-content: space-between;
  padding: 2.5rem 0;
`;

export const H1 = styled.h1`
  font-weight: 900;
  font-size: 2.25rem;
  color: ${colors.primary};
  text-align: center;
`;
