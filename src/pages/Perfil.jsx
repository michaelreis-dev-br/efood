import { useParams } from "react-router-dom";
import { useGetDishesQuery } from "../services/api";
import Loader from "../components/Loader";
import Header from "../components/Perfil/Header";
import ListOfDishes from "../components/Perfil/ListOfDishes";
import Footer from "../components/Footer";

const Perfil = () => {
  const { id } = useParams();
  const { data: restaurant, isLoading, error } = useGetDishesQuery(id);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Erro ao carregar os pratos.</div>;
  }

  return (
    <>
      <Header restaurant={restaurant} />
      <ListOfDishes dishes={restaurant.cardapio} />
      <Footer />
    </>
  );
};

export default Perfil;
