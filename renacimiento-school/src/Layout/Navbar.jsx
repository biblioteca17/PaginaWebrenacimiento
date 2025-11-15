import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/Logo/RenacimientoLogo.png";

const Navbar = ({ closeNavbar }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top custom-border">
      <div className="container-fluid">
        <a href="#inicio" className="navbar-brand d-flex align-items-center">
          {/* <img src={logo} className="cstm-logo" alt="Fumiga logo" /> */}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarS"
          aria-controls="navbarS"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarS">
          <ul className="navbar-nav">
            <li className="nav-item mx-3">
              <a href="#Banner" className="nav-link text-white" onClick={closeNavbar}>
                Inicio
              </a>
            </li>
            <li className="nav-item mx-3">
              <a href="#Countdown" className="nav-link text-white" onClick={closeNavbar}>
                Matriculate
              </a>
            </li>
            <li className="nav-item mx-3">
              <a href="#Edubox" className="nav-link text-white" onClick={closeNavbar}>
                Edubox
              </a>
            </li>
            <li className="nav-item mx-3">
              <a href="#Contact" className="nav-link text-white" onClick={closeNavbar}>
                Contáctanos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;