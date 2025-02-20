import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../store/reducers/cart";
import { open, close } from "../../store/reducers/offcanvas";
import { formatPrice } from "../../assets/utils/price";
import { EmptyCart } from "./EmptyCart";
import { Trash2 } from "lucide-react";
import * as S from "./styles";

const Cart = ({ formik }) => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeDish = (id) => {
    dispatch(remove(id));
  };

  const getTotalPrice = () => {
    return items.reduce((acc, item) => {
      return (acc += item.preco);
    }, 0);
  };

  const goToDelivery = () => {
    dispatch(open("Delivery"));
  };

  const closeCart = () => {
    dispatch(close());
  };

  return (
    <S.Cart>
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
          <div>
            <div className="price-container">
              <p>Valor Total</p>
              <p>{formatPrice(getTotalPrice())}</p>
            </div>
            <div className="btn-container">
              <button type="button" onClick={goToDelivery}>
                Ir para a Entrega
              </button>
              <button type="button" onClick={closeCart}>
                Continuar Comprando
              </button>
            </div>
          </div>
        </>
      )}
    </S.Cart>
  );
};

export default Cart;
