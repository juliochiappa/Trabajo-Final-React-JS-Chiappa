import "./ProductCard.css";
import { Link } from "react-router-dom";

export const ProductCard = ({ img, title, id }) => {
  return (
    <div className="cardContainer">
      <div className="productContainer">
        <img src={img} alt="" />
        <h2>{title}</h2>
        <Link to={`/item/${id}`}>
          <button>Detalles</button>
        </Link>
      </div>
    </div>
  );
};
