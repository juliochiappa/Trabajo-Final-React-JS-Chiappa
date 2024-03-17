import { CartWidget } from "../common/CartWidget";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { menuNavigation } from "../../router/menuNavigation";

export const Navbar = () => {
  return (
    <>
      <div className="navbarContainer">
        <img
          src="https://res.cloudinary.com/daiikhnag/image/upload/v1707272308/images_gesb63.jpg"
          alt="Logo del Centro de Estética"
          className="logo"
        />
        <h1>C.I.E.C.</h1>
        <ul className="nav-list">
          {menuNavigation.map(({ id, text, path }) => (
            <Link key={id} to={path}>
              {text}
            </Link>
          ))}
        </ul>
        <Link className= "cart" to="/cart">
          <CartWidget />
        </Link>
      </div>
    </>
  );
};
