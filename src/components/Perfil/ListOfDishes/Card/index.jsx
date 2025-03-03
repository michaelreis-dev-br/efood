import { useDispatch } from "react-redux";
import { open } from "../../../../store/reducers/modal";
import * as S from "./styles";

const Card = ({ dish }) => {
  const dispatch = useDispatch();

  const showModal = () => {
    dispatch(open(dish));
  };

  return (
    <S.Card>
      <img src={dish.foto} alt={dish.nome} />
      <h2>{dish.nome}</h2>
      <p>{dish.descricao}</p>
      <button onClick={showModal}>Mais detalhes</button>
    </S.Card>
  );
};

export default Card;
