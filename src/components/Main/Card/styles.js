import styled from "styled-components";
import { colors } from "../../../assets/styles";

export const Card = styled.div`
  background-color: #fff;
  border: 1px solid ${colors.primary};
`;

export const Image = styled.div`
  background-size: cover;
  height: 217px;
  position: relative;
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 0.5rem;
`;

export const CardContainer = styled.div`
  padding: 0.5rem;
`;

export const TitleContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const H2 = styled.h2`
  font-size: 1.125rem;
  color: ${colors.primary};
`;

export const ReviewContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 0.2rem;
  justify-content: center;
`;

export const Rating = styled(H2)``;

export const P = styled.p`
  margin: 1rem 0;
  color: ${colors.primary};
  font-size: 0.875rem;
  line-height: 22px;
`;

export const Button = styled.a`
  padding: 0.25rem 0.375rem;
  background-color: ${colors.primary};
  color: ${colors.tertiary};
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 0.875rem;
  display: inline-block;
`;

export const Tag = styled.div`
  padding: 0.25rem 0.375rem;
  background-color: ${colors.primary};
  color: ${colors.tertiary};
  border: none;
  font-weight: 700;
  font-size: 0.875rem;
  display: inline-block;
`;
