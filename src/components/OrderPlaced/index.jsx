import { useDispatch } from "react-redux";
import { close } from "../../store/reducers/offcanvas";
import { clear } from "../../store/reducers/cart";
import * as S from "./styles";

const OrderPlaced = ({ data }) => {
  const dispatch = useDispatch();
  const closeOffcanvas = () => {
    dispatch(close());
    dispatch(clear());
  };

  return (
    <S.OrderPlaced>
      <div>
        <h2>Pedido realizado - {data.orderId}</h2>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </p>
        <p>
          Lembramos que nossos entregadores não estão autorizados a cobrar
          extras.
        </p>
        <p>
          Por favor, higienize suas mãos após o recebimento do pedido para sua
          segurança.
        </p>
        <p>
          Esperamos que desfrute de uma deliciosa experiência gastronômica. Bom
          apetite!
        </p>
      </div>
      <button type="button" onClick={closeOffcanvas}>
        Concluir
      </button>
    </S.OrderPlaced>
  );
};

export default OrderPlaced;
