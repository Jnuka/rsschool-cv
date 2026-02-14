export class ModalWindow {
  constructor ({title, img}) {
    this.overlay = '';
    this.modal = '';
    this.wrapper = '';
    this.title = title;
    this.img = img;
  }

  bildModalWindow(content) {
    this.overlay = document.createElement('div');
    this.overlay.className = 'overlay';

    this.modal = document.createElement('div');
    this.modal.className = 'modal';

    this.wrapper = document.createElement('div');
    this.wrapper.className = 'modal__wrapper';


    this.setContentForModal(content);
    this.appendModalElements();
    this.closeEvents();
    this.openModalWindow();
  }

  setContentForModal(content) {
    if (typeof content == 'string') {
      this.wrapper.innerHTML = content;
    } else {
      this.wrapper.innerHTML = '';
      this.wrapper.appendChild(content);
    }
  } 

  appendModalElements() {
    this.modal.append(this.wrapper);
    this.overlay.append(this.modal);
  }

  closeEvents() {
    this.overlay.addEventListener("click", this.closeModalWindow);
  }

  openModalWindow() {
    document.body.append(this.overlay);
  }

  closeModalWindow(e) {
    console.log('close2');
    let target = e.target.classList;
    if (target.contains('overlay')) {
      
      let overlay = document.querySelector('.overlay');
      if (overlay) {
        overlay.remove();
      }
      document.body.classList.remove('body__no-scroll');
    }
  }

  generateInterestForModalTemplate() {
    let modal = document.createElement('div');
    modal.className = 'modal__inner';

    let template = '';
    template += `<h2 class="modal__title">${this.title}</h2>`;
    template += `<img class="modal__img" src=${this.img} alt="${this.title}">`;
    template += `</div>`;
    modal.innerHTML = template;
    return modal;
  }

  renderModal() {
    let content = this.generateInterestForModalTemplate();
    this.bildModalWindow(content);
  }
}
