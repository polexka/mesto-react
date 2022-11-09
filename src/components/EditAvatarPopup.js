import React, { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const avatar = useRef();

  function handleClose() {
    props.onClose();
    avatar.current.value = '';
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar(avatar.current.value);
    avatar.current.value = '';
  }

  return (
    <PopupWithForm name="avatar" title="Обновить аватар" button="Сохранить" isOpen={props.isOpen} onClose={handleClose} onSubmit={handleSubmit} >
      <label className="form__field">
        <input type="url" name="avatar" ref={avatar} id="avatar-input" placeholder="Ссылка на картинку" className="form__input" required />
        <span className="avatar-input-error form__input-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;