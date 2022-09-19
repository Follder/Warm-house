import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timers from './modules/timers';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  let modalState = {};
  let deadline = '2022-09-25';

  changeModalState(modalState);
  modals();
  tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
  tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
  forms(modalState);
  tabs('.balcon_icons', '.balcon_icons_img', '.big_img img', 'do_image_more', 'inline-block');
  timers('.container1', deadline);
  images();
});

/* 
  Івент на картинки
  створити модальне вікно .popup
  створити img, змінити src на src картинок
  закривати новму модалку по кліку на підложку
*/