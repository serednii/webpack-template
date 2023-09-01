import { removeMessage } from "./addRemoveMessage";
import cardShablon from "./cardShablon";
import countCartAndIcon from "./countCartAndIcon";
import totalPrice from "./totalPrice";


export function addLocalStorage(productInfo, cart) {

    let localSt = JSON.parse(localStorage.getItem(cart));
    if (Array.isArray(localSt)) {
        if (localSt.find(e => e.id === productInfo.id)) {//якщо товар є в локал сторедж то видаляємо
            localSt = localSt.filter(e => e.id !== productInfo.id)
        } else {
            localSt.push(productInfo);
        }
        localStorage.setItem(cart, JSON.stringify(localSt));
    } else {
        const arr = [productInfo];
        localStorage.setItem(cart, JSON.stringify(arr));
    }
}


export function stratLocalStorage(classs, cart) {

    const CART_LIST_WRAPPER = document.querySelector(`${classs} .cart_list__list`);//Вся карточка корзини

    //Дані з локал сторедж про вибрані товари в корзину
    const LOCAL_STORAGE_CART = JSON.parse(localStorage.getItem(cart));
    if (Array.isArray(LOCAL_STORAGE_CART)) {

        if (LOCAL_STORAGE_CART.length > 0) {
            removeMessage(CART_LIST_WRAPPER);//Видаляє повідомлення У вас немає добавлених товарів якщо в корзині будуть товари
        }

        //Перебираємо всі товари в карточці, шукаємо їх id на cторінці і позначаємо що вони є вибрвними в карточці або улюблених
        LOCAL_STORAGE_CART.forEach(e => {
            const DATA_ID = document.querySelector(`[data-id="${e.id}"]`);//Находимо id на сторінці

            //Для корзини
            cart === 'cart' && DATA_ID &&
                DATA_ID.querySelector('[data-btn_card]') &&
                (DATA_ID.querySelector('[data-btn_card]').innerText = "Remove to cart")

            //Для улюблених
            cart === 'likes' && DATA_ID &&
                DATA_ID.querySelector('[data-btn_like]') &&
                (DATA_ID.querySelector('[data-btn_like]').classList.add('add_card'))
            cardShablon(CART_LIST_WRAPPER, e);

        });

        totalPrice();
        countCartAndIcon(classs);

    }
}




