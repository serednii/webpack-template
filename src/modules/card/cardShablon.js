





function cardShablon(cartListWrapper, productInfo) {
    // console.log(cartListWrapper)
    // console.log(productInfo)


    // Собранные данные подставим в шаблон для товара в корзине
    const cartItemHTML = `<li class="cart_list__list-ware" data-category="${productInfo.category}" data-sub_category="${productInfo.subCategory}"
                        data-last_category="${productInfo.lastCategory}" data-id="${productInfo.id}">
                        <a class="cart_list__list-ware__link" href="#">
                            <div class="cart_list__list-ware__img_wrapper"> <img src="${productInfo.imgSrc}"
                                    alt="${productInfo.alt}"></div>
                            <div class="cart_list__list-ware_text">
                                <p>${productInfo.title}</p>
                                <p class="cart_list__list-ware_count">${productInfo.nameProduct} <span>1</span></p>
                                <span class="cart_list__list-ware_price"><span class="valuta">UA</span> <span
                                        class="cena">${productInfo.newPrice}</span></span>
                            </div>
                            <svg class="cart_list__list-ware_basket" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 6H5H21" stroke="black" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path
                                    d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
                                    stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10 11V17" stroke="black" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M14 11V17" stroke="black" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </a>
                    </li>`;
    cartListWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
}




export default cardShablon;

