





const COUNT_ELEMENTS = document.querySelector('.catalog_products__bottom-count');
import { urlJsonServer } from '../GlobalVariable';
import printCard from "../catalog/printCard";
import { getQuery, transformData } from "../fetch/fetch";
import convertObjectToInArray from "../function/convertObjectToInArray";

COUNT_ELEMENTS && COUNT_ELEMENTS.addEventListener('change', (e) => countElementsChange(e));

async function countElementsChange() {
    const SHOW_LIST = document.querySelector('.search-product__off .catalog_product-grid');
    // console.log(COUNT_ELEMENTS.selectedOptions[0].innerText);
    // console.log(COUNT_ELEMENTS.selectedIndex);
    // console.log(COUNT_ELEMENTS.value);
    const COUNT_INDEX = COUNT_ELEMENTS.selectedOptions[0].innerText;
    setCountLocalStorage(COUNT_INDEX);
    const catalogs = (SHOW_LIST.dataset.catalogs).split(' ');
    const DATA_PRODUCTS = transformData(await getQuery(urlJsonServer + 'shop/', 'category', catalogs, 'rand()', 'limit=' + getCountLocalStorage()));
    console.log(DATA_PRODUCTS);
    printCard(convertObjectToInArray(DATA_PRODUCTS, new Array()), catalogs, '.search-product__off .catalog_product-grid');
}

export function getCountLocalStorage() {
    let countIndex = localStorage.getItem('count_elements');
    console.log(countIndex)
    if (!countIndex) {
        countIndex = 20;
        setCountLocalStorage(countIndex);
    }
    COUNT_ELEMENTS && (COUNT_ELEMENTS.selectedOptions[0].innerText = countIndex);
    return countIndex;
}

export function setCountLocalStorage(countIndex) {
    console.log(countIndex)
    localStorage.setItem('count_elements', countIndex);
}




