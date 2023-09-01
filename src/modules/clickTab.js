function clickTab(parent, _e) {
  const menuProductsItems = _e.closest('.menu_products__items').querySelectorAll('.menu_products__item');
  const tabcontent = document.querySelector('.' + parent + ' .tabcontents').querySelectorAll('.tabcontent')
  console.log(tabcontent);
  menuProductsItems.forEach((e, i) => {
    e.classList.remove('active');
    tabcontent[i].classList.add('hidden');
    if (e === _e) {
      e.classList.add('active')
      tabcontent[i].classList.remove('hidden');
    }
  });
}

export default clickTab;