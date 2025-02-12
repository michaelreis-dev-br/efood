import { useState } from "react";
import Card from "./Card";
import Modal from "../../Modal";
import * as S from "./styles";

const ListOfDishes = ({ dishes }) => {
  const [selectedDish, setSelectedDish] = useState(null);

  const moreDetails = (dish) => {
    setSelectedDish(dish);
  };

  const closeModal = () => {
    setSelectedDish(null);
  };

  return (
    <S.Main>
      <div className="container">
        {dishes.map((dish) => (
          <Card
            key={dish.id}
            name={dish.nome}
            image={dish.foto}
            description={dish.descricao}
            showModal={() => moreDetails(dish)}
          />
        ))}
      </div>
      {selectedDish && <Modal dish={selectedDish} onClose={closeModal} />}
    </S.Main>
  );
};

export default ListOfDishes;
