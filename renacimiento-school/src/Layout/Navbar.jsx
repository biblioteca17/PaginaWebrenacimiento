import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/Logo/RenacimientoLogo.png";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top custom-border">
      <div className="container-fluid">
        <a href="#inicio" className="navbar-brand d-flex align-items-center">
          <img src={logo} className="cstm-logo" alt="Renacimiento logo" />
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
              <Link 
                to="Banner" 
                className="nav-link text-white" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarS"
                spy={true}
                smooth={true}
                duration={500}
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link 
                to="Edubox" 
                className="nav-link text-white" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarS"
                spy={true}
                smooth={true}
                duration={500}
              >
                Matriculate
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link 
                to="Countdown" 
                className="nav-link text-white" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarS"
                spy={true}
                smooth={true}
                duration={500}
              >
                Contáctanos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;