import { transformData, getQueryAll } from "../fetch/fetch";
import convertObjectToInArray from "../function/convertObjectToInArray";
import { PRODUCTHTML, CATALOGHTML, urlJsonServer } from '../GlobalVariable';
// import printBreadCrumbs from '../function/print_bead_crumbs.js'
import printCard from "./printCard";
import printSubCatalog from "./printSubCatalog";

const count = 15;


async function searchCatalogCreateCard(searchText) {
    // if (!(searchText === "")) {
    if (searchText) {
        const result = transformData(await getQueryAll(urlJsonServer + 'shop/', searchText))
        printCard(result, '.catalog_product-grid-search');
    } else {
        printCard({}, '.catalog_product-grid-search');
    }

}

export default searchCatalogCreateCard;

