import ItemCountContainer from "../../common/itemCount/ItemCountContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ItemDetailContainer.css"


export const ItemDetail = ({ img, description, title, price, stock, onAdd, initial }) => {
  
  return (
    <div className="cardContainer">
      <div className="detailContainer"> 
        <img src={img} alt="" />
        <h2>{title}</h2>
        <h3>{description}</h3>
        <h4>Precio: ${price}</h4>
      </div>
      <div className="container">
      {initial && (
        <h2 className="mt-1 mb-1 text-center">Tiene ({initial}) producto/s en el carrito</h2>
      )}
    </div>
      <div className="counter">
        <ItemCountContainer
         stock={stock}
         onAdd={onAdd}
         initial={initial}
        />
      </div>
    </div>  
  );
};
