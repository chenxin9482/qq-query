import './Card.css'

function Card(props) {
  return (
    <div className="card">
      <div className="avatar"></div>
      <div className="info">
        <div className="name">name</div>
        <div className="number">number</div>
      </div>
    </div>
  )
}

export default Card