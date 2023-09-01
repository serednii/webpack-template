
function countCartAndIcon(cart) {
    const countCard = document.querySelectorAll(`${cart} .count`);
    const countCartIcon = document.querySelectorAll('.header__user .cart .number');
    const countHeartIcon = document.querySelectorAll('.header__user .heart .number');
    const countCartList = document.querySelector(cart).querySelectorAll('.cart_list__list-ware');
    if (cart == '.cart_list__cart') countCartIcon.forEach(e => e.innerText = countCartList.length);//
    if (cart == '.cart_list__likes') countHeartIcon.forEach(e => e.innerText = countCartList.length);//
    countCard.forEach(e => e.innerText = countCartList.length);//
}

export default countCartAndIcon;

