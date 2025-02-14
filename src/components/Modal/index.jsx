import { useDispatch, useSelector } from "react-redux";
import { addItem, openCart } from "../../store/reducers/cart";
import { closeModal } from "../../store/reducers/modal";
import { formatPrice } from "../../assets/utils/price";
import { X } from "lucide-react";
import * as S from "./styles";

const Modal = () => {
  const dispatch = useDispatch();
  const { modalIsOpen, selectedDish: dish } = useSelector(
    (state) => state.modal
  );

  const addToCart = () => {
    dispatch(addItem(dish));
    dispatch(openCart());
    dispatch(closeModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <S.Modal
      className={modalIsOpen ? "show-modal" : ""}
      onClick={handleCloseModal}
    >
      <div className="modal-body" onClick={(e) => e.stopPropagation()}>
        <X className="close-btn" onClick={handleCloseModal} />
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
