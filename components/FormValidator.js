export default class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this.errorClass = settings.errorClass;
    this._form = formElement;
  }

  toogleButtonState(this._inputElements, this._submitButton, { inactiveButtonClass }) {
    if (hasInvalidInputs(this._inputElements)) {
      enableButtton(this._submitButton);
    } else {
      disableButton(this._submitButton);
    }
  }
  
  hasInvalidInputs(this._inputSelector) {
    return !this._inputSelector.every((inputElement) => this._inputElement)

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

    setEventListners(formElement, options);
  }
};

function showInputError(
  formElement,
  inputElement,
  { inputErrorClass, errorClass }
) {
  const errorMessageElement = formElement.querySelector(
    `#${inputElement.id}-error`
  );
  inputElement.classList.add(inputErrorClass);
  errorMessageElement.textContent = inputElement.validationMessage;
  errorMessageElement.classList.add(errorClass);
}

function hideInputError(
  formElement,
  inputElement,
  { inputErrorClass, errorClass }
) {
  const errorMessageElement = formElement.querySelector(
    `#${inputElement.id}-error`
  );
  inputElement.classList.remove(inputErrorClass);
  errorMessageElement.textContent = "";
  errorMessageElement.classList.remove(errorClass);
}

function checkInputValidity(formElement, inputElement, options) {
  if (!inputElement.validity.valid) {
    return showInputError(formElement, inputElement, options);
  }
  hideInputError(formElement, inputElement, options);
}

function hasInvalidInputs(inputList) {
  return !inputList.every((inputElement) => inputElement.validity.valid);
}

function enableButtton(submitButton) {
  const { inactiveButtonClass } = config;
  submitButton.classList.add(inactiveButtonClass);
  submitButton.disabled = true;
  return;
}

function disableButton(submitButton) {
  const { inactiveButtonClass } = config;
  submitButton.classList.remove(inactiveButtonClass);
  submitButton.disabled = false;
  return;
}

function toogleButtonState(
  inputElements,
  submitButton,
  { inactiveButtonClass }
) {
  if (hasInvalidInputs(inputElements)) {
    enableButtton(submitButton);
  } else {
    disableButton(submitButton);
  }
}

function setEventListners(formElement, options) {
  const { inputSelector } = options;
  const { submitButtonSelector } = options;
  const inputElements = Array.from(formElement.querySelectorAll(inputSelector));
  const submitButton = formElement.querySelector(submitButtonSelector);
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", (e) => {
      checkInputValidity(formElement, inputElement, options);
      toogleButtonState(inputElements, submitButton, options);
    });
  });
}

function enableValidation(options) {
  const formElements = Array.from(
    document.querySelectorAll(options.formSelector)
  );
  formElements.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    setEventListners(formElement, options);
  });
}

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

enableValidation(config);
