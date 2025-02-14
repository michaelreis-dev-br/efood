import { BarLoader } from "react-spinners";
import Logo from "../Logo";
import * as S from "./styles";

const Loader = () => {
  return (
    <S.Loader>
      <Logo />
      <BarLoader color="#e66767" width={100} />
    </S.Loader>
  );
};

export default Loader;
