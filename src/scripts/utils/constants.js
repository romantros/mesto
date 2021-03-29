export const profilePopup = document.querySelector('.profile-popup');
export const openPopupBtn = document.querySelector('.profile__edit-button');
export const profileForm = profilePopup.querySelector('.profile-form');
export const nameInput = profilePopup.querySelector('.popup__input_name');
export const profileName = document.querySelector('.profile__name');
export const hobbyInput = profilePopup.querySelector('.popup__input_hobby');
export const profileHobby = document.querySelector('.profile__hobby');
export const picPopup = document.querySelector('.image-popup__pic'); 
export const titlePopup = document.querySelector('.image-popup__title');
export const disabledFormElementAdd = document.querySelector('.add-button');
export const ESC_CODE = "Escape";
export const addCardPopup = document.querySelector('.new-card-popup');
export const openFormBtn = document.querySelector('.profile__add-button');
export const formElementAdd = addCardPopup.querySelector('.add-form');
export const containerElements = document.querySelector('.elements');
export const placeInput = addCardPopup.querySelector('.popup__input_place');
export const linkInput = addCardPopup.querySelector('.popup__input_link');
export const imagePopup = document.querySelector('.image-popup');

export const validationSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inputBlockSelector: ".popup__input-block",
  inputErrorSelector: ".popup__input-error",
  inputErrorClass: "popup__input_error",
  inputErrorActiveClass: "popup__input-error_active",
  submitButtonInactiveClass: "popup__save-button_inactive"
};

export const krym = new URL('../../images/krym.jpg', import.meta.url);
export const yalta = new URL('../../images/yalta.jpg', import.meta.url);
export const sevastopol = new URL('../../images/sevastopol.jpg', import.meta.url);
export const ayPetri = new URL('../../images/ay-petri.jpg', import.meta.url);
export const balaklava = new URL('../../images/balaklava.jpg', import.meta.url);
export const bakhchisaray = new URL('../../images/bakhchisaray.jpg', import.meta.url);

export const initialCards = [
  {
    name: 'Крым',
    link: krym
  },
  {
    name: 'Ялта',
    link: yalta
  },
  {
    name: 'Севастополь',
    link: sevastopol
  },
  {
    name: 'Ай-Петри',
    link: ayPetri
  },
  {
    name: 'Балаклава',
    link: balaklava
  },
  {
    name: 'Бахчисарай',
    link: bakhchisaray
  }
];