const images = () => {
  const imgParent = document.querySelector('.works');
  
  const imgPopup = document.createElement('div');
  const bigImage = document.createElement('img');

  imgPopup.classList.add('popup');
  imgParent.appendChild(imgPopup);

  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';

  imgPopup.appendChild(bigImage);

  imgParent.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target;

    if (target && target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';
      document.querySelector('body').style.overflow = 'hidden';

      const path = target.parentNode.getAttribute('href');
      bigImage.setAttribute('src', path);
    }

    if (target && (target.classList.contains('popup'))) {
      imgPopup.style.display = 'none';
      document.querySelector('body').style.overflow = '';
    }

  });
};

export default images;