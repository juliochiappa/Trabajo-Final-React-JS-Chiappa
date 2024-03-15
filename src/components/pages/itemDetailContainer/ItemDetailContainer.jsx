import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../itemDetailContainer/ItemDetail";
import { CartContext } from "../../context/CartContext";
import { CardSkeleton } from "../../common";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const { addToCard, getTotalQuantityById } = useContext(CartContext);
  const initial = getTotalQuantityById(id);

  useEffect(() => {
    setLoading(true);

    let detalleProductsCollection = collection(db, "products");
    let refDoc = doc(detalleProductsCollection, id);
    getDoc(refDoc)
      .then((res) => {
        setItem({ ...res.data(), id: res.id });
      })
      .finally(() => setLoading(false));
  }, [id]);

  const onAdd = (cantidad) => {
    let infoProducto = {
      ...item,
      quantity: cantidad,
    };
    addToCard(infoProducto);
  };

  return (
    <>
      {loading ? (
        <div style={{ display: "flex", gap: 20, justifyContent: "center" }}>
          <CardSkeleton />
        </div>
      ) : (
        <ItemDetail {...item} onAdd={onAdd} initial={initial} />
      )}
    </>
  );
};
