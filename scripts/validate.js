const validationSettings = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__save-button",
    inputBlockSelector: ".popup__input-block",
    inputErrorSelector: ".popup__input-error",
    inputErrorClass: "popup__input_error",
    inputErrorActiveClass: "popup__input-error_active",
    submitButtonInactiveClass: "popup__save-button_inactive"
  };

const showInputError = (inputElement, errorMessage) => {
    const formSectionElement = inputElement.closest(validationSettings.inputBlockSelector);
    const errorElement = formSectionElement.querySelector(validationSettings.inputErrorSelector);
  
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationSettings.inputErrorActiveClass);
    inputElement.classList.add(validationSettings.inputErrorClass);
  };
  
  const hideInputError = (inputElement) => {
    const formSectionElement = inputElement.closest(validationSettings.inputBlockSelector);
    const errorElement = formSectionElement.querySelector(validationSettings.inputErrorSelector);
  
    errorElement.textContent = "";
    errorElement.classList.remove(validationSettings.inputErrorActiveClass);
    inputElement.classList.remove(validationSettings.inputErrorClass);
  };
  

  
  const checkInputValidity = (formElement, inputElement) => {
    const isInputNotValid = !inputElement.validity.valid;
  
    if (isInputNotValid) {
      const errorMessage = inputElement.validationMessage;
  
      showInputError(inputElement, errorMessage);
    } else {
      hideInputError(inputElement);
    }
  };
  
  const toggleButtonState = (inputList, buttonElement) => {
    const findAtLeastOneNotValid = (inputElement) => !inputElement.validity.valid;
    const hasNotValidInput = inputList.some(findAtLeastOneNotValid);
  
    if (hasNotValidInput) {
      buttonElement.setAttribute("disabled", true);
      buttonElement.classList.add(validationSettings.submitButtonInactiveClass);
    } else {
      buttonElement.removeAttribute("disabled");
      buttonElement.classList.remove(validationSettings.submitButtonInactiveClass);
    }
  };
  
  const setEventListeners = (formElement, inputSelector) => {
    const handleFormSubmit = (event) => {
      event.preventDefault();
    };
    formElement.addEventListener("submit", handleFormSubmit);
  
    

    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(validationSettings.submitButtonSelector);
  
    const inputListIterator = (inputElement) => {
      const handleInput = () => {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      };
  
      inputElement.addEventListener("input", handleInput);
    };
  
    inputList.forEach(inputListIterator);
  
    toggleButtonState(inputList, buttonElement);
  };
  
  const enableValidation = ({formSelector, inputSelector}) => {
    const formElements = document.querySelectorAll(formSelector);
    const formList = Array.from(formElements);
  
    formList.forEach((formElement) => {
      setEventListeners(formElement, inputSelector);
    });
  };
  
  enableValidation(validationSettings);  
//   {
//     formSelector: '.popup__form',
//     inputSelector: '.popup__input',
//     submitButtonSelector: '.popup__button',
//     inactiveButtonClass: 'popup__button_disabled',
//     inputErrorClass: 'popup__input_type_error',
//     errorClass: 'popup__error_visible'
//   }