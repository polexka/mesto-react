import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__wrap">
          <div className="profile__image-wrap" onClick={props.onEditAvatar}>
            <div className="profile__image-view"></div>
            <img className="profile__image" src={currentUser.avatar} alt="Изображение профиля" />
          </div>
          <div className="profile__info">
            <div className="profile__info-wrap">
              <h1 className="profile__name">
                {currentUser.name}
              </h1>
              <button className="profile__edit" type="button" aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__caption">
              {currentUser.about}
            </p>
          </div>
        </div>
        <button className="profile__add" type="button" aria-label="Добавить фотографии" onClick={props.onAddPlace}></button>
      </section>
      <section className="gallery">
        <ul className="cards">
          {props.cards.map((card) => (
            <Card card={card} onCardClick={props.onCardClick} key={card._id} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} />
          ))}
        </ul>
      </section>

    </main>
  )
}

export default Main;