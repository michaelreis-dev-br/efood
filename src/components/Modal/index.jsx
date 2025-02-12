import * as S from "./styles";
import { X } from "lucide-react";

const Modal = ({ dish, onClose }) => {
  const handleClickOutside = (e) => {
    if (e.target.classList.contains("modal")) {
      onClose();
    }
  };

  return (
    <S.Container>
      <div className="modal" onClick={handleClickOutside}>
        <div className="modal-body">
          <X className="close-btn" onClick={onClose} />
          <img src={dish.foto} alt={dish.nome} />
          <div className="content">
            <div>
              <h1>{dish.nome}</h1>
              <p>{dish.descricao}</p>
              <p>Serve: de {dish.porcao}.</p>
            </div>
            <a>Adicinar ao carrinho - R$ 60,90</a>
          </div>
        </div>
      </div>
    </S.Container>
  );
};

export default Modal;
