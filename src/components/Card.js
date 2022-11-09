import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);

  function handleCardClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <li className="card">
      <button className={isOwn ? 'card__delete' : 'card__delete_invisible'} type="button" aria-label="Удалить" onClick={handleDeleteClick}></button>
      <img className="card__image" src={props.card.link} alt={`Просмотр фото: ${props.card.name}`} onClick={handleCardClick} />
      <div className="card__wrap">
        <h2 className="card__title">
          {props.card.name}
        </h2>
        <div className="card__reaction-wrap">
          <button className={isLiked ? 'card__reaction card__reaction_active' : 'card__reaction'} type="button" onClick={handleLikeClick} aria-label="Нравится"></button>
          <span className="card__reaction-count">
            {props.card.likes ? `${props.card.likes.length}` : `0`}
          </span>
        </div>
      </div>
    </li>
  )
}

export default Card;