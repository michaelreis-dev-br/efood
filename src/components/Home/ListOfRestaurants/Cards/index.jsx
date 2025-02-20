import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { Card } from "./styles";

const Cards = ({ id, titulo, capa, tipo, avaliacao, descricao, destacado }) => (
  <Card>
    <div className="image" style={{ backgroundImage: `url(${capa})` }}>
      <div className="tags">
        {destacado ? (
          <>
            <div className="tag">Destaque da Semana</div>
            <div className="tag">{tipo}</div>
          </>
        ) : (
          <div className="tag">{tipo}</div>
        )}
      </div>
    </div>
    <div className="content">
      <div className="title-container">
        <h2>{titulo}</h2>
        <div className="review">
          <h2>{avaliacao}</h2>
          <Star />
        </div>
      </div>
      <p>{descricao}</p>
      <Link to={`/perfil/${id}`}>Saiba mais</Link>
    </div>
  </Card>
);

export default Cards;
