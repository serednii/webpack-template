
// SELECT * FROM `shop` WHERE `parameters` LIKE '%\\''%'

// const adsf = null ?? 'dkjhsshsif'
// const a = '' ?? 'problem';
// console.log(a)

import './index.html';
import './catalog.html';
import './index.scss';
import 'jquery-form-styler';
import 'ion-rangeslider';
import './modules/slider';
import './modules/timer_clock';
import './modules/filter/filter';
import './modules/filter/count_cards/count_cards';
import { urlJsonServer } from './modules/GlobalVariable';

import inputEye from './modules/input_eye';
import clickTab from './modules/clickTab';
import singInOpen from './modules/sing-in-open';
import singInClose from './modules/sing-in-close';
import formRegisterOpen from './modules/changeformregister';
import addRemoveClass from './modules/addRemoveClass';
import cardList from './modules/card/card';
import deleteCard from './modules/card/deleteCard';
import { stratLocalStorage } from './modules/card/addLocalStorage';
import generateCards from './modules/generateCards/generateCards';
import generateCardsBestDeals from './modules/generateCards/generate_card_best_deals';
import catalogCreateCard from './modules/catalog/catalogCreateCard';
import productCreateCart from './modules/product/product_create_cart';
import { dataGlobalJson } from './modules/GlobalVariable';
import searchCatalogCreateCard from './modules/catalog/searchCatalogCreateCard';
import { getQuery, transformData } from './modules/fetch/fetch';
import { getCountLimitLocalStorage } from './modules/filter/count_cards/count_cards';
import { clickTable, addTable } from './modules/selectParametersProducts/clickTable';
import { deleteParametersFilter, deleteParametersFilterAll } from './modules/filter/asideFilter/aside_filter';
import './modules/sort_products/range'


//Видаляє останній символ з строки
String.prototype.delOneLast = function () {
    return this.slice(0, -1)
}

start();
const hoverMainMenu = document.querySelector('.hover_maim_menu');
const body = document.body;

try {


    body.addEventListener('click', (e) => {
        // e.preventDefault();//Відміняє перегрузку сторінки
        e.stopPropagation();//Забороняє вспливання подій
        const targetElement = e.target
        const catalogLink = targetElement.closest('.data-catalog-level');
        // console.log(targetElement);


        if (targetElement.closest('.main-menu__icon-wrapper')) {
            const burger = targetElement.closest('.main-menu__icon-wrapper');
            burger.classList.toggle('open-burger');//open or close burger
            hoverMainMenu.classList.toggle('open-burger');//open or close menu
        } else if (!targetElement.closest('.hover_maim_menu')) {
            document.querySelectorAll('.main-menu__icon-wrapper').forEach((e) => e.classList.remove('open-burger'));;//when clicking outside the all burgers , we close it
            hoverMainMenu.classList.remove('open-burger');//when clicking outside the menu, we close it
        }

        if (targetElement.closest('.data-click-card')) {//клік на іконці улюблених товарів та  кнопці  товарів корзини
            cardList(targetElement);
        }


        else if (targetElement.closest('.cart_list__list-ware_basket')) {//Видаляємо картку з корзини i улюблених
            if (targetElement.closest('.cart_list__cart')) {
                deleteCard(targetElement, '.cart_list__cart');//корзини
            } else {
                deleteCard(targetElement, '.cart_list__likes');//улюблених
            }
        }

        else if (targetElement.closest('.our_products .menu_products__item')) {
            clickTab('our_products', targetElement);
        } else if (targetElement.closest('.bestdeals .menu_products__item')) {
            clickTab('bestdeals', targetElement);
        } else if (targetElement.classList.contains('eye')) {
            inputEye(targetElement);
        } else if (targetElement.classList.contains('sing-in')) {
            singInOpen();
        } else if (targetElement.closest('.sing-in-registration .menu_circle_close')) {
            singInClose();
        } else if (targetElement.classList.contains('sing-in-registration__btn-register') || targetElement.classList.contains('register')) {//Відкриває форму регістрації
            formRegisterOpen();
        }
        else if (targetElement.closest('.header__user .heart')) {//Відкриває форму з карточками уподобань
            addRemoveClass('.cart_list__likes', 'remove', 'hidden');
            addRemoveClass('body', 'add', 'overflov-hidden');
            addRemoveClass('.fon', 'remove', 'hidden');
        }
        else if (targetElement.closest('.header__user .cart')) {//Відкриває форму з карточками корзини
            addRemoveClass('.cart_list__cart', 'remove', 'hidden');
            addRemoveClass('body', 'add', 'overflov-hidden');
            addRemoveClass('.fon', 'remove', 'hidden');
        }
        else if (targetElement.closest('.cart_list_btn__close')) {
            addRemoveClass('.cart_list', 'add', 'hidden'); //Закриває форму з карточками корзини
            addRemoveClass('.cart_list__likes', 'add', 'hidden');//Закриває форму з карточками уподобань
            addRemoveClass('body', 'remove', 'overflov-hidden');//Відміняє прокручування форми
            addRemoveClass('.fon', 'add', 'hidden');//забирає фон
            addRemoveClass('.input_change_time', 'add', 'hidden');//закриває вікно на таймеру
        }
        else if (targetElement.closest('.header__user .user')) { //Відкриває форму особистого кабінету
            addRemoveClass('.user_button', 'remove', 'hidden');
            addRemoveClass('body', 'add', 'overflov-hidden');
            addRemoveClass('.fon', 'remove', 'hidden');
        }
        else if (targetElement.closest('.user_button_btn__close')) {//Закриває форму особистого кабінету
            addRemoveClass('.user_button', 'add', 'hidden');
            addRemoveClass('body', 'remove', 'overflov-hidden');
            addRemoveClass('.fon', 'add', 'hidden');
        }

        else if (catalogLink) { //При кліку на  підменю в каталозі При кліку на меню breadcrumbs
            if (catalogLink) {
                console.log('KLIC data-catalog-level')
                sessionStorage.setItem('catalogs', catalogLink.dataset.catalogs);
                sessionStorage.setItem('levelCatalog', catalogLink.dataset.level_catalog);
                sessionStorage.setItem('product_id', catalogLink.dataset.id);
            }
        }
        else if (targetElement.closest('.table-category-select .stroka')) {
            clickTable(targetElement);//При кліку на таблицю selectParametersProducts міняємо чексбокси і радіо кнопки
        }
        else if (targetElement.closest('.btn-add-table')) {
            addTable(targetElement);//При кліку на кнопку в низу таблиці вибрана інформаціє передається в базу даниз shop_category_filter
        }
        else if (targetElement.closest('.selected-filter_list .svg-close')) {
            deleteParametersFilter(targetElement);//При кліку на хрестик filter view удаляє вибрану позицію фільтра
        }
        else if (targetElement.closest('.selected-filters_deleted-filters')) {
            deleteParametersFilterAll(targetElement);//При кліку на хрестик filter view удаляє вибрану позицію фільтра
        }
    });

} catch (e) {
    console.log(e)
}



async function start() {
    let categoryListFilter = await getQuery(urlJsonServer + 'shop_category_filter');
    categoryListFilter = categoryListFilter[0];
    let categoryList = await getQuery(urlJsonServer + 'shop_category/');

    categoryList = categoryList.data[0];

    categoryList.category = JSON.parse(categoryList.category);

    categoryList = categoryList.category[0];
    console.log(categoryList);



    const xx = Object.keys(categoryList)

    console.log(window.location.pathname.length);
    //Якщо головна сторінка
    if (window.location.pathname.includes('/index.html') || window.location.pathname.length === 1) {


        generateCards(transformData(await getQuery(urlJsonServer + 'shop/', 'category', [], 'rand()', 'limit=10')), '.arrivals__cards .cards');
        generateCards(transformData(await getQuery(urlJsonServer + 'shop/', 'category', ['Електроніка---Гаджети---Ноутбуки'], '', 'limit=8')), '.easy_monthly .cards');
        generateCards(transformData(await getQuery(urlJsonServer + 'shop/', 'category', ['Електроніка---Гаджети---Смартфони'], '', 'limit=8')), '.on_sale .cards');
        generateCards(transformData(await getQuery(urlJsonServer + 'shop/', 'category', ['Компьютерная_техника---Ноутбуки_и_аксессуары---Ноутбуки'], '', 'limit=10')), '.top_rated .cards');

        generateCardsBestDeals(transformData(await getQuery(urlJsonServer + 'shop/', 'category', ['Електроніка---Гаджети---Компютери'], '', 'limit=5')), '.kitchen_appliances .bestdeals_main-cards');
        generateCardsBestDeals(transformData(await getQuery(urlJsonServer + 'shop/', 'category', ['Електроніка---Гаджети---Ноутбуки'], '', 'limit=5')), '.consoles .bestdeals_main-cards');
        generateCardsBestDeals(transformData(await getQuery(urlJsonServer + 'shop/', 'category', ['Електроніка---Гаджети---Смартфони'], '', 'limit=5')), '.tv_video .bestdeals_main-cards');
        generateCardsBestDeals(transformData(await getQuery(urlJsonServer + 'shop/', 'category', ['Електроніка---Гаджети---TV'], '', 'limit=10')), '.cell_phones .bestdeals_main-cards');
        generateCardsBestDeals(transformData(await getQuery(urlJsonServer + 'shop/', 'category', ['Електроніка---Гаджети---Планшети'], '', 'limit=5')), '.grocery .bestdeals_main-cards');

        stratLocalStorage('.cart_list__cart', 'cart');
        stratLocalStorage('.cart_list__likes', 'likes');
        //Якщо не головні сторінки 

    } else {
        const LEVEL_CATALOG = Number(sessionStorage.getItem('levelCatalog'));
        let catalogs = sessionStorage.getItem('catalogs').split(' ');
        if (catalogs[0] === 'undefined') catalogs = [];
        let product_id = sessionStorage.getItem('product_id');


        //Якщо головний каталог або підкаталоги
        if (LEVEL_CATALOG >= 0 || LEVEL_CATALOG <= 100) {
            await catalogCreateCard(LEVEL_CATALOG, catalogs, categoryList);
        }

        //Якщо карточка товару
        if (LEVEL_CATALOG === 1000) {
            await productCreateCart(catalogs, product_id);
        }

        stratLocalStorage('.cart_list__cart', 'cart');
        stratLocalStorage('.cart_list__likes', 'likes');
        getCountLimitLocalStorage();




    }
}


const mainSearch = document.querySelector('.main-search');
console.log(mainSearch)
// const catalogProducts = document.querySelector('.catalog_products');
if (mainSearch) {

    mainSearch.addEventListener('input', (e) => {
        let searchText = e.target.value;

        if (!!searchText) {
            addRemoveClass('.search-product__on', 'remove', 'hidden');
            addRemoveClass('.search-product__off', 'add', 'hidden');
            searchcatalogCreateCard(searchText, dataGlobalJson);
            console.log(searchText);
            // console.log(dataGlobalJson);
        } else {
            addRemoveClass('.search-product__on', 'add', 'hidden');
            addRemoveClass('.search-product__off', 'remove', 'hidden');
        }

    })

}

