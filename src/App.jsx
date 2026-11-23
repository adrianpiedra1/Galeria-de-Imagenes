import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ImageGallery from './components/ImageGallery';

function App() {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('Todas');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/images.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('No se pudo cargar el archivo de imágenes.');
        }
        return response.json();
      })
      .then((data) => {
        setImages(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const availableTags = ['Todas', ...new Set(images.flatMap((img) => img.tags))];

  const filteredImages = images.filter((img) => {
    const matchesSearch = img.imageName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesTag =
      selectedTag === 'Todas' || img.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="container py-4 flex-grow-1">
        <div className="card border-0 shadow-sm p-3 mb-4">
          <div className="row g-3 align-items-center">
            <div className="col-12 col-md-7">
              <label htmlFor="searchInput" className="form-label fw-semibold small text-secondary mb-1">
                Buscar recurso por nombre
              </label>
              <input
                id="searchInput"
                type="text"
                className="form-control"
                placeholder="Ej. Robótica, Programación, Video..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                disabled={loading || Boolean(error)}
              />
            </div>
            <div className="col-12 col-md-5">
              <label htmlFor="tagSelect" className="form-label fw-semibold small text-secondary mb-1">
                Filtrar por categoría temática
              </label>
              <select
                id="tagSelect"
                className="form-select"
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                disabled={loading || Boolean(error)}
              >
                {availableTags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag === 'Todas' ? 'Todas las etiquetas' : `#${tag}`}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {loading && (
          <div className="text-center my-5">
            <div className="spinner-border" style={{ color: '#003366' }} role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
            <p className="mt-2 text-secondary">Cargando recursos educativos...</p>
          </div>
        )}

        {error && (
          <div className="alert alert-danger text-center my-4" role="alert">
            <strong>Error:</strong> {error}
          </div>
        )}

        {!loading && !error && <ImageGallery images={filteredImages} />}
      </main>

      <Footer />
    </div>
  );
}

export default App;