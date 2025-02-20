import { useSelector } from "react-redux";
import Card from "./Card";
import Modal from "../../Modal";
import * as S from "./styles";

const ListOfDishes = ({ dishes }) => {
  const { isOpen, selectedDish } = useSelector((state) => state.modal);

  return (
    <S.Main>
      <div className="container">
        {dishes.map((dish) => (
          <Card key={dish.id} dish={dish} />
        ))}
      </div>
      {isOpen && selectedDish && <Modal />}
    </S.Main>
  );
};

export default ListOfDishes;
