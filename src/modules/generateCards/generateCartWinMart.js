
import { PRODUCTHTML } from '../GlobalVariable';

function generateCartsWinMart(data, clases, count) {
    const cartListWrapper = document.querySelector(clases);
    try {
        for (let i = 0; i < count; i++) {

            const cartItemHTML = `   <li class="winmart_product collect_data data-click-card"  
 
        data-catalogs="${data[i].catalog}" 

        data-level_catalog="1000"
        data-id="${data[i] && data[i].id}">
        <a href="${PRODUCTHTML}" class="winmart_product__link-img">
            <img src="${data[i] && data[i].images[0].img}" alt="${data[i] && data[i].images[0].alt}"
                class="product-img winmart_product_img">
        </a>
        <div class="winmart_product__text">
            <button class="btn" data-cart data-click-card data-btn_card  data-cart="cart_list__cart" >Add to card</button>
            <p class="winmart_product_price"><span class="valuta">UA</span> <span
                    class="cena">${data[i] && data[i].newPrice}</span>
            </p>
        </div>
    </li> `
            if (cartListWrapper) cartListWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
        }
    } catch (e) {
        console.error(e)
    }
}
// data-catalog_00="${data[i].catalog[0]}" 
// data-catalog_01="${data[i].catalog[1]}"  
// data-catalog_02="${data[i].catalog[2]}" 
export default generateCartsWinMart;