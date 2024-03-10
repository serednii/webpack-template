// ***************************************************************************
import { CATALOGHTML } from '../GlobalVariable';
import { urlJsonServer } from '../GlobalVariable';
import { createFormsSort } from '../filter/asideFilter/sort_products';

function printSubCatalog(LevelCatalog, catalogs, categoryList) {
    const subCatalogListWrapper = document.querySelector('.catalog_products  .catalog_list');
    const CATALOG_PRODUCT = document.querySelector('.catalog_product');
    const CATALOG_PRODUCT_FILTER_PARENT = document.querySelector('.catalog_product-filter_parent');
    console.log(catalogs);
    console.log(LevelCatalog);
    console.log(categoryList);


    if (LevelCatalog >= 0 && LevelCatalog <= 100) {
        let keyProduct = categoryList;

        const MENU_PATCH = [];
        for (let i = 1; i <= LevelCatalog; i++) {
            keyProduct = keyProduct[catalogs[i - 1]];//Переходимо по каталогу
            MENU_PATCH.push(catalogs[i - 1]);//Складаємо шлях по каталогу
        }
        console.log(keyProduct)

        const key = Object.keys(keyProduct);//Вибираємо підрозділи вданому рівні каталога

        key.forEach(_category => {//imgCategory
            if (typeof keyProduct[_category] !== 'string') {
                console.log(keyProduct[_category].imgCategory)
                createElement(MENU_PATCH, _category, LevelCatalog, subCatalogListWrapper, keyProduct[_category].imgCategory)
            }
        })

        console.log(MENU_PATCH)
        console.log(key.length)
        if (key.length === 1 && key[0] === 'imgCategory') {
            //Відключаємо фільтер
            CATALOG_PRODUCT_FILTER_PARENT.classList.remove('hidden');
            CATALOG_PRODUCT.classList.remove('disable_grid');
            createFormsSort(MENU_PATCH);
        } else {
            // Включаємо фільтер
            CATALOG_PRODUCT_FILTER_PARENT.classList.add('hidden');
            CATALOG_PRODUCT.classList.add('disable_grid');
        }
    } else {
        return;
    }
}

// ***************************************************************************
function createElement(MENU_PATCH, _category, LevelCatalog, subCatalogListWrapper, imgCategory) {
    const subCAtalogItemHTML = `
    <li class="catalog_item data-catalog-level"  data-catalogs="${[...MENU_PATCH, _category].join(' ')}" data-level_catalog="${LevelCatalog + 1}">
    <a href="${CATALOGHTML}">
        <img src="${imgCategory && imgCategory}" }">
    </a>
    <a href="${CATALOGHTML}">${_category && _category}</a>
    </li>
        `
    if (subCatalogListWrapper) subCatalogListWrapper.insertAdjacentHTML('beforeend', subCAtalogItemHTML);
}
export default printSubCatalog;