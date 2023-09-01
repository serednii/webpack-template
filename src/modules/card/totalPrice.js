
function totalPrice() {
    const countCartList = document.querySelectorAll('.cart_list__list-ware');
    const priceCardTotal = document.querySelector('.cart_list__cart .cart_list__bottom-price .cena');
    let totalPrice = 0;
    countCartList.forEach(e => totalPrice += parseFloat(e.querySelector('.cena').innerText));
    console.log(totalPrice)
    priceCardTotal.innerText = totalPrice.toFixed(3);
}

export default totalPrice;

