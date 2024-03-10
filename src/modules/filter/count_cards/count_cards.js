





const COUNT_ELEMENTS = document.querySelector('.catalog_products__bottom-count');
import { urlJsonServer } from '../../GlobalVariable';
import printCard from "../../catalog/printCard";
import { getQuery, transformData, postQuery } from "../../fetch/fetch";
import convertObjectToInArray from "../../function/convertObjectToInArray";
import { state } from '../../state/state';
import { createQuery } from '../../filter/asideFilter/aside_filter';
COUNT_ELEMENTS && COUNT_ELEMENTS.addEventListener('change', (e) => countElementsChange(e));

async function countElementsChange() {
    const SHOW_LIST = document.querySelector('.search-product__off .catalog_product-grid');
    const COUNT_INDEX = COUNT_ELEMENTS.selectedOptions[0].innerText;
    setCountLocalStorage(COUNT_INDEX);
    const catalogs = (SHOW_LIST.dataset.catalogs).split(' ');
    console.log(catalogs)
    let result;
    if (state.arraySelectElements.length === 0) {//Якщо немає фільтрів
        result = transformData(await getQuery(urlJsonServer + 'shop/', 'category', catalogs, 'rand()', null));
        result = result.slice(0, getCountLimitLocalStorage());

        // result = transformData(await getQuery(urlJsonServer + 'shop/', 'category', catalogs, 'rand()', 'limit=' + getCountLimitLocalStorage()));
        console.log(result);

    } else {
        result = transformData({ data: await postQuery(urlJsonServer + 'shop/', JSON.stringify([{ select: createQuery() }])) });
        console.log(result)
        console.log(result.slice(0, getCountLimitLocalStorage()))
        result = result.slice(0, getCountLimitLocalStorage());
    }
    printCard(convertObjectToInArray(result, new Array()), catalogs, '.search-product__off .catalog_product-grid');
}

export function getCountLimitLocalStorage() {
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




