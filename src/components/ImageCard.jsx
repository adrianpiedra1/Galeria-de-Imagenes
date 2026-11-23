function ImageCard({ image }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={image.path}
          alt={image.alt}
          className="card-img-top"
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{image.imageName}</h5>
          <div className="mt-auto pt-2">
            {image.tags.map((tag) => (
              <span key={tag} className="badge bg-primary me-1 mb-1">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;