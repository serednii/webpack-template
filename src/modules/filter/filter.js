
const FILTER_ELEMENTS = document.querySelector('.catalog_products__bottom-sort');



FILTER_ELEMENTS && FILTER_ELEMENTS.addEventListener('change', (e) => filter(e));

function filter(e) {
    console.log(FILTER_ELEMENTS.selectedOptions[0])
    console.log(FILTER_ELEMENTS.selectedIndex)
    console.log(FILTER_ELEMENTS.value)
    const SORT_INDEX = FILTER_ELEMENTS.selectedIndex;
    const SHOW_LIST = document.querySelector('.catalog_product-grid');
    const CARDS = Array.prototype.slice.call(document.querySelectorAll('.catalog_product-grid .catalog_product-grid_cart'));
    // console.log(CARDS)
    CARDS.forEach(e => {
        const cena = e.dataset.price;
        // console.log(cena);
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

    // console.log(CARDS);

    CARDS.forEach(e => {
        const cena = e.querySelector('.catalog_product-price-value.cena').innerText;
        SHOW_LIST.insertAdjacentElement('beforeend', e)
    })

}



// const items = [
//     { name: "Edward", value: 21 },
//     { name: "Sharpe", value: 37 },
//     { name: "And", value: 45 },
//     { name: "The", value: -12 },
//     { name: "Magnetic", value: 13 },
//     { name: "Zeros", value: 37 },
// ];





// async function sss() {
//     console.log('IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII')
//     console.log(items)
//     await sorttt();
//     console.log(items)
// }

// function sorttt() {
//     return new Promise(resolve => {
//         items.sort((a, b) => a.value - b.value);
//         resolve();
//     });

// }

// sss();