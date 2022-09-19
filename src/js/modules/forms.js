import checkNumInput from "./checkNumInput";
import closeAllModals from "./closeAllModals";

const forms = (state) => {
  const form = document.querySelectorAll('form'),
        input = document.querySelectorAll('input');

  const message = {
    loading: 'Please wait...',
    success: 'Tnanks, we`ll call you later',
    failure: 'Something wrong',
  };
  
  // валідація інпутів на числа
  checkNumInput('input[name="user_phone"]');

  // відправка даних на сервер
  const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;

    // в result запишеться проміс
    let result = await fetch(url, {
      method: 'POST',
      body: data, //formData
    });

    // перетворюєм проміс в об'єкт
    return await result.text();
  };

  // очистка інпутів в finally
  const clearInputs = () => {
    input.forEach(item => {
      item.value = '';
    });
  };

  form.forEach(item => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();
  
      // Виводимо текстове повідомлення
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.appendChild(statusMessage);

      // Збираємо всі дані форми об'єктом formdata
      const formData = new FormData(item);
      if (item.getAttribute('data-form') === 'end') {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }

      postData('assets/server.php', formData)
      
        .then(result => {
          console.log(result);
          statusMessage.textContent = message.success;
        })
        .catch(() => statusMessage.textContent = message.failure)
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
            closeAllModals('[data-modal]');

          }, 3000);
        });
    });
  });
};

export default forms;