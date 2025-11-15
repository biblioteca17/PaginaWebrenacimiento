import logo from "../assets/Logo/RenacimientoLogo.png";
import schoolImage from "../assets/Escuela/42.png";

const Banner = () => {
  return (
    <div className="banner-container" id="Banner">
      <div className="banner-content text-center">
        <img src={logo} alt="Logo" className="banner-logo" />
        <h1 className="banner-title">RENACIMIENTO SCHOOL</h1>
        <img src={schoolImage} alt="Renacimiento" className="banner-image" />
      </div>
    </div>
  );
};

export default Banner;