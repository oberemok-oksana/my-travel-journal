const Card = ({
  imageUrl,
  location,
  googleMapsUrl,
  title,
  startDate,
  endDate,
  description,
}) => {
  return (
    <div className="card">
      <img src={`../images/${imageUrl}`} alt={location} className="card-img" />
      <div className="card-content">
        <div className="map-controls">
          <img src="/images/map-point.png" alt="map point" />
          <span>{location}</span>

          <a className="google-link" href={googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h2 className="card-title">{title}</h2>

        <div className="date">
          {startDate} - {endDate}
        </div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
