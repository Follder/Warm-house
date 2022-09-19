const checkNumInput = (inputSelector) => {

  const validateInput = document.querySelectorAll(inputSelector);

  validateInput.forEach(item => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/\D/, '');
    });
  });

};

export default checkNumInput;