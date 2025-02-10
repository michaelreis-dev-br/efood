import logo from "../../assets/images/logo.jpg";
import * as S from "./styles";

const Header = () => (
  <S.Header>
    <img src={logo} alt="Efood" width={125} />
    <S.H1>
      Viva experiências gastronômicas
      <br />
      no conforto da sua casa
    </S.H1>
  </S.Header>
);

export default Header;
