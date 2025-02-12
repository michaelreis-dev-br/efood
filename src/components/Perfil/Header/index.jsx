import { Link } from "react-router-dom";
import { Undo2, ShoppingCart } from "lucide-react";
import Logo from "../../Logo";
import * as S from "./styles.js";

const Header = ({ restaurant }) => {
  const mobile = true;

  return (
    <S.Header>
      <div className="container">
        <Link to="/" title="Voltar" className="nav-item">
          {mobile ? (
            <Undo2 />
          ) : (
            <>
              <Undo2 /> Restaurantes
            </>
          )}
        </Link>
        <Logo />
        <div className="nav-item end">
          {mobile ? (
            <>
              0 <ShoppingCart />
            </>
          ) : (
            <>0 produtos no carrinho</>
          )}
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
