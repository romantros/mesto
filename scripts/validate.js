const showInputError = (inputElement, errorMessage) => {
    const formSectionElement = inputElement.closest(".popup__input-block");
    const errorElement = formSectionElement.querySelector(".popup__input-error");
  
    errorElement.textContent = errorMessage;
    errorElement.classList.add("popup__input-error_active");
    inputElement.classList.add("popup__input_error");
  };
  
  const hideInputError = (inputElement) => {
    const formSectionElement = inputElement.closest(".popup__input-block");
    const errorElement = formSectionElement.querySelector(".popup__input-error");
  
    errorElement.textContent = "";
    errorElement.classList.remove("popup__input-error_active");
    inputElement.classList.remove("popup__input_error");
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
      buttonElement.classList.add("popup__save-button_inactive");
    } else {
      buttonElement.removeAttribute("disabled");
      buttonElement.classList.remove("popup__save-button_inactive");
    }
  };
  
  const setEventListeners = (formElement, inputSelector) => {
    const handleFormSubmit = (event) => {
      event.preventDefault();
    };
    formElement.addEventListener("submit", handleFormSubmit);
  
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(".popup__save-button");
  
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
  
  const enableValidation = ({ formSelector, inputSelector }) => {
    const formElements = document.querySelectorAll(formSelector);
    const formList = Array.from(formElements);
  
    formList.forEach((formElement) => {
      setEventListeners(formElement, inputSelector);
    });
  };
  
  enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
  });
  