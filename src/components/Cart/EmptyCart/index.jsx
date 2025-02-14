import image from "../../../assets/images/empty-cart.png";
import * as S from "./styles";

export const EmptyCart = () => (
  <S.EmptyCart>
    <img src={image} alt="Carrinho vazio" />
    <h3>Seu carrinho está vazio...</h3>
    <p>Adicione alguns itens ao carrinho para continuar a comprar</p>
  </S.EmptyCart>
);
