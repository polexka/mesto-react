import React, { useState } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopup] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopup] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  
  function handleEditProfileClick() {
    setEditProfilePopup(true);
  }
  
  function handleEditAvatarClick() {
    setEditAvatarPopup(true);
  }
  
  function handleAddPlaceClick() {
    setAddPlacePopup(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditProfilePopup(false);
    setAddPlacePopup(false);
    setEditAvatarPopup(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
      <Footer />

      {/* ВИДЫ ПОПАПОВ (props.name) : profile \\ add \\ avatar \\ delete*/}

      <PopupWithForm name="profile" title="Редактировать профиль" button="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} >
        <label className="form__field">
          <input type="text" name="name" id="title-input" placeholder="Имя профиля" className="form__input" required minLength="2" maxLength="40" />
          <span className="title-input-error form__input-error"></span>
        </label>
        <label className="form__field">
          <input type="text" name="about" id="caption-input" placeholder="Описание" className="form__input" required minLength="2" maxLength="200" />
          <span className="caption-input-error form__input-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm name="add" title="Новое место" button="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} >
        <label className="form__field">
          <input type="text" name="name" id="card-title-input" placeholder="Название" className="form__input" required minLength="2" maxLength="30" />
          <span className="card-title-input-error form__input-error"></span>
        </label>
        <label className="form__field">
          <input type="url" name="link" id="card-link-input" placeholder="Ссылка на картинку" className="form__input" required />
          <span className="card-link-input-error form__input-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm name="avatar" title="Обновить аватар" button="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} >
        <label className="form__field">
          <input type="url" name="avatar" id="avatar-input" placeholder="Ссылка на картинку" className="form__input" required />
          <span className="avatar-input-error form__input-error"></span>
        </label>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <PopupWithForm name="delete" title="Вы уверены?" button="Да" onClose={closeAllPopups}></PopupWithForm>

    </div>
  );
}

export default App;
