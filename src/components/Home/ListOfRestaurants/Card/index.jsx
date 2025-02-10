import { Star } from "lucide-react";
import * as S from "./styles";

const Card = ({
  id,
  name,
  image,
  type,
  rating,
  path,
  description,
  featured,
}) => {
  const isFeatured = featured;

  return (
    <S.Card key={id}>
      <S.Image style={{ backgroundImage: `url(${image})` }}>
        <S.ImageContainer>
          {isFeatured ? (
            <>
              <S.Tag>Destaque da Semana</S.Tag>
              <S.Tag>{type}</S.Tag>
            </>
          ) : (
            <S.Tag>{type}</S.Tag>
          )}
        </S.ImageContainer>
      </S.Image>
      <S.CardContainer>
        <S.TitleContainer>
          <S.H2>{name}</S.H2>
          <S.ReviewContainer>
            <S.Rating>{rating}</S.Rating>
            <Star color="#ffb930" fill="#ffb930" size={20} />
          </S.ReviewContainer>
        </S.TitleContainer>
        <S.P>{description}</S.P>
        <S.Button to={path}>Saiba mais</S.Button>
      </S.CardContainer>
    </S.Card>
  );
};

export default Card;
