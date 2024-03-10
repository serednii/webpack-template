import convertObjectToInArray from "../function/convertObjectToInArray";
import { urlJsonServer } from '../GlobalVariable';
import printBreadCrumbs from '../bread_crumbs/print_bead_crumbs.js'
import printSubCatalog from "./printSubCatalog";
import printCard from "./printCard";
import { getQuery, transformData, allDataSearch } from "../fetch/fetch";
import { getCountLimitLocalStorage } from '../filter/count_cards/count_cards';


async function catalogCreateCard(LevelCatalog, catalogs, categoryList) {
    console.log(catalogs)
    const title = document.querySelector('.catalog_products__title');
    if (LevelCatalog >= 0 && LevelCatalog <= 100) {
        if (LevelCatalog === 0) {
            title && (title.innerText = "Каталог всіх товарів");//Якщо перший головний рівень каталогу
        } else {
            printBreadCrumbs(LevelCatalog, catalogs);
            title && (title.innerText = catalogs[LevelCatalog - 1]);
        }
        printSubCatalog(LevelCatalog, catalogs, categoryList);
        let result;
        if (catalogs.length === 0) {
            result = transformData(await getQuery(urlJsonServer + 'shop/', 'category', catalogs, null, 'limit=' + getCountLimitLocalStorage()));
        } else {
            result = transformData(await getQuery(urlJsonServer + 'shop/', 'category', catalogs, null, null));
        }
        result = result.slice(0, getCountLimitLocalStorage());
        // const DATA_PRODUCTS = transformData(await getQuery(urlJsonServer + 'shop/', 'category', catalogs, 'limit=' + getCountLimitLocalStorage()));
        console.log(result);
        printCard(convertObjectToInArray(result, new Array()), catalogs, '.search-product__off .catalog_product-grid');
    }
}

export default catalogCreateCard;
