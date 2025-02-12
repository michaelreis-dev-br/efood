import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Perfil/Header";
import ListOfDishes from "../components/Perfil/ListOfDishes";
import Footer from "../components/Footer";

const Perfil = () => {
  const { id } = useParams();

  const [dishes, setDishes] = useState([]);
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await fetch(
          `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`
        );
        const data = await response.json();
        setRestaurant(data);
        setDishes(data.cardapio);
      } catch (error) {
        alert("Erro ao buscar dados, tente novamente mais tarde.");
      }
    };

    fetchDishes();
  }, [id]);

  return (
    <>
      <Header restaurant={restaurant} />
      <ListOfDishes dishes={dishes} />
      <Footer />
    </>
  );
};

export default Perfil;
