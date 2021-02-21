const profilePopup = document.querySelector('.profile-popup');
const openPopupBtn = document.querySelector('.profile__edit-button');
const profileForm = profilePopup.querySelector('.profile-form');
const nameInput = profilePopup.querySelector('.popup__input_name');
const profileName = document.querySelector('.profile__name');
const hobbyInput = profilePopup.querySelector('.popup__input_hobby');
const profileHobby = document.querySelector('.profile__hobby');
const picPopup = document.querySelector('.image-popup__pic'); 
const titlePopup = document.querySelector('.image-popup__title');
const templateElement = document.querySelector('.template').content;
const ESC_CODE = "Escape";
const disabledFormElementAdd = document.querySelector('.add-button');
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
  const cardsMappedArray = initialCards.map(getItem)
  containerElements.append(...cardsMappedArray);
}

function getItem(item) {
  
  const element = templateElement.querySelector('.element');
  const newElement = element.cloneNode(true);
  const elementImage = newElement.querySelector('.element__image');
  const elementPlace = newElement.querySelector('.element__place');
  elementPlace.textContent = item.name;
  elementImage.src = item.link;
  elementImage.alt = item.name;
  
  const removeBtn = newElement.querySelector('.element__basket');
  removeBtn.addEventListener('click', deleteCard);

  const likeBtn = newElement.querySelector('.element__like');
  likeBtn.addEventListener('click', likeCard);

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
  closePopup(addCardPopup);
  
  disabledFormElementAdd.setAttribute("disabled", true);
  disabledFormElementAdd.classList.add('popup__save-button_inactive');
}

render();


openFormBtn.addEventListener('click', () => {openPopup(addCardPopup)});
formElementAdd.addEventListener('submit', handleAdd);

// лайки в карточках
function likeCard(event) {
  const targetEl = event.target;
  targetEl.classList.toggle("element__like_active");
}

// удаление карточек
function deleteCard(event) {
  const targetEl = event.target;
  const targetItem = targetEl.closest('.element');
  targetItem.remove();
}

// открытие картинок

const imagePopup = document.querySelector('.image-popup');

function openImage(item) {
  picPopup.src= item.link;
  titlePopup.textContent = item.name;
  openPopup(imagePopup)
}