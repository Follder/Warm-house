const closeAllModals = (selector = '[data-modal]') => {
  const windows = document.querySelectorAll(selector);
  windows.forEach(item => {
    item.classList.remove('modal-open', 'show');
  });
};

export default closeAllModals;