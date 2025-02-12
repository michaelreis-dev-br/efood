import Logo from "../Logo";
import { Instagram, Facebook, Twitter } from "lucide-react";
import * as S from "./styles";

const Footer = () => (
  <S.Footer>
    <div>
      <Logo />
      <ul>
        <li>
          <a>
            <Instagram />
          </a>
        </li>
        <li>
          <a>
            <Facebook />
          </a>
        </li>
        <li>
          <a>
            <Twitter />
          </a>
        </li>
      </ul>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade
        <br /> dos produtos é toda do estabelecimento contratado.
      </p>
    </div>
  </S.Footer>
);

export default Footer;
