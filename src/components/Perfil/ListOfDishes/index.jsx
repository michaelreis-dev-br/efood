import * as S from "./styles";
import { pizzas } from "../../../assets/utils/pizzas";
import Card from "./Card";

const Main = () => {
  return (
    <S.Main>
      <S.Container>
        {pizzas.map((pizza) => (
          <Card
            key={pizza.id}
            name={pizza.name}
            image={pizza.image}
            description={pizza.description}
          />
        ))}
      </S.Container>
    </S.Main>
  );
};

export default Main;
