import { useState, useEffect } from 'react';
import ImageGallery from './components/ImageGallery';

function App() {
  // 1. Estados obligatorios de la consigna
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('Todas');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. Consumo del JSON local con fetch() al cargar la aplicación
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

  // 3. Extraer etiquetas únicas dinámicamente e incluir "Todas"
  const availableTags = ['Todas', ...new Set(images.flatMap((img) => img.tags))];

  // 4. Filtrar en memoria sin modificar el arreglo original 'images'
  const filteredImages = images.filter((img) => {
    const matchesSearch = img.imageName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesTag =
      selectedTag === 'Todas' || img.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  return (
    <div className="container py-4">
      <header className="text-center mb-4">
        <h1 className="fw-bold">Departamento de Gestión y Producción / GESPRO</h1>
        <p className="text-muted">
          Explora nuestras funciones filtrando
        </p>
      </header>

      {/* Barra de búsqueda y filtro por etiquetas */}
      <div className="row g-3 mb-4 justify-content-center">
        <div className="col-12 col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar por SubArea"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            disabled={loading || Boolean(error)}
          />
        </div>
        <div className="col-12 col-md-4">
          <select
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

      {/* Estado de carga */}
      {loading && (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="mt-2">Cargando galería...</p>
        </div>
      )}

      {/* Estado de error */}
      {error && (
        <div className="alert alert-danger text-center my-4" role="alert">
          <strong>Error:</strong> {error}
        </div>
      )}

      {/* Galería renderizada cuando termina la carga sin errores */}
      {!loading && !error && <ImageGallery images={filteredImages} />}
    </div>
  );
}

export default App;