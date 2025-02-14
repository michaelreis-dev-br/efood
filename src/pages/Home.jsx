import { useGetRestaurantsQuery } from "../services/api";
import Loader from "../components/Loader";
import Header from "../components/Home/Header";
import ListOfRestaurants from "../components/Home/ListOfRestaurants";
import Footer from "../components/Footer";

const Home = () => {
  const { data: restaurants, isLoading, error } = useGetRestaurantsQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Erro ao carregar os restaurantes.</div>;
  }

  return (
    <>
      <Header />
      <ListOfRestaurants restaurants={restaurants} />
      <Footer />
    </>
  );
};

export default Home;
