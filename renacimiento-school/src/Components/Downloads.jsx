
const Downloads = () => {
  return (
    <section className="downloads-section">
      <h2 className="downloads-title">Descargas</h2>
      <div className="downloads-buttons">
        <a href="/pdfs/UNIFORME2026.pdf" className="download-btn" download>
          Guía Vacacional
        </a>
        <a href="/pdfs/UNIFORME2026.pdf" className="download-btn" download>
          Uniforme Diario 2026
        </a>
        <a href="/pdfs/UNIFORME2026.pdf" className="download-btn" download>
          Lista de Útiles
        </a>
      </div>
    </section>
  );
};

export default Downloads;