import { useDispatch, useSelector } from "react-redux";
import { add } from "../../store/reducers/cart";
import { open } from "../../store/reducers/offcanvas";
import { close } from "../../store/reducers/modal";
import { formatPrice } from "../../assets/utils/price";
import { X } from "lucide-react";
import * as S from "./styles";

const Modal = () => {
  const dispatch = useDispatch();
  const { isOpen, selectedDish: dish } = useSelector((state) => state.modal);

  const addToCart = () => {
    dispatch(add(dish));
    dispatch(open("Cart"));
    dispatch(close());
  };

  const closeModal = () => {
    dispatch(close());
  };

  return (
    <S.Modal className={isOpen ? "show-modal" : ""} onClick={closeModal}>
      <div className="modal-body" onClick={(e) => e.stopPropagation()}>
        <X className="close-btn" onClick={closeModal} />
        <img src={dish.foto} alt={dish.nome} />
        <div className="content">
          <div>
            <h1>{dish.nome}</h1>
            <p>{dish.descricao}</p>
            <p>Serve: {dish.porcao}.</p>
          </div>
          <button onClick={addToCart}>
            Adicionar ao carrinho: {formatPrice(dish.preco)}
          </button>
        </div>
      </div>
    </S.Modal>
  );
};

export default Modal;
