function Header() {
  return (
    <header
      className="text-white shadow-sm"
      style={{
        backgroundColor: '#003366',
        borderBottom: '4px solid #CE1126',
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <div className="container py-3">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
          {/* Lado izquierdo: Título de la galería */}
          <div className="text-center text-md-start">
            <span
              className="badge mb-1"
             
            >
              Ministerio de Educación Pública • Costa Rica
            </span>
            <h1 className="h3 fw-bold mb-0">
              Galería de Recursos Educativos GESPRO
            </h1>
          </div>

          {/* Lado derecho: Imagen con el nombre */}
          <div
            className="d-flex align-items-center gap-2 px-3 py-2 rounded"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
            }}
          >
            <img
              src="/images/logo-gespro.webp"
              alt="Logo institucional"
              className="rounded bg-white p-1"
              style={{ width: '44px', height: '44px', objectFit: 'contain' }}
            />
            <div className="lh-sm">
              <strong className="d-block" style={{ fontSize: '0.9rem' }}>
                MEP Digital
              </strong>
              <small className="text-light opacity-75" style={{ fontSize: '0.75rem' }}>
                Innovación y Tecnología
              </small>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;