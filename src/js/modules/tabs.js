const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
  const header = document.querySelector(headerSelector),
  tabs = document.querySelectorAll(tabSelector),
  content = document.querySelectorAll(contentSelector);

  function hideTabContent() {
    content.forEach(item => item.style.display = 'none');
    tabs.forEach(item => item.classList.remove(activeClass));

  }

  function showTabContent(i = 0) {
    content[i].style.display = 'block';
    tabs[i].classList.add(activeClass);
  }

  header.addEventListener('click', (e) => {
    const target = e.target;

    if (target && (target.matches(tabSelector) || target.parentElement.matches(tabSelector))) {

      tabs.forEach((item, i) => {
        if (target == item || target.parentNode == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }

  });


};

export default tabs;