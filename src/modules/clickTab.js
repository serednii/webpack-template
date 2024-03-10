function clickTab(parent, _e) {
  const menuProductsItems = _e.closest('.menu_products__items').querySelectorAll('.menu_products__item');
  const tabContent = document.querySelector('.' + parent + ' .tabcontents').querySelectorAll('.tabcontent')
  menuProductsItems.forEach((e, i) => {
    e.classList.remove('active');
    tabContent[i].classList.add('hidden');
    if (e === _e) {
      e.classList.add('active')
      tabContent[i].classList.remove('hidden');
    }
  });
}

export default clickTab;