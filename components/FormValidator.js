export default class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._form = formElement;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inputElements = Array.from(
      this._form.querySelectorAll(this._inputSelector)
    );
  }

  _hasInvalidInputs() {
    return !this._inputElements.every(
      (inputElements) => inputElements.validity.valid
    );
  }

  _showInputError(inputElement) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);

    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorMessageElement = this._form.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    errorMessageElement.textContent = "";
    errorMessageElement.classList.remove(this._errorClass);
  }

  _checkInputValidity(inputElements) {
    if (!inputElements.validity.valid) {
      return this._showInputError(inputElements);
    }
    this._hideInputError(inputElements);
  }

  disableButton() {
    this._submitButtonSelector.classList.remove(this._inactiveButtonClass);
    this._submitButtonSelector.disabled = false;
  }

  _toogleButtonState() {
    if (this._hasInvalidInputs()) {
      enableButtton();
    } else {
      disableButton();
    }
  }

  _setEventListeners() {
    this._inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      if (this._checkInputValidity()) {
        this._handleFormSubmit;
      }
    });
    this._setEventListeners();
  }

  _handleFormSubmit() {
    this.disableButton();
  }
}
