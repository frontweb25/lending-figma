
const btnModal = document.querySelector('.button-open-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('[data-close]');

btnModal.addEventListener('click', openModal);
closeModal.addEventListener('click', hideModal);

function openModal() {
    modal.classList.remove('hide');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function hideModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

modal.addEventListener('click', (event) => {
    if(event.target === modal){
        hideModal();
        document.body.style.overflow = '';
    }
});

document.addEventListener('keydown', (event) => {
    if(event.code === 'Escape'){
        hideModal();
        document.body.style.overflow = '';
    }
});

function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        openModal();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }
  window.addEventListener('scroll', showModalByScroll);

