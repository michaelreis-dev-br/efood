import Card from "./Cards";
import * as S from "./styles";

const ListOfRestaurants = ({ restaurants }) => (
  <S.ListOfRestaurants>
    <div className="container">
      {restaurants.map((restaurant) => (
        <Card
          key={restaurant.id}
          id={restaurant.id}
          titulo={restaurant.titulo}
          capa={restaurant.capa}
          avaliacao={restaurant.avaliacao}
          descricao={restaurant.descricao}
          destacado={restaurant.destacado}
          tipo={restaurant.tipo}
        />
      ))}
    </div>
  </S.ListOfRestaurants>
);

export default ListOfRestaurants;
