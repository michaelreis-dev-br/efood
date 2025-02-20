import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./assets/styles";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import OffcanvasController from "./components/Offcanvas/controler";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <OffcanvasController />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil/:id" element={<Perfil />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
