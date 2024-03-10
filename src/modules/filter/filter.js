

//Selection of the number of cards on the page and sorting by rating, sales and price
const FILTER_ELEMENTS = document.querySelector('.catalog_products__bottom-sort');



FILTER_ELEMENTS && FILTER_ELEMENTS.addEventListener('change', (e) => filter(e));

function filter(e) {
    console.log(FILTER_ELEMENTS.selectedOptions[0])
    console.log(FILTER_ELEMENTS.selectedIndex)
    console.log(FILTER_ELEMENTS.value)
    const SORT_INDEX = FILTER_ELEMENTS.selectedIndex;
    const SHOW_LIST = document.querySelector('.catalog_product-grid');
    const CARDS = Array.prototype.slice.call(document.querySelectorAll('.catalog_product-grid .catalog_product-grid_cart'));
    CARDS.forEach(e => {
        const cena = e.dataset.price;
    })

    CARDS.sort((a, b) => {
        if (SORT_INDEX === 1 || SORT_INDEX === 2) {
            const cenaA = a.dataset.price;
            const cenaB = b.dataset.price;
            if (SORT_INDEX === 1) return cenaA - cenaB;
            if (SORT_INDEX === 2) return cenaB - cenaA;
        } else if (SORT_INDEX === 0) {
            const ratingA = a.dataset.rating;
            const ratingB = b.dataset.rating;
            return ratingB - ratingA;
        } else if (SORT_INDEX === 3) {
            const salesA = a.dataset.sales;
            const salesB = b.dataset.sales;
            return salesB - salesA;
        }

    })
    SHOW_LIST.innerHTML = '';


    CARDS.forEach(e => {
        const cena = e.querySelector('.catalog_product-price-value.cena').innerText;
        SHOW_LIST.insertAdjacentElement('beforeend', e)
    })

}
