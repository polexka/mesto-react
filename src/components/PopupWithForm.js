
// props: {name, title, button, children, isOpen, onClose}

function PopupWithForm (props) {

  return (
    <div className={props.isOpen ? `popup popup_${props.name} popup_opened` : `popup popup_${props.name}`}>
      <div className="popup__container">
        <button className="popup__close" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className="form" name={props.name} noValidate>
          {props.children}
          <button className="form__submit" name="save" type="submit" aria-label={props.button}>
            {props.button}
          </button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;