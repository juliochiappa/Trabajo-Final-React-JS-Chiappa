import { Link, Route, Routes } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { routes } from "./routes";
import { faExclamationCircle, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NotFoundPage = () => (
  <div style={{ textAlign: "center", paddingTop: "50px" }}>
    <h1 style={{ color: "black", paddingTop: "50px" }}>
      <FontAwesomeIcon icon={faExclamationCircle} /> Página no encontrada
    </h1>
    <p style={{ color: "black", paddingTop: "50px", fontSize: "30px" }}>
      Lo sentimos, la página que estás buscando no existe.
    </p>
    <Link to="/">
      <button>
        <FontAwesomeIcon icon={faHome} /> Ir a Inicio
      </button>
    </Link>
  </div>
);

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
