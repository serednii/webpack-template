import convertObjectToInArray from "../function/convertObjectToInArray";
import { urlJsonServer } from '../GlobalVariable';
import printBreadCrumbs from '../function/print_bead_crumbs.js'
import printSubCatalog from "./printSubCatalog";
import printCard from "./printCard";
import { getQuery, transformData, allDataSearch } from "../fetch/fetch";
import { getCountLocalStorage } from '../count_cards/count_cards';

// let page = 0;

async function catalogCreateCard(LevelCatalog, catalogs, categoryList) {
    // return new Promise(resolve => {    resolve();

    const title = document.querySelector('.catalog_products__title');
    const LIMIT = 25;
    if (LevelCatalog >= 0 && LevelCatalog <= 100) {
        if (LevelCatalog === 0) {
            title && (title.innerText = "Каталог всіх товарів");//Якщо перший головний рівень каталогу
        } else {
            printBreadCrumbs(LevelCatalog, catalogs);
            title && (title.innerText = catalogs[LevelCatalog - 1]);
        }
        printSubCatalog(LevelCatalog, catalogs, categoryList);
        // const DATA_PRODUCTS = transformData(await  getQuery(urlJsonServer + 'shop/', 'category', catalogs, 'rand()', 'limit=' + LIMIT));
        const DATA_PRODUCTS = transformData(await getQuery(urlJsonServer + 'shop/', 'category', catalogs, 'limit=' + getCountLocalStorage()));
        console.log(DATA_PRODUCTS);
        printCard(convertObjectToInArray(DATA_PRODUCTS, new Array()), catalogs, '.search-product__off .catalog_product-grid');
    }
}

export default catalogCreateCard;

// async function getData() {
//     let response = await fetch(urlSearch)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//         })
// }