const Card = ({ name, type, famous, image }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{type}</p>
      <p><strong>Famous:</strong> {famous}</p>
    </div>
  )
}

export default Card
