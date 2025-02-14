import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./assets/styles";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Cart from "./components/Cart";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil/:id" element={<Perfil />} />
        </Routes>
        <Cart />
      </Router>
    </Provider>
  );
}

export default App;
