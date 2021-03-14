export class FormValidator {
  constructor(validationSettings, form) {
    this._formSelector = validationSettings.formSelector;
    this._inputSelector = validationSettings.inputSelector;
    this._submitButtonSelector = validationSettings.submitButtonSelector;
    this._inputBlockSelector = validationSettings.inputBlockSelector;
    this._inputErrorSelector = validationSettings.inputErrorSelector;
    this._inputErrorClass = validationSettings.inputErrorClass;
    this._inputErrorActiveClass = validationSettings.inputErrorActiveClass;
    this._submitButtonInactiveClass = validationSettings.submitButtonInactiveClass;
    this._form = form;
  }

  _showInputError = (inputElement, errorMessage) => {
    const formSectionElement = inputElement.closest(this._inputBlockSelector);
    const errorElement = formSectionElement.querySelector(this._inputErrorSelector);
  
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._inputErrorActiveClass);
    inputElement.classList.add(this._inputErrorClass);
  };
  
  _hideInputError = (inputElement) => {
    const formSectionElement = inputElement.closest(this._inputBlockSelector);
    const errorElement = formSectionElement.querySelector(this._inputErrorSelector);
  
    errorElement.textContent = "";
    errorElement.classList.remove(this._inputErrorActiveClass);
    inputElement.classList.remove(this._inputErrorClass);
  };
    
  _checkInputValidity = (inputElement) => {
    const isInputNotValid = !inputElement.validity.valid;
  
    if (isInputNotValid) {
      const errorMessage = inputElement.validationMessage;
  
      this._showInputError(inputElement, errorMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };
  
  toggleButtonState = (inputList, buttonElement) => {
    const findAtLeastOneNotValid = (inputElement) => !inputElement.validity.valid;
    const hasNotValidInput = inputList.some(findAtLeastOneNotValid);
  
    if (hasNotValidInput) {
      buttonElement.setAttribute("disabled", true);
      buttonElement.classList.add(this._submitButtonInactiveClass);
    } else {
      buttonElement.removeAttribute("disabled");
      buttonElement.classList.remove(this._submitButtonInactiveClass);
    }
  };
  
  _setEventListeners = (formElement) => {
    const handleFormSubmit = (event) => {
      event.preventDefault();
    };
    formElement.addEventListener("submit", handleFormSubmit);
  
    

    this._inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = formElement.querySelector(this._submitButtonSelector);
  
    const inputListIterator = (inputElement) => {
      const handleInput = () => {
        this._checkInputValidity(inputElement);
        this.toggleButtonState(this._inputList, this._buttonElement);
      };
  
      inputElement.addEventListener("input", handleInput);
    };
  
    this._inputList.forEach(inputListIterator);
  
    this.toggleButtonState(this._inputList, this._buttonElement);
  };
  
  enableValidation = () => {
    this._setEventListeners(this._form);
    }

}