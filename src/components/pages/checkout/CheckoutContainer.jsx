import { useContext, useState } from "react";
import { Checkout } from "./Checkout";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

export const CheckoutContainer = () => {
  const [infoUser, setInfoUser] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const [orderId, setOrderId] = useState(null);

  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  let totalPrice = getTotalPrice();

  const envioFormulario = (event) => {
    event.preventDefault();
    let order = {
      buyer: infoUser,
      items: cart,
      total: totalPrice,
    }
    let ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((res) => setOrderId(res.id))

    cart.forEach((product) => {
      let refDoc = doc(db, "products", product.id);
      updateDoc(refDoc, { stock: product.stock - product.quantity })
      clearCart();
    });
  };

  const capturar = (event) => {
    setInfoUser({ ...infoUser, [event.target.name]: event.target.value });
  };

  return (
    <Checkout
      orderId={orderId}
      envioFormulario={envioFormulario}
      capturar={capturar}
    />
  );
};
