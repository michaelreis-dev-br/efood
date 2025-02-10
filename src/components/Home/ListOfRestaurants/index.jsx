import { Container } from "../../../assets/styles";
import * as S from "./styles";
import Card from "./Card";

import { restaurants } from "../../../assets/utils/restaurants";

const Main = () => {
  return (
    <S.Main>
      <Container>
        {restaurants.map((restaurant) => (
          <Card
            key={restaurant.id}
            name={restaurant.name}
            image={restaurant.image}
            rating={restaurant.rating}
            path={restaurant.path}
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
