import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { CardSkeleton } from "../../common/CardSkeleton";
import "./ItemListContainer.css"

export const ItemListContainer = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading (true)

    let productsCollection = collection(db, "products");

    let consulta;

    if (category) {
      let productsCollectionFiltered = query(
        productsCollection,
        where("category", "==", category)
      );
      consulta = productsCollectionFiltered;
    } else {
      consulta = productsCollection;
    }

    getDocs(consulta)
      .then((res) => {
        let arrayDesencriptado = res.docs.map((element) => {
          return { ...element.data(), id: element.id };
        });
        setItems(arrayDesencriptado);
      })
      .finally(() => setLoading(false));
  }, [category]);
  if (loading) {
    return (
      <div className= "cardsContainer">
        {category ? (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        ) : (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        )}
      </div>
    );
  }

  return (
    <>
      <ItemList items={items} />
    </>
  );
};
