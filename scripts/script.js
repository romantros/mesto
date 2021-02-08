const profilePopup = document.querySelector('.profile-popup');
const openPopupBtn = document.querySelector('.profile__edit-button');
const closePopupBtn = profilePopup.querySelector('.popup__close');
const profileForm = profilePopup.querySelector('.profile-form');
const nameInput = profilePopup.querySelector('.popup__input_name');
const profileName = document.querySelector('.profile__name');
const hobbyInput = profilePopup.querySelector('.popup__input_hobby');
const profileHobby = document.querySelector('.profile__hobby');
const picPopup = document.querySelector('.image-popup__pic'); 
const titlePopup = document.querySelector('.image-popup__title');
   
// редактирование профиля

function togglePopup(popup) {
  popup.classList.toggle('popup_opened');
}

const toggleProfilePopup = function() {
    profilePopup.classList.toggle('popup_opened');
}

function openProfilePopup() {
  nameInput.value = profileName.textContent;
  hobbyInput.value = profileHobby.textContent;
  toggleProfilePopup()
}

const popups = document.querySelectorAll('.popup')

      popups.forEach((popup) => {
          popup.addEventListener('click', (evt) => {
              if (evt.target.classList.contains('popup_opened')) {
                  togglePopup(popup)
              }
              if (evt.target.classList.contains('popup__close')) {
                togglePopup(popup)
              }
          })
      }) 

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileHobby.textContent = hobbyInput.value;
    toggleProfilePopup(evt);
}

openPopupBtn.addEventListener('click', openProfilePopup);
closePopupBtn.addEventListener('click', toggleProfilePopup);
profileForm.addEventListener('submit', formSubmitHandler);

// добавление карточки


const initialCards = [
  {
    name: 'Крым',
    link: 'images/krym.jpg'
  },
  {
    name: 'Ялта',
    link: 'images/yalta.jpg'
  },
  {
    name: 'Севастополь',
    link: 'images/sevastopol.jpg'
  },
  {
    name: 'Ай-Петри',
    link: 'images/ay-petri.jpg'
  },
  {
    name: 'Балаклава',
    link: 'images/balaklava.jpg'
  },
  {
    name: 'Бахчисарай',
    link: 'images/bakhchisaray.jpg'
  }
]; 

const addCardPopup = document.querySelector('.new-card-popup');
const openFormBtn = document.querySelector('.profile__add-button');
const closeFormBtn = addCardPopup.querySelector('.popup__close');
const formElementAdd = addCardPopup.querySelector('.add-form');

const containerElements = document.querySelector('.elements');
const placeInput = addCardPopup.querySelector('.popup__input_place');
const linkInput = addCardPopup.querySelector('.popup__input_link');


function render() {
  const html = initialCards.map(getItem)
  containerElements.append(...html);
}

function getItem(item) {
  const templateElement = document.querySelector('.template').content;
  const element = templateElement.querySelector('.element');
  const newElement = element.cloneNode(true);
  const elementImage = newElement.querySelector('.element__image');
  const elementPlace = newElement.querySelector('.element__place');
  elementPlace.textContent = item.name;
  elementImage.src = item.link;
  elementImage.alt = item.name;
  
  const removeBtn = newElement.querySelector('.element__basket');
  removeBtn.addEventListener('click', dlt);

  const likeBtn = newElement.querySelector('.element__like');
  likeBtn.addEventListener('click', like);

  elementImage.addEventListener('click', () => {
    openImage(item) 
  });

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
  toggleAddCardPopup(evt);
}

render();



const toggleAddCardPopup = function() {
  togglePopup(addCardPopup)
}

openFormBtn.addEventListener('click', toggleAddCardPopup);
closeFormBtn.addEventListener('click', toggleAddCardPopup);
formElementAdd.addEventListener('submit', handleAdd);

// лайки в карточках
function like(event) {
  const targetEl = event.target;
  targetEl.classList.toggle("element__like_active");
}

// удаление карточек
function dlt(event) {
  const targetEl = event.target;
  const targetItem = targetEl.closest('.element');
  targetItem.remove();
}

// открытие картинок

const imagePopup = document.querySelector('.image-popup');
const closePopupImageBtn = imagePopup.querySelector('.image-popup__close');

function openImage(item) {
  picPopup.src= item.link;
  titlePopup.textContent = item.name;
  togglePopup(imagePopup)
}

function closeImage() {
  togglePopup(imagePopup)
}

closePopupImageBtn.addEventListener('click', closeImage);
     
       