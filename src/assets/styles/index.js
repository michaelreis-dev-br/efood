import styled, { createGlobalStyle } from "styled-components";

export const colors = {
  primary: "#e66767",
  secondary: "#ffebd9",
  tertiary: "#fff8f2",
};

export const Container = styled.div`
  column-gap: 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(472px, 2fr));
  margin: 0 auto;
  max-width: 1024px;
  row-gap: 3rem;
  width: 100%;
`;

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }
`;
