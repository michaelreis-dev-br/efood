import { useSelector, useDispatch } from "react-redux";
import { closeCart, removeItem } from "../../store/reducers/cart";
import { formatPrice } from "../../assets/utils/price";
import { EmptyCart } from "./EmptyCart";
import { Trash2 } from "lucide-react";
import * as S from "./styles";

const Cart = () => {
  const { cartIsOpen, items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const showCart = () => {
    dispatch(closeCart());
  };

  const getTotalPrice = () => {
    return items.reduce((acc, item) => {
      return (acc += item.preco);
    }, 0);
  };

  const removeDish = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <S.Cart className={cartIsOpen ? "show-cart" : ""}>
      <div className="overlay" onClick={showCart}></div>
      <aside>
        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <p>{formatPrice(item.preco)}</p>
                    <Trash2 onClick={() => removeDish(item.id)} />
                  </div>
                </li>
              ))}
            </ul>
            <div className="total">
              <div className="total-price">
                <p>Valor Total</p>
                <p>{formatPrice(getTotalPrice())}</p>
              </div>
              <div className="total-btn">
                <button type="button">Ir para a Entrega</button>
                <button type="button" onClick={showCart}>
                  Continuar Comprando
                </button>
              </div>
            </div>
          </>
        )}
      </aside>
    </S.Cart>
  );
};

export default Cart;
