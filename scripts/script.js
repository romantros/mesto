// редактирование профиля
 overlay = document.querySelector('.popup');
let openPopupBtn = document.querySelector('.profile__edit-button');
let closePopupBtn = overlay.querySelector('.popup__close');
let formElement = overlay.querySelector('.popup__container');
let nameInput = overlay.querySelector('.popup__edit_name');
let profileName = document.querySelector('.profile__name');
let jobInput = overlay.querySelector('.popup__edit_hobby');
let profileHobby = document.querySelector('.profile__hobby');



let togglePopup = function(evt) {
    evt.preventDefault();
    if(overlay.className === 'popup') {
        nameInput.value = profileName.textContent;
        jobInput.value = profileHobby.textContent;
    }
    overlay.classList.toggle('popup_opened');
}

let closePopup = function(evt) {
    if (evt.target === evt.currentTarget) {
        togglePopup(evt);
    }
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileHobby.textContent = jobInput.value;
    togglePopup(evt);
}

openPopupBtn.addEventListener('click', togglePopup);
closePopupBtn.addEventListener('click', togglePopup);
overlay.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);

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

let form = document.querySelector('.form');
let openFormBtn = document.querySelector('.profile__add-button');
let closeFormBtn = form.querySelector('.form__close');
const formElementAdd = form.querySelector('.form__container');

const containerElements = document.querySelector('.elements');
const placeInput = form.querySelector('.form__add_place');
const linkInput = form.querySelector('.form__add_link');


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
  
  const removeBtn = newElement.querySelector('.element__basket');
  removeBtn.addEventListener('click', dlt);

  const likeBtn = newElement.querySelector('.element__like');
  likeBtn.addEventListener('click', like);

  const imageBtn = newElement.querySelector('.element__image');
  imageBtn.addEventListener('click', openImage);

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
  toggleForm(evt);
}

render();



let toggleForm = function(evt) {
    //evt.preventDefault();
    if(form.className === 'form') {
        
    }
    form.classList.toggle('form_opened');
}

let closeForm = function(evt) {
    if (evt.target === evt.currentTarget) {
        toggleForm(evt);
    }
}


openFormBtn.addEventListener('click', toggleForm);
closeFormBtn.addEventListener('click', toggleForm);
form.addEventListener('click', closeForm);
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

let image = document.querySelectorAll('.element__image');
const togglePopupImage = document.querySelector('.popup-image');
let pic = togglePopupImage.querySelector('.popup-image__pic');
let closePopupImageBtn = togglePopupImage.querySelector('.popup-image__close');

function openImage(event) {
  const targetEl = event.target;
  const targetItem = targetEl.closest('.element');
  const targetTitle = targetItem.querySelector('.element__place');
  const picPopup = togglePopupImage.querySelector('.popup-image__pic'); 
  const titlePopup = togglePopupImage.querySelector('.popup-image__title');
  
  picPopup.src= targetEl.src;
  titlePopup.textContent = targetTitle.textContent;

  togglePopupImage.classList.toggle("popup-image_opened");
}

function closeImage() {
  togglePopupImage.classList.toggle("popup-image_opened");
}

// let toggleImage = function() {
//   togglePopupImage.classList.toggle("popup-image_opened");
  
// }
// let popupImageTitle = togglePopupImage.querySelector('.popup-image__title');

// for (let i = 0; i < image.length; i++) {
//         let toggleImage = function() {
//           const elementPlace = document.querySelectorAll('.element__place');
//           togglePopupImage.classList.toggle("popup-image_opened");
//           pic.src = image[i].src;
//           popupImageTitle.textContent = elementPlace[i].textContent;
//         }
//         image[i].addEventListener('click', toggleImage);
//    }
const closePopupImage = function(event) {
      if (event.target === event.currentTarget) {
               closeImage(event);
           }
       }
       closePopupImageBtn.addEventListener('click', closeImage);
       togglePopupImage.addEventListener('click', closePopupImage);
       
       