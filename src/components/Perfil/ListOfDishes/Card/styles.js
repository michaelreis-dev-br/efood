import styled from "styled-components";
import { colors } from "../../../../assets/styles";

export const Card = styled.div`
  background-color: ${colors.primary};
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.div`
  background-size: cover;
  height: 217px;
  position: relative;
  margin-bottom: 0.5rem;
`;

export const H2 = styled.h2`
  font-size: 1.125rem;
  color: ${colors.secondary};
`;

export const P = styled.p`
  margin: 0.5rem 0;
  color: ${colors.secondary};
  font-size: 0.875rem;
  line-height: 22px;
  flex-grow: 1;
`;

export const Button = styled.a`
  padding: 0.25rem 0.375rem;
  background-color: ${colors.secondary};
  color: ${colors.primary};
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 0.875rem;
  display: block;
`;
