const config = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  disabledButtonClass: 'form__submit_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}

const profileEditButton = document.querySelector('.profile__edit');
const cardsAddButton = document.querySelector('.profile__add');
const avatarLoadButton = document.querySelector('.profile__image-wrap');

const cardTemplateSelector = '.card-template';
const profilePopupSelector = '.popup_profile-edit';
const profileNameSelector = '.profile__name';
const profileCaptionSelector = '.profile__caption';
const cardsContainerSelector = '.cards';
const cardUploadSelector = '.popup_card-add';
const imagePopupSelector = '.popup_image';
const avatarSelector = '.profile__image';
const deleteSelector = '.popup_delete';
const avatarLoadSelector = '.popup_avatar';

const token = '05d68b83-9a45-474c-a0fb-d86bd6786213';
const baseUrl = `https://mesto.nomoreparties.co/v1/cohort-50`;

export {
  config,
  profileEditButton,
  cardsAddButton,
  cardsContainerSelector,
  imagePopupSelector,
  profilePopupSelector,
  cardUploadSelector,
  profileNameSelector,
  profileCaptionSelector,
  cardTemplateSelector,
  avatarSelector,
  deleteSelector,
  avatarLoadSelector,
  avatarLoadButton,
  token,
  baseUrl
}
