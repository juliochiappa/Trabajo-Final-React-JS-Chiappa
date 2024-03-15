import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { products } from "./asyncMock";

export const AgregarDocs = () => {
  const rellenar = () => {
    let productsCollection = collection(db, "products");
    products.forEach((product) => {
      addDoc(productsCollection, product);
    });
  };

  return (
    <div>
      <button onClick={rellenar}>Agregar Documentos/Productos</button>
    </div>
  );
};
