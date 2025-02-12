import { useState, useEffect } from "react";
import Card from "./Cards";
import * as S from "./styles";

const ListOfRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(
          "https://fake-api-tau.vercel.app/api/efood/restaurantes"
        );
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        alert("Erro ao buscar dados, tente novamente mais tarde.");
      }
    };

    fetchRestaurants();
  }, []);

  return (
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
};

export default ListOfRestaurants;
