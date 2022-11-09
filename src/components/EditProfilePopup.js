import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  function handleClose() {
    props.onClose();
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }
  
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm name="profile" title="Редактировать профиль" button="Сохранить" isOpen={props.isOpen} onClose={handleClose} onSubmit={handleSubmit} >
      <label className="form__field">
        <input type="text" name="name" id="title-input" placeholder="Имя профиля" className="form__input" value={name} onChange={handleNameChange} required minLength="2" maxLength="40" />
        <span className="title-input-error form__input-error"></span>
      </label>
      <label className="form__field">
        <input type="text" name="about" id="caption-input" placeholder="Описание" className="form__input" value={description} onChange={handleDescriptionChange} required minLength="2" maxLength="200" />
        <span className="caption-input-error form__input-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default EditProfilePopup;