import styled from "styled-components";
import BgHeader from "../../../assets/images/bg-header.jpg";
import BgBanner from "../../../assets/images/banners/bella-trattoria.jpg";
import { colors } from "../../../assets/styles";

export const Header = styled.header`
  background-image: url(${BgHeader});
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  align-items: center;
  display: grid;
  height: 163px;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2.5rem 0;
  width: 1024px;
  margin: 0 auto;

  img {
    display: block;
    margin: 0 auto;
  }
`;

export const P = styled.p`
  font-weight: 900;
  font-size: 1.125rem;
  color: ${colors.primary};
`;

export const Title = styled(P)`
  text-align: start;
`;

export const Cart = styled(P)`
  text-align: end;
`;

export const Banner = styled.div`
  height: 280px;
  width: 100%;
  background-image: url(${BgBanner});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const H2 = styled.h2`
  font-weight: 900;
  font-size: 2rem;
  color: #fff;
`;

export const H3 = styled.h3`
  font-weight: 100;
  font-size: 2rem;
  color: #fff;
`;
