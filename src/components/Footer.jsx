function Footer() {
  return (
    <footer
      className="text-white mt-auto py-4"
      style={{
        backgroundColor: '#002244',
        borderTop: '4px solid #0066CC',
        fontFamily: "'Open Sans', sans-serif",
      }}
    >
      <div className="container">
        <div className="row align-items-center gy-2 text-center text-md-start">
          <div className="col-md-7">
            <p className="mb-1 fw-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Ministerio de Educación Pública (MEP) — Costa Rica
            </p>
           
          </div>
          <div className="col-md-5 text-md-end">
           
            <small className="text-light opacity-75">
              © {new Date().getFullYear()} Todos los derechos reservados
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;