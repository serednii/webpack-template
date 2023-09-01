import totalPrice from './totalPrice';
import countCartAndIcon from './countCartAndIcon';
import { addMessage, removeMessage } from './addRemoveMessage';
import { addLocalStorage } from './addLocalStorage';
import cardShablon from './cardShablon';
function cardList(btn) {

    const classCart = '.' + btn.closest('.data-click-card').dataset.cart;


    const cartListWrapper = document.querySelector(`${classCart} .cart_list__list`); //Вся карточка

    const card = btn.closest('.collect_data');
    if (!card) return;

    const productInfo = {
        id: card.dataset.id,
        category: card.dataset.catalog_00,
        subCategory: card.dataset.catalog_01,
        lastCategory: card.dataset.catalog_02,
        imgSrc: card.querySelector('.product-img').getAttribute('src'),
        alt: card.querySelector('.product-img').getAttribute('alt'),
        title: card.querySelector('.sale_products_card-title, .card__title') ? card.querySelector('.sale_products_card-title, .card__title').innerText : "Товар",
        nameProduct: card.querySelector('.sale_products-card-name, .card__name') ? card.querySelector('.sale_products-card-name, .card__name').innerText : "Товар",
        oldPrice: card.querySelector('.cena') ? card.querySelector('.cena').innerText : "00",
        newPrice: card.querySelector('.cena').innerText,
    };

    let itemInCart;

    if (classCart === '.cart_list__cart') {
        addLocalStorage(productInfo, 'cart');//Добавляємо товар в LOCAL STORAGE, якщо він є то видаляється , якщо нема то добавляється
    } else if (classCart === '.cart_list__likes') {
        addLocalStorage(productInfo, 'likes');//Добавляємо товар в LOCAL STORAGE, якщо він є то видаляється , якщо нема то добавляється
    } else return;

    if (cartListWrapper) itemInCart = cartListWrapper.querySelector(`[data-id="${productInfo.id}"]`); //Шукаємо  id з товаром  в карточках
    else return;





    if (itemInCart) {
        // Якщо товар є в корзині
        itemInCart.remove();//видаляємо елемент
        if (classCart === '.cart_list__cart') {
            btn.innerText = "Add to cart";//Міняємо напис
        } else if (classCart === '.cart_list__likes') {
            btn.closest('.heart_wrap').classList.remove('add_card');
        }

        addMessage(btn, classCart);//Добавляє в карточку У вас немає добавлених товарів
    } else {
        removeMessage(cartListWrapper); //Видаляє з карточки У вас немає добавлених товарів
        // Якщо товара нема в корзині
        if (classCart === '.cart_list__cart') {
            btn.innerText = "Remove to cart";//Міняємо напис
        } else if (classCart === '.cart_list__likes') {
            btn.closest('.heart_wrap').classList.add('add_card');
        }


        cardShablon(cartListWrapper, productInfo);
    }
    countCartAndIcon(classCart);
    if (classCart == '.cart_list__cart') {
        totalPrice();
    }
}



export default cardList;

