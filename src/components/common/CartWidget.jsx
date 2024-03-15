import { FaCartShopping } from "react-icons/fa6";
import { Badge } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


export const CartWidget = () => {

  const {getTotalItems} = useContext(CartContext)
  
    let totalItemsCart= getTotalItems()

  return (
    <Badge badgeContent={totalItemsCart} showZero color= "secondary">
        <FaCartShopping color= "black" size={35} />
    </Badge>
  );
};
