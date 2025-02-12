import * as S from "./styles";

const Card = ({ name, image, description, showModal }) => {
  return (
    <S.Card>
      <img src={image} />
      <h2>{name}</h2>
      <p>{description}</p>
      <button onClick={showModal}>Mais detalhes</button>
    </S.Card>
  );
};

export default Card;
