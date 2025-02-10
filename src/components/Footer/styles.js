import styled from "styled-components";
import { colors } from "../../assets/styles";

export const Footer = styled.footer`
  background-color: ${colors.secondary};
  height: 298px;
  padding: 2.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32.5px;
  justify-content: space-between;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  gap: 0.5rem;
`;

export const ListItem = styled.li``;

export const ListLink = styled.a`
  background-color: ${colors.primary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;

export const P = styled.p`
  color: ${colors.primary};
  font-size: 10px;
  text-align: center;
`;
