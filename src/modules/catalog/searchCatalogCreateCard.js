import { transformData, getQueryAll } from "../fetch/fetch";
import convertObjectToInArray from "../function/convertObjectToInArray";
import { PRODUCTHTML, CATALOGHTML, urlJsonServer } from '../GlobalVariable';
// import printBreadCrumbs from '../function/print_bead_crumbs.js'
import printCard from "./printCard";
import printSubCatalog from "./printSubCatalog";

const count = 15;


async function searchCatalogCreateCard(searchText) {
    // async function searchCatalogCreateCard(searchText, dataGlobalJson) {
    if (!(searchText === "")) {

        const result = transformData(await getQueryAll(urlJsonServer + 'shop/', searchText))
        // console.log(result.json())
        printCard(result, '.catalog_product-grid-search');
    } else {
        printCard({}, '.catalog_product-grid-search');
    }


    // const cartListWrapper = document.querySelector('.catalog_product-grid');

    // const title = document.querySelector('.catalog_products__title');
    // const subCatalogListWrapper = document.querySelector('.catalog_products  .catalog_list');

    // let result = convertObjectToInArray(dataGlobalJson, new Array());

    // result = result.filter(object => {
    //     for (const key in object) {

    //         if (!Array.isArray(object[key])) {

    //             if (key.toLowerCase().includes(searchText.toLowerCase())) {
    //                 console.log(`${key}  ${object[key]}`);
    //                 return true;
    //             }

    //             if (object[key].toLowerCase().includes(searchText.toLowerCase())) {
    //                 return true;
    //             }

    //         } else {
    //         }

    //     }
    // }
    // )


}

export default searchCatalogCreateCard;

