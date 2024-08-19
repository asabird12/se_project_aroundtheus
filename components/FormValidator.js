export default class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._form = formElement;
  }

  hasInvalidInputs(inputSelector) {
    return !this._inputSelector.every((inputElement) => inputElement);
  }

  showInputError(formElement, inputElement, { inputErrorClass, errorClass }) {
    this._errorMessageElement = this._form.querySelector(
      `#${inputElement.id}-error`
    );
    this._inputElement.classList.add(this._inputErrorClass);
    this._errorMessageElement.textContent =
      this._inputElement.validationMessage;
    this._errorMessageElement.classList.add(this._errorClass);
  }

  hideInputError(form, inputSelector, { inputErrorClass, errorClass }) {
    const errorMessageElement = this._form.querySelector(
      `#${this.inputSelector.id}-error`
    );
    this._inputSelector.classList.remove(this._inputErrorClass);
    errorMessageElement.textContent = "";
    errorMessageElement.classList.remove(this._errorClass);
  }

  checkInputValidity(form, inputSelector, options) {
    if (!this._inputSelector.validity.valid) {
      return showInputError(this._form, this._inputSelector, options);
    }
    hideInputError(this._form, this._inputSelector, options);
  }

  enableButtton(submitButtonSelector) {
    const { inactiveButtonClass } = settings;
    this._submitButtonSelector.classList.add(this._inactiveButtonClass);
    this._submitButtonSelector.disabled = true;
    return;
  }

  disableButton(submitButtonSelector) {
    const { inactiveButtonClass } = settings;
    this._submitButtonSelector.classList.remove(this._inactiveButtonClass);
    this._submitButtonSelector.disabled = false;
    return;
  }

  toogleButtonState(inputSelector, submitButton, { inactiveButtonClass }) {
    if (hasInvalidInputs(this._inputSelector)) {
      enableButtton(this._submitButton);
    } else {
      disableButton(this._submitButton);
    }
  }

  _setEventListeners() {
    this._inputElements = Array.from(
      this._form.querySelectorAll(this._inputSelector)
    );
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
    inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", (e) => {
        checkInputValidity(this._form, this._inputElement, options);
        toogleButtonState(inputElements, this._submitButton, options);
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this._setEventListners(this._form, rest);
  }
}
