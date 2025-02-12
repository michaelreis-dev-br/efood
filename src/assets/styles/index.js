import { createGlobalStyle } from "styled-components";
import BG_HEADER_IMG from "../images/bg-header.jpg";

export const COLORS = {
  PRIMARY: "#e66767",
  SECONDARY: "#ffebd9",
  TERTIARY: "#fff8f2",
};

export const BG_IMG = {
  HEADER: BG_HEADER_IMG,
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
    text-decoration: none;
    margin: 0;
    padding: 0;
  }
`;
