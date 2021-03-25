import '../pages/index.css';

import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import Popup from './Popup.js';
import UserInfo from './UserInfo.js';

const profilePopup = document.querySelector('.profile-popup');
const openPopupBtn = document.querySelector('.profile__edit-button');
const profileForm = profilePopup.querySelector('.profile-form');
const nameInput = profilePopup.querySelector('.popup__input_name');
const profileName = document.querySelector('.profile__name');
const hobbyInput = profilePopup.querySelector('.popup__input_hobby');
const profileHobby = document.querySelector('.profile__hobby');
const picPopup = document.querySelector('.image-popup__pic'); 
const titlePopup = document.querySelector('.image-popup__title');
const disabledFormElementAdd = document.querySelector('.add-button');
const ESC_CODE = "Escape";

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

const krym = new URL('../images/krym.jpg', import.meta.url);
const yalta = new URL('../images/yalta.jpg', import.meta.url);
const sevastopol = new URL('../images/sevastopol.jpg', import.meta.url);
const ayPetri = new URL('../images/ay-petri.jpg', import.meta.url);
const balaklava = new URL('../images/balaklava.jpg', import.meta.url);
const bakhchisaray = new URL('../images/bakhchisaray.jpg', import.meta.url);

const initialCards = [
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

// редактирование профиля
function openPopup(popup) {
  document.addEventListener('keydown', closeByEsc);
  popup.classList.add('popup_opened');
}
function closePopup(popup) {
  document.removeEventListener('keydown', closeByEsc);
  popup.classList.remove('popup_opened');
}

function openProfilePopup() {
  nameInput.value = profileName.textContent;
  hobbyInput.value = profileHobby.textContent;
  editFormValidator.resetValidation();
  openPopup(profilePopup)
  
}

const popups = document.querySelectorAll('.popup')

      popups.forEach((popup) => {
          popup.addEventListener('mousedown', (evt) => {
              if (evt.target.classList.contains('popup_opened')) {
                  closePopup(popup)
              }
              if (evt.target.classList.contains('popup__close')) {
                closePopup(popup)
              }
          })
          
      }) 

      function closeByEsc(evt) {
        
        
        if (evt.key === ESC_CODE) {
          const openedPopup = document.querySelector('.popup_opened');
          closePopup(openedPopup); 
        }
    } 

function submitProfileForm (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileHobby.textContent = hobbyInput.value;
    closePopup(profilePopup);
}

openPopupBtn.addEventListener('click', openProfilePopup);
profileForm.addEventListener('submit', submitProfileForm);

// добавление карточки



const addCardPopup = document.querySelector('.new-card-popup');
const openFormBtn = document.querySelector('.profile__add-button');
const formElementAdd = addCardPopup.querySelector('.add-form');
const containerElements = document.querySelector('.elements');
const placeInput = addCardPopup.querySelector('.popup__input_place');
const linkInput = addCardPopup.querySelector('.popup__input_link');


function render() {
  const cardsMappedArray = initialCards.map(element => getItem(element))
  containerElements.append(...cardsMappedArray);
}

function getItem(item) {
  const card = new Card(item, openImage, '.template')
  const newElement = card.generateCard()
  return newElement;
}


function handleAdd(evt) {
  evt.preventDefault();
  const name = placeInput.value;
  const link = linkInput.value;
  const listItem = getItem({name, link});
  containerElements.prepend(listItem);
  placeInput.value = ''
  linkInput.value = ''
  closePopup(addCardPopup);
  
  disabledFormElementAdd.setAttribute("disabled", true);
  disabledFormElementAdd.classList.add('popup__save-button_inactive');
}

render();

function openAddCardPopup() {
  formElementAdd.reset()
  addFormValidator.resetValidation()
  openPopup(addCardPopup)
}

openFormBtn.addEventListener('click', openAddCardPopup);
formElementAdd.addEventListener('submit', handleAdd);

// открытие картинок

const imagePopup = document.querySelector('.image-popup');

function openImage(name, link) {
  picPopup.src = link;
  picPopup.alt = name;
  titlePopup.textContent = name;
  const reset = false;
  openPopup(imagePopup, reset)
}

const addFormValidator = new FormValidator(validationSettings, formElementAdd);
addFormValidator.enableValidation();
const editFormValidator = new FormValidator(validationSettings, profileForm);
editFormValidator.enableValidation();