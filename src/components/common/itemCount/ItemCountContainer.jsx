import { useState } from "react";
import ItemCount from "./ItemCount";
import Swal from "sweetalert2";

const ItemCountContainer = ({ stock, onAdd, initial = 1 }) => {
  const [count, setCount] = useState(initial);

  const sumaOne = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      Swal.fire({
        icon: "warning",
        title: "Atención",
        text: "No existen más productos en stock!",
      });
    }
  };

  const restaOne = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      alert("No puede ser menos de 1");
    }
  };

  const isDisabled = count > stock;

  return (
    <ItemCount
      count={count}
      sumaOne={sumaOne}
      restaOne={restaOne}
      onAdd={onAdd}
      isDisabled={isDisabled}
    />
  );
};

export default ItemCountContainer;
