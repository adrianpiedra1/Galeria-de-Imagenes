import ImageCard from './ImageCard';

function ImageGallery({ images }) {
  if (images.length === 0) {
    return (
      <div className="alert alert-warning text-center my-4" role="alert">
        No se encontraron imágenes que coincidan con los criterios de búsqueda o la etiqueta seleccionada.
      </div>
    );
  }

  return (
    <div className="row">
      {images.map((item) => (
        <ImageCard key={item.path} image={item} />
      ))}
    </div>
  );
}

export default ImageGallery;