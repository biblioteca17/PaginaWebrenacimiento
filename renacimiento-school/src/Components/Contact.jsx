const Contact = () => {
  return (
    <div>
      {/* Información de Contacto */}
      <section className="info-section" id="Contact">
        <div className="info-item">
          <h3 className="info-title">Ubicación</h3>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Col.+Mayangle"
            target="_blank"
            rel="noopener noreferrer"
            className="info-link"
          >
            <p className="info-content">Col. Mayangle</p>
          </a>
          <p className="info-subtext">Haz click para ver en Google Maps/Waze</p>
        </div>

        <div className="info-item">
          <h3 className="info-title">Teléfono</h3>
          <a href="tel:+50422233135" className="info-link">
            <p className="info-content">2223 3135</p>
          </a>
          <p className="info-subtext">Haz click para llamar</p>
        </div>

        <div className="info-item">
          <h3 className="info-title">Correo</h3>
          <a href="mailto:administra@renacom" className="info-link">
            <p className="info-content">administra@renacom</p>
          </a>
          <p className="info-subtext">Haz click para enviar correo</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
