// ***************************************************************************
import { CATALOGHTML } from '../GlobalVariable';

const breadcrumbsListWrapper = document.querySelector('.breadcrumbs');
let page = 0;
const count = 15;

function printBreadCrumbs(LevelCatalog, catalogs) {

    //Видаляємо  всі елементи
    const items = document.querySelectorAll('.breadcrumbs__item + .breadcrumbs__item + .breadcrumbs__item ')
    if (items) items.forEach(e => e.remove())


    console.log(LevelCatalog)
    console.log(catalogs)



    //Проходимо по масиві каталогу шляху 
    const crumbsItemHTML = catalogs.reduce(function (total, item, index, arr) {
        let strHtml = '';
        //Якщо  (LevelCatalog === 1000 або LevelCatalog < 1000 і при цьому то не останній елемент масива то друкуємо назву підкаталога з ссилкою
        if (LevelCatalog === 1000 || !((index + 1) === arr.length)) {
            strHtml = total + `
            <li class="breadcrumbs__item">
            <a class="breadcrumbs__link data-catalog-level" href="${CATALOGHTML}" data-catalogs="${arr.slice(0, index + 1).join(' ')}" data-level_catalog="${index + 1}">
                <span >${item}</span>
                <svg class="breadcrumbs__icon-chevron" width="8" height="12" viewBox="0 0 8 12" 
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.590027 10.59L5.17003 6L0.590027 1.41L2.00003 0L8.00003 6L2.00003 12L0.590027 10.59Z"
                        fill="black" />
                </svg>
            </a>
        </li>
            `
        } else {
            //Якщо то є останній елемент підкаталога то друкуємо назву підкаталога без ссилки
            strHtml = total + `
                <li class="breadcrumbs__item">
                <span class="breadcrumbs__link_end">
                    <span>${item}</span>
                    <svg class="breadcrumbs__icon-chevron" width="8" height="12" viewBox="0 0 8 12"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.590027 10.59L5.17003 6L0.590027 1.41L2.00003 0L8.00003 6L2.00003 12L0.590027 10.59Z"
                            fill="black" />
                    </svg>
                </span>
    
            </li>
            `
        }
        return strHtml;


    }, '')
    if (breadcrumbsListWrapper) breadcrumbsListWrapper.insertAdjacentHTML('beforeend', crumbsItemHTML);



}
export default printBreadCrumbs;

