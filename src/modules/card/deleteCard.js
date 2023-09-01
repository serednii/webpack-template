import { addLocalStorage } from "./addLocalStorage";
import { addMessage } from "./addRemoveMessage";
import countCartAndIcon from "./countCartAndIcon";
import totalPrice from "./totalPrice";
function deleteCard(btn, classs) {

    let cart = 'cart'
    if (classs === '.cart_list__likes') {
        cart = 'likes';
    }
    addLocalStorage({ id: btn.closest('.cart_list__list-ware').dataset.id }, cart)//передаємо id товару на видвлення з локал сторедж
    console.log(btn.closest('.cart_list__list-ware').dataset.id);
    btn.closest('.cart_list__list-ware').remove();
    countCartAndIcon(classs);
    totalPrice();
    addMessage(btn, classs);
    //Міняємо напис на кнопці товару на сторінці
    const dataIdTemp = btn.closest('.cart_list__list-ware').dataset.id;
    console.log(dataIdTemp)

    // console.log(document.querySelector(`[data-id="${dataIdTemp}"]`).querySelector('[data-btn_card]').innerText = "Remove to cart")
    classs === '.cart_list__cart' && document.querySelector(`[data-id="${dataIdTemp}"]`) &&
        document.querySelector(`[data-id="${dataIdTemp}"]`).querySelector('[data-btn_card]') &&
        (document.querySelector(`[data-id="${dataIdTemp}"]`).querySelector('[data-btn_card]').innerText = "Add to cart")

    classs === '.cart_list__likes' && document.querySelector(`[data-id="${dataIdTemp}"]`) &&
        document.querySelector(`[data-id="${dataIdTemp}"]`).querySelector('[data-btn_like]') &&
        (document.querySelector(`[data-id="${dataIdTemp}"]`).querySelector('[data-btn_like]').classList.remove('add_card'))
}
export default deleteCard;

