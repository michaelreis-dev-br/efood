import logo from "../../../assets/images/logo.jpg";
import * as S from "./styles";
import { Link } from "react-router-dom";

const Header = () => (
  <S.Header>
    <S.Container>
      <S.Title>Restaurante</S.Title>
      <Link to="/">
        <h1>
          <img src={logo} alt="Efood" width={125} to="/" />
        </h1>
      </Link>
      <S.Cart>0 produto(s) no carrinho</S.Cart>
    </S.Container>
    <S.Banner>
      <div className="container">
        <S.H3>Italiana</S.H3>
        <S.H2>La Dolce Vita Trattoria</S.H2>
      </div>
    </S.Banner>
  </S.Header>
);

export default Header;
