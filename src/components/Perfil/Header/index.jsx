import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { open } from "../../../store/reducers/offcanvas.js";
import { Undo2, ShoppingCart } from "lucide-react";
import Logo from "../../Logo";
import * as S from "./styles";

const Header = ({ restaurant }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const openCart = () => {
    dispatch(open("Cart"));
  };

  return (
    <S.Header>
      <div className="container">
        <Link to="/" title="Voltar" className="nav-item">
          <Undo2 />
        </Link>
        <Logo />
        <div className="nav-item end">
          {items.length} <ShoppingCart onClick={openCart} />
        </div>
      </div>
      <div
        className="banner"
        style={{ backgroundImage: `url(${restaurant.capa})` }}
      >
        <div>
          <p>{restaurant.tipo}</p>
          <h2>{restaurant.titulo}</h2>
        </div>
      </div>
    </S.Header>
  );
};

export default Header;
