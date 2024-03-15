import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import "sweetalert2/dist/sweetalert2.min.css";
import "./CheckoutContainer.css";

export const Checkout = ({ envioFormulario, capturar, orderId }) => {
  useEffect(() => {
    if (orderId) {
      Swal.fire({
        title: "Gracias por su compra!",
        text: `Comprobante Nº: ${orderId}`,
        icon: "success",
        confirmButtonText: "Continuar comprando",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/";
        }
      });
    }
  }, [orderId]);
  return (
    <div>
      {orderId ? (
        <div className="container text-center mt-5">
          <Link to="/" className="btn btn-dark mt-3 m-2">
            Continuar comprando
          </Link>
        </div>
      ) : (
        <form className="formulario" onSubmit={envioFormulario}>
          <h2>¡Completá el formulario para realizar la compra!</h2>
          <input
            type="text"
            placeholder="Ingrese su nombre"
            onChangeCapture={capturar}
            name="name"
            required
          />
          <input
            type="text"
            placeholder="Ingrese su teléfono"
            onChange={capturar}
            name="phone"
            required
          />
          <input
            type="text"
            placeholder="Ingrese su email"
            onChange={capturar}
            name="email"
            required
          />
          <button type="submit">Comprar</button>
        </form>
      )}
    </div>
  );
};


