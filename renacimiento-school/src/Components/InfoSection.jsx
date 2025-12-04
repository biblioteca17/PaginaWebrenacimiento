const InfoSection = () => {
  return (
    <section className="contact-section" id="Contact">
      <div className="contact-wrapper">
        <div className="contact-box">
          <h3 className="contact-title">Ubicación</h3>
          <a
            href="https://n9.cl/qneki"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <p className="contact-content">Col. Mayangle</p>
          </a>
          <p className="contact-subtext">
            Haz click para ver en Google Maps/Waze
          </p>
        </div>

        <div className="contact-box">
          <h3 className="contact-title">Teléfono</h3>
          <a href="tel:+50422273115" className="contact-link">
            <p className="contact-content">2227 3115</p>
          </a>
          <p className="contact-subtext">Haz click para llamar</p>
        </div>

        <div className="contact-box">
          <h3 className="contact-title">Correo</h3>
          <a href="mailto:info@renacimientoschool.hn" className="contact-link">
            <p className="contact-content">info@renacimientoschool.hn</p>
          </a>
          <p className="contact-subtext">Haz click para enviar correo</p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
