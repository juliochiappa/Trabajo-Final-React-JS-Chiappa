import "./ItemCount.css";

const ItemCount = ({ count, sumaOne, restaOne, onAdd, isDisabled }) => {
  return (
    <>
      <div className="count">
        <h5>{count}</h5>
        <button className= "botonCount" onClick={sumaOne}>Sumar</button>
        <button className= "botonCount" onClick={restaOne} disabled={count === 1 ? true : false}>
          Restar
        </button>
        <button
          className="addToCart"
          onClick={() => onAdd(count)}
          disabled={isDisabled}
        >
          Agregar al carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;
