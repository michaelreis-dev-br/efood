import { Container } from "../../assets/styles";
import Card from "./Card";
import * as S from "./styles";

import hiokiSushiImg from "../../assets/images/restaurants/hioki-sushi.jpg";
import bellaTrattoriaImg from "../../assets/images/restaurants/bella-trattoria.jpg";
import cafeDoCentroImg from "../../assets/images/restaurants/cafe-do-centro.jpg";
import laPizzariaImg from "../../assets/images/restaurants/la-pizzaria.jpg";
import burguerManiaImg from "../../assets/images/restaurants/burguer-mania.jpg";
import saborDoBrasilImg from "../../assets/images/restaurants/sabor-do-brasil.jpg";

const Restaurants = [
  {
    id: 1,
    name: "Hioki Sushi",
    image: hiokiSushiImg,
    type: "Japonesa",
    rating: 4.9,
    path: 10,
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
    featured: true,
  },
  {
    id: 2,
    name: "Bella Trattoria",
    image: bellaTrattoriaImg,
    type: "Italiana",
    rating: 4.6,
    path: "12",
    description:
      "A Bella Trattoria oferece uma verdadeira experiência italiana com massas frescas, risotos e pizzas artesanais. Um pedacinho da Itália no seu prato, com ingredientes selecionados e receitas tradicionais.",
    featured: false,
  },
  {
    id: 3,
    name: "Café do Centro",
    image: cafeDoCentroImg,
    type: "Doces & Bolos",
    rating: 4.7,
    path: "15",
    description:
      "O melhor café da cidade! Desfrute de cafés especiais, bolos caseiros e pães fresquinhos em um ambiente aconchegante. Ideal para quem ama um bom café com um toque pessoal.",
    featured: true,
  },
  {
    id: 4,
    name: "La Pizzaria",
    image: laPizzariaImg,
    type: "Pizza",
    rating: 4.4,
    path: "20",
    description:
      "Aqui, a pizza é a estrela! São mais de 30 opções de sabores, incluindo opções vegetarianas e sem glúten. Massa fina e crocante, com molho de tomate fresco e ingredientes de alta qualidade.",
    featured: false,
  },
  {
    id: 5,
    name: "Burguer Mania",
    image: burguerManiaImg,
    type: "Lanches",
    rating: 4.8,
    path: "25",
    description:
      "Os melhores hambúrgueres artesanais da cidade! Ingredientes frescos, pães especiais e uma variedade de acompanhamentos para você montar o seu hambúrguer perfeito.",
    featured: true,
  },
  {
    id: 6,
    name: "Sabor do Brasil",
    image: saborDoBrasilImg,
    type: "Brasileira",
    rating: 4.3,
    path: "30",
    description:
      "Aprecie o melhor da culinária brasileira, com pratos típicos de todas as regiões. Feijoada, moqueca, carne de sol e muito mais, tudo preparado com ingredientes frescos e com aquele toque caseiro.",
    featured: false,
  },
];

const Main = () => {
  return (
    <S.Main>
      <Container>
        {Restaurants.map((restaurant) => (
          <Card
            key={restaurant.id}
            name={restaurant.name}
            image={restaurant.image}
            rating={restaurant.rating}
            url={restaurant.url}
            description={restaurant.description}
            featured={restaurant.featured}
            type={restaurant.type}
          />
        ))}
      </Container>
    </S.Main>
  );
};

export default Main;
