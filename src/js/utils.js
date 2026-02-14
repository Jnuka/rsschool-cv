import { ModalWindow } from './class.modal-window.js';
import { interestJson } from './json.interest.js'; 

function convertJsonInterestToCars(jsonList) {
  let modalWindowMap = new Map();

  jsonList.forEach((jsonElement) => {
    modalWindowMap[jsonElement.title] = new ModalWindow(jsonElement);
  });  
  return modalWindowMap;
}

const INFO = convertJsonInterestToCars(interestJson);

document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.contact__img');
  let alt = '';
  cards.forEach(item => {
    item.addEventListener("click", (event) => { 
      if (event.currentTarget.closest('.contact__img')) {
        alt = event.currentTarget.closest('.contact__img').alt; 
        document.body.classList.toggle('body__no-scroll');
        INFO[alt].renderModal();
      }
    });
  })
})
