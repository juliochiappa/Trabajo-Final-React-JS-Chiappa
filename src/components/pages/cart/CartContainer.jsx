import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./CartContainer.css";
import Swal from "sweetalert2";

export function CartContainer() {
  const { cart, clearCart, removeById, getTotalPrice } = useContext(CartContext);
  let totalPrice = getTotalPrice();

  const limpiarConAlerta = () => {
    Swal.fire({
      title: "¿Seguro desea limpiar el carrito de productos?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Eliminar",
      denyButtonText: "No, mantener el carrito",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito eliminado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Mantiene productos en el carrito", "", "info");
      }
    });
  };

  const eliminarProductoConAlerta = (productId) => {
    Swal.fire({
      title: "¿Seguro desea eliminar este producto del carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Eliminar",
      denyButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        removeById(productId);
        Swal.fire("Producto eliminado del carrito", "", "success");
      }
    });
  };

  return (
    <div className="cart-container">
      {cart.map((product) => (
        <div key={product.id} className="product-container">
          <img src={product.img} alt="" className="product-image" />
          <h2 className="product-title">{product.title}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-quantity">Cantidad: {product.quantity}</p>
          <p className="product-price">Precio: ${product.price}</p>
          <button
            className="remove-button"
            onClick={() => eliminarProductoConAlerta(product.id)}
          >
            Eliminar Producto
          </button>
        </div>
      ))}
      <div className="cart-detalles">
        <div className="total">
          <h5>Cantidad de Productos:</h5>
          <h5>Precio Total:</h5>
          <h5>Descuento:</h5>
          <h1>Total a pagar: ${totalPrice}</h1>
          {cart.length > 0 ? (
            <div>
              <button className="botones" onClick={limpiarConAlerta}>
                Limpiar Carrito
              </button>
              <Link to="/checkout" className="checkout-link">
                <button className="botones">Finalizar Compra</button>
              </Link>
            </div>
          ) : (
            <Link to="/">
              <button className="botones">Agregar productos</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
