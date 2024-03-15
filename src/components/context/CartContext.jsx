import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addToCard = (product) => {
    let existe = IsInCart(product.id);

    if (existe) {
      let newArray = cart.map((element) => {
        if (element.id === product.id) {
          return { ...element, quantity: product.quantity };
        } else {
          return element;
        }
      });
      setCart(newArray);
      localStorage.setItem("cart", JSON.stringify(newArray));
    } else {
      setCart([...cart, product]);
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
    }
  };
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const IsInCart = (id) => {
    let existe = cart.some((element) => element.id === id);
    return existe;
  };

  const removeById = (id) => {
    let newArray = cart.filter((element) => element.id !== id);
    setCart(newArray);
    localStorage.setItem("cart", JSON.stringify(newArray));
  };

  const getTotalItems = () => {
    let totalItemsCart = cart.reduce((acumulador, element) => {
      return acumulador + element.quantity;
    }, 0);
    return totalItemsCart;
  };

  const getTotalPrice = () => {
    let totalPrice = cart.reduce((acumulador, element) => {
      return acumulador + element.quantity * element.price;
    }, 0);
    return totalPrice;
  };

  const getTotalQuantityById = (id) => {
    let product = cart.find((element) => element.id === id);

    if (product) {
      return product.quantity;
    } else {
      return product;
    }
  };

  let data = {
    cart,
    addToCard,
    clearCart,
    removeById,
    getTotalItems,
    getTotalPrice,
    getTotalQuantityById,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
