import * as S from "./styles";
import logo from "../../assets/images/logo.jpg";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { colors } from "../../assets/styles";

const Footer = () => (
  <S.Footer>
    <S.Container>
      <img src={logo} alt="Efood" width={125} />
      <S.List>
        <S.ListItem>
          <S.ListLink>
            <Instagram color={colors.secondary} />
          </S.ListLink>
        </S.ListItem>
        <S.ListItem>
          <S.ListLink>
            <Facebook color={colors.secondary} />
          </S.ListLink>
        </S.ListItem>
        <S.ListItem>
          <S.ListLink>
            <Twitter color={colors.secondary} />
          </S.ListLink>
        </S.ListItem>
      </S.List>
    </S.Container>
    <S.P>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade
      <br /> dos produtos é toda do estabelecimento contratado.
    </S.P>
  </S.Footer>
);

export default Footer;
