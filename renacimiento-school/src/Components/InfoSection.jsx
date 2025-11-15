const InfoSection = () => {
  return (
    <section className="contact-section" id="Contact">
      <div className="contact-wrapper">
        <div className="contact-box">
          <h3 className="contact-title">Ubicación</h3>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Col.+Mayangle"
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
          <a href="tel:+50422233135" className="contact-link">
            <p className="contact-content">2223 3135</p>
          </a>
          <p className="contact-subtext">Haz click para llamar</p>
        </div>

        <div className="contact-box">
          <h3 className="contact-title">Correo</h3>
          <a href="mailto:administra@renacom" className="contact-link">
            <p className="contact-content">administra@renacom</p>
          </a>
          <p className="contact-subtext">Haz click para enviar correo</p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
