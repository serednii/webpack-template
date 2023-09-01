import { PRODUCTHTML } from "../GlobalVariable";
// ***************************************************************************
function printCard(objectData, catalogs, clases) {
    const cartListWrapper = document.querySelector(clases);
    console.log('5555555555555555555555555555555555555555555555555555555555555555555555555555555555');

    console.log(clases);

    if (!cartListWrapper) return
    // const elements = cartListWrapper.querySelectorAll('.catalog_product-grid_cart');
    // if (elements) elements.forEach(e => e.remove());//якщо є картки то видаляємо
    cartListWrapper.innerHTML = '';
    cartListWrapper.dataset.catalogs = catalogs.join(' ');
    objectData && objectData.forEach(el => {
        // console.log(el.images)
        const cartItemHTML = `<li class="catalog_product-grid_cart collect_data data-catalog-level" 
            data-catalogs="${el.category && el.category}" 
            data-rating="${el.rating && el.rating}"
            data-sales="${el.sales && el.sales}"
            data-price="${el.newPrice && el.newPrice}"
            data-level_catalog="1000"
            data-id="${el.id && el.id}"
            >
                <div class="catalog_product-grid_cart-box"></div>

                <div class="heart_wrap data-click-card" data-btn_like  data-cart="cart_list__likes">
                    <button class="catalog_product-heart-button">
                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.1 15.55L10 15.65L9.89 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 3 9.07 4.36H10.93C11.46 3 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55ZM14.5 0C12.76 0 11.09 0.81 10 2.08C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.41 0 5.5C0 9.27 3.4 12.36 8.55 17.03L10 18.35L11.45 17.03C16.6 12.36 20 9.27 20 5.5C20 2.41 17.58 0 14.5 0Z"
                                fill="black" />
                        </svg>
                    </button>
                </div>

                <a href="${PRODUCTHTML}" class="catalog_product__picture">
                    <img class="picture_1 product-img" src="${el.images[0] && el.images[0].img}"
                        alt="${el.images[0] && el.images[0].alt}">
                </a>
                <div class="catalog_product_content">
                    <a href="${PRODUCTHTML}" class="catalog_product-name--link">
                        ${el.title && el.title}
                    </a>

                    <div class="catalog_product__rating">
                        <a href="#">

                            <p class="star-rating" aria-label="4.5 stars out of 5">
                                <svg class="c-star active" width="32" height="32"
                                    viewBox="0 0 32 32">
                                    <use xlink:href="#star"></use>
                                </svg>
                                <svg class="c-star active" width="32" height="32"
                                    viewBox="0 0 32 32">
                                    <use xlink:href="#star"></use>
                                </svg>
                                <svg class="c-star active" width="32" height="32"
                                    viewBox="0 0 32 32">
                                    <use xlink:href="#star"></use>
                                </svg>
                                <svg class="c-star active" width="32" height="32"
                                    viewBox="0 0 32 32">
                                    <use xlink:href="#star"></use>
                                </svg>
                                <svg class="c-star " width="32" height="32" viewBox="0 0 32 32">
                                    <use xlink:href="#star" mask=url("#half")></use>
                                    <use xlink:href="#star"></use>

                                </svg>
                            </p>

                        </a>
                    </div>
                    <div class="catalog_product-prices">
                    <div class="catalog_product-rating-sales">
                    
                    <span class="catalog_product-rating">Рейтінг ${el.rating && el.rating}</span>
                    <span class="catalog_product-sales">Продано ${el.sales && el.sales}</span>

                    </div>
                    ${el.oldPrice !== 'null' ? `<div class="catalog_product-price--old">${el.oldPrice && el.oldPrice}<span
                                class="goods-tile__price-currency">₴</span></div>`: ""}

                         <div class="catalog_product-price--red ${el.oldPrice && el.oldPrice === 'null' ? "black-color" : ""}">
                            <p><span class="catalog_product-price-value cena">${el.oldPrice && el.newPrice}</span>
                                <span class="catalog_product-price-currency">₴</span>
                            </p>
                        </div>
                        <button class="btn catalog_product__cart data-click-card" data-btn_card data-cart="cart_list__cart" >
                        Add to cart
                        </button>
                    </div>


                </div>


            </li>
        `
        if (cartListWrapper) cartListWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
    });
}
// ***************************************************************************

export default printCard;


// data-catalog_00="${el.catalog[0]}"
// data-catalog_01="${el.catalog[1]}"
// data-catalog_02="${el.catalog[2]}" 