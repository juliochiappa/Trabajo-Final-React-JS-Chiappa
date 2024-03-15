// import { AgregarDocs } from "../../../agregarDocs";
import { ProductCard } from "../../common/ProductCard";
import "./ItemListContainer.css"


export const ItemList = ({ items }) => {
  return (
    <div className="cardsContainer">
      {/* <AgregarDocs /> Componente para exportar los productos de asyncMock */}
     {items.map(({id, img, title, description, price}) => {
        return (
          <ProductCard
            key={id}
            id={id}
            img={img}
            title={title}
            description={description}
            price={price}
          />
        );
      })}
    </div>
  );
};


