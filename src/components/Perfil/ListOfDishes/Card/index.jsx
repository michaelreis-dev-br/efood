import * as S from "./styles";

const Card = ({ id, name, image, description }) => {
  return (
    <S.Card key={id}>
      <S.Image style={{ backgroundImage: `url(${image})` }}></S.Image>
      <S.H2>{name}</S.H2>
      <S.P>{description}</S.P>
      <S.Button>Adicionar ao carrinho</S.Button>
    </S.Card>
  );
};

export default Card;
