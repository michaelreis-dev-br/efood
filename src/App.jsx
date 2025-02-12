import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./assets/styles";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil/:id" element={<Perfil />} />
      </Routes>
    </Router>
  );
}

export default App;
