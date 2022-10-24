function Card(props) {
  function handleCardClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="card">
      <button className="card__delete" type="button" aria-label="Удалить"></button>
      <img className="card__image" src={props.card.link} alt="Описание картинки" onClick={handleCardClick} />
      <div className="card__wrap">
        <h2 className="card__title">
          {props.card.name}
        </h2>
        <div className="card__reaction-wrap">
          <button className="card__reaction" type="button" aria-label="Нравится"></button>
          <span className="card__reaction-count">
            {props.card.likes ? `${props.card.likes.length}` : `0`}
          </span>
        </div>
      </div>
    </li>
  )
}

export default Card;