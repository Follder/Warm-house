import closeAllModals from "./closeAllModals";

const modals = () => {
  function bindModals(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector),
          scroll = calcScroll();

console.log(scroll);

    trigger.forEach(item => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();

          closeAllModals();

          modal.classList.add('modal-open', 'show');
          document.body.style.overflow = 'hidden';
          document.body.style.marginRight = `${scroll}px`;
        }
      });
    });
  
    close.addEventListener('click', () => {

      closeAllModals();

      modal.classList.remove('modal-open', 'show');
      document.body.style.marginRight = `0px`;
      document.body.style.overflow = '';
    });
  
    modal.addEventListener('click', (e) => {
  
      if (e.target === modal && closeClickOverlay) {

        closeAllModals();

        modal.classList.remove('modal-open', 'show');
        document.body.style.marginRight = `0px`;
        document.body.style.overflow = '';
      }
    });
  }

  function showTimeModal(selector, time) {
    setTimeout(function() {
      document.querySelector(selector).classList.add('modal-open', 'show');
    }, time);
  }

  function calcScroll() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }

  bindModals('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModals('.phone_link', '.popup', '.popup .popup_close');
//  showTimeModal('.popup', 60000);
  bindModals('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
  bindModals('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
  bindModals('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
};

export default modals;
