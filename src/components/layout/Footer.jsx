import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <footer className="footerContainer">
        <div className="contacto">
          <h3>Contacto</h3>
          <p>Email: cieccordoba@gmail.com</p>
          <p>Teléfono: (351) 10000000</p>
        </div>

        <div className="redes">
          <h3>Redes Sociales</h3>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/ejemplo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/ejemplo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ejemplo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
