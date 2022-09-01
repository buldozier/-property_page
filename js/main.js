/* Фильтр на мобилках */
const sidebar = document.querySelector('.sidebar');
const menuIcon = document.querySelector('.menu__icon');
const sidebarToggleBtn = document.querySelector('.menu__icon__wrapper');

// Обработчик нажатия вне сайдбара
document.addEventListener('click', e => {
  const inBondaries = e.composedPath().includes(sidebar);
  const inSidebarBtn = e.composedPath().includes(sidebarToggleBtn);

  if (sidebar.classList.contains('sidebar__mobile__active') && !inSidebarBtn && !inBondaries) {
    toggleSidebar();
    document.body.style = '';
  }
});

// Обработчик нажатия на кнопку сайдбара
sidebarToggleBtn.onclick = () => {
  toggleSidebar();
  if (sidebar.classList.contains('sidebar__mobile__active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style = '';
  }
};

// Функция открытия и закрытия сайдбара
const toggleSidebar = () => {
  menuIcon.classList.toggle('menu__icon__active');
  sidebar.classList.toggle('sidebar__mobile__active');
};

/* Кнопка показать еще карточки */
const showMoreBtn = document.querySelector('.show__more');
const cardHidden = document.querySelectorAll('.card__hidden');

showMoreBtn.onclick = () => {
  cardHidden.forEach(element => {
    element.classList.remove('card__hidden');
  });
};

/* Открытие и закрытие виджетов */
const widgets = document.querySelectorAll('.widget');

widgets.forEach(widget => {
  widget.addEventListener('click', e => {
    if (e.target.classList.contains('widget__title')) {
      e.target.classList.toggle('widget__title__active');
      e.target.nextElementSibling.classList.toggle('widget__body__hidden');
    }
  });
});

/* Кнопки локации */

const locationBtn = document.querySelectorAll('.location__btn');

locationBtn.forEach(element => {
  element.addEventListener('click', e => {
    if (e.target.classList.contains('location__btn__big')) {
      locationBtn.forEach(element => {
        element.classList.remove('location__btn__active');
      });
      e.target.classList.add('location__btn__active');
    } else {
      document.querySelector('.location__btn__big').classList.remove('location__btn__active');
      e.target.classList.toggle('location__btn__active');
    }
  });
});

/* Показать еще чекбоксы или убрать */
const addOptionsBtn = document.querySelector('.add__options__btn');
const hiddenOptions = document.querySelectorAll('.options__hidden');

addOptionsBtn.onclick = function () {
  hiddenOptions.forEach(element => {
    element.classList.toggle('options__hidden');
  });
  if (this.innerHTML === 'Показать еще') {
    this.innerHTML = 'Скрыть дополнительные опции';
  } else {
    hiddenOptions.forEach(element => {
      element.children[0].checked = false;
    });
    this.innerHTML = 'Показать еще';
  }
};

/* Кнопка сбросить фильтры */
const resetFilters = document.querySelector('.reset__filters');
const bigBtnLocation = document.querySelector('.location__btn__big');
const radioBasic = document.querySelector('#basic__radio');
const checkboxes = document.querySelectorAll('.checkbox__real');
const toggleBasic = document.querySelector('.toggle__real');

resetFilters.onclick = () => {
  locationBtn.forEach(element => {
    element.classList.remove('location__btn__active');
  });
  bigBtnLocation.classList.add('location__btn__active');
  radioBasic.checked = true;
  checkboxes.forEach(element => {
    element.checked = false;
  });
  hiddenOptions.forEach(element => {
    element.classList.add('options__hidden');
  });
  addOptionsBtn.innerHTML = 'Показать еще';
  toggleBasic.checked = false;
};
