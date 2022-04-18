import './Card.css'

function Card(props) {
  return (
    <div className="card">
      <img className="avatar" src={props.avatar} alt="avatar" />
      <div className="info">
        <div className="name">{props.name}</div>
        <div className="number">{props.number}</div>
      </div>
    </div>
  )
}

export default Card