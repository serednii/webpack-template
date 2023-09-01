
export function addMessage(btn, cart) {
    console.log(btn)
    console.log(cart)

    const cartListWrapper = document.querySelector(`${cart} .cart_list__list`);
    console.log(cartListWrapper)
    const countCartList = document.querySelectorAll('.cart_list__list-ware');//Кількість елементів в карточці
    if (countCartList.length === 0) {
        const messeg_card = cart === '.cart_list__cart' ?
            `<h2 class="cart_list__list-none">У вас немає добавлених товарів</h2>` :
            `<h2 class="cart_list__list-none">У вас немає улюблених товарів</h2>`;
        cartListWrapper.insertAdjacentHTML('beforeend', messeg_card);
    }
}

export function removeMessage(cartListWrapper) {
    const countCartList = document.querySelectorAll('.cart_list__list-ware');//
    if (countCartList.length === 0) {
        const ele = cartListWrapper.querySelector('.cart_list__list-none');
        if (ele) ele.remove();
    }
}








