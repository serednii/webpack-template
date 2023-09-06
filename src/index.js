
// SELECT * FROM `shop` WHERE `parameters` LIKE '%\\''%'


import '../node_modules/binary-search/binarysearch';
import './index.html';
import './catalog.html';

import './index.scss';
// import 'jquery';
// import 'jquery/dist/jquery.min.js';
// require('jquery/dist/jquery.min.js');
import 'jquery-form-styler';
// require('jquery-form-styler');
import 'ion-rangeslider';

// appliances total   47191
// plumbing	52617
// auto_moto	48984
// phones	4584
// tools	30010
// tv	12443
// childrens	36491
// computer_technology 8758
// all total	240714

// import { appliances_all } from './json_shop/appliances_all.js'; //total count 47191
// import { tools_all } from './json_shop/tools_all.js'; //total count 32512
// import { plumbing } from './json_shop/plumbing.js';//52617

// import { auto_moto } from './json_shop/auto_moto.js';//48984
// import { childrens } from './json_shop/childrens.js'; //36491
// import { tv } from './json_shop/tv.js'; //12443
// import { computer_technology } from './json_shop/computer_technology.js';//8758
// import { phones } from './json_shop/phones.js'; //4584

// appliances_all startNumberCodProduct = 1000;
// tools_all startNumberCodProduct = 100000;
// plumbing startNumberCodProduct = 200000;
// auto_moto startNumberCodProduct = 300000;
// childrens startNumberCodProduct = 400000;
// tv startNumberCodProduct = 500000;
// computer_technology startNumberCodProduct = 600000;
// phones startNumberCodProduct = 700000;

// console.log(phones);
// addToCard(phones);// Добавляємо на сервер JSON дані з файлу

import './modules/slider';
import './modules/timer_clock';
import './modules/filter/filter';
import './modules/count_cards/count_cards';

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
import catalogcreatecard from './modules/catalog/catalogCreateCard';
import productCreateCart from './modules/product/product_create_cart';
import { dataGlobalJson, count_elements } from './modules/GlobalVariable';
import searchCatalogCreateCard from './modules/catalog/searchCatalogCreateCard';
import { getQuery, getQueryObj, transformData, updateDataPost, addDataPost, deletePost, postQuery } from './modules/fetch/fetch';
import { getCountLocalStorage } from './modules/count_cards/count_cards';
import './modules/sort_products/range'
import { changeDate } from './modules/timer_clock';
import convertObjectToInArray from './modules/function/convertObjectToInArray';
import queryMakeCategory from './modules/function/queryMakeCategory';
import clearImgLInksBead from './modules/function/clearImgLInksBead';
import updateLInksTest from './modules/function/updateLInksTest';
import { selectParametersProducts } from './modules/selectParametersProducts/selectParametersProducts';
import { clickTable, addTable } from './modules/selectParametersProducts/clickTable';
import { asideFilter } from './modules/asideFilter/aside_filter';


// SELECT json_value(parameters, '$[0].Серія') FROM `shop` WHERE 1                    Показує обєкт Серія це ключ
// SELECT json_value(parameters, '$[*].*') FROM `shop` WHERE id=22693 json_value      Показує обєкт
// SELECT JSON_QUERY(parameters, '$[0].Seria') Seria FROM `shop` WHERE 1 JSON_QUERY --Показує масив
// SELECT JSON_QUERY(parameters, '$[*].Seria') Seria FROM `shop` WHERE 1              Показує масив   Seria це масив
// SELECT JSON_VALUE(parameters_new, '$[0].Тип холодильника') typew FROM shop WHERE JSON_VALUE(parameters_new, '$[0].Тип холодильника') = 'Двокамерний'
// http://trygonimetry.smm.zzz.com.ua/shop/filter-category=Електроніка/filter-category=Гаджети/filter-category=Гаджети/


// const url1 = 'http://globoteh.ru/wa-data/public/shop/products/50/14/1450/images/4439/4439.970.jpg';
// const url1 = 'https://www.techiedelight.com/ru/check-for-existence-of-image-at-given-url-javascript/';


// fetch(new Request(url1, { method: 'HEAD', mode: 'no-cors' }))
//     // .then(function () {
//     //     console.log('success');
//     // })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(function () {
//         console.log('failure');
//     });


// var url = 'http://globoteh.ru/wa-data/public/shop/products/50/14/1450/images/4439/4439.970.jpg';


// $(document).ready(function () {
//     $.get(url, function () {
//         alert('success');
//     })
//         .fail(function () {
//             alert('failure');
//         })
// });


//збираємо з бази даних категорії і формуємо JSON структуру
// queryMakeCategory();

//Очистка ссилок img
// for (let i = 31; i <= 35; i++) {
//     // clearImgLInksBead(i);
// }
// clearImgLInksBead(80);
// updateLInksTest();

// selectParametersProducts();

// start();
// select: "SELECT * FROM shop  WHERE category LIKE '%Мелкая_бытовая_техника Кухня Соковыжималки%'  AND  JSON_VALUE(parameters_new, '$[0].Тип' ) = 'шнековая'  AND  JSON_VALUE(parameters_new, '$[0].Тип' ) = 'центробежная'"
// select: "INSERT INTO `posts` (`id`, `name`, `text`, `text1`, `text2`, `text3`, `json`, `rating`, `sales`) VALUES (NULL, 'цуцецукеуцеу', 'цукеува345іуке4ц5е4е', 'цу4цке4е4е', 'ува345ец43кц45е4цкц4ке4е', 'цува345ец4ка ук 45е 5 ц44 4', NULL, '3345', '34535')"

async function postq() {
    const rez = await postQuery(urlJsonServer + 'shop/', JSON.stringify([{ select: "SELECT * FROM shop  WHERE category LIKE '%Мелкая_бытовая_техника Кухня Соковыжималки%' LIMIT 1 " }]))
    console.log(...rez)
}

postq();


const hoverMainMenu = document.querySelector('.hover_maim_menu');
// const body = document.querySelector('body');
const body = document.body;
// let categoryList = {};
// console.log(hoverMainMenu)

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
    // else if (targetElement.closest('.timer')) {//Відкриває форму для настройок таймера
    //     addRemoveClass('.input_change_time', 'remove', 'hidden');
    //     document.querySelector('.input_change_time').addEventListener('change', e => changeDate(e));
    // }
    else if (catalogLink) { //При кліку на  підменю в каталозі При кліку на меню breadcrumbs
        if (catalogLink) {
            console.log('KLIC data-catalog-level')
            sessionStorage.setItem('catalogs', catalogLink.dataset.catalogs);
            // sessionStorage.setItem('catalog_00', catalogLink.dataset.catalog_00);
            // sessionStorage.setItem('catalog_01', catalogLink.dataset.catalog_01);
            // sessionStorage.setItem('catalog_02', catalogLink.dataset.catalog_02);
            sessionStorage.setItem('levelCatalog', catalogLink.dataset.level_catalog);
            sessionStorage.setItem('product_id', catalogLink.dataset.id);
            // catalogLink.preventDefault();
            // catalogcreatecard(Number(levelCatalog), [catalog_00, catalog_01, catalog_02], );
        }
    } else if (targetElement.closest('.table-category-select .stroka')) {
        clickTable(targetElement);//При кліку на таблицю selectParametersProducts міняємо чексбокси і радіо кнопки
    } else if (targetElement.closest('.btn-add-table')) {
        addTable(targetElement);//При кліку на кнопку в низу таблиці вибрана інформаціє передається в базу даниз shop_category_filter
    }
});



// http://trygonimetry.smm.zzz.com.ua/shop/filterjson-parameters_new=Серія=WW/



async function start() {

    // http://trygonimetry.smm.zzz.com.ua/shop/filter=оообєм
    // let getQuery = await  getQuery(urlJsonServer + 'shop/filter=оообєм');
    {
        // let getQuery = await  getQuery(urlJsonServer + 'shop');
        // console.log(getQuery)

        // let getQuery = await  getQuery(urlJsonServer + 'shop/filterjson-parameters_new=Загальний+обєм=241+л');
        // getQuery && getQuery.forEach(e => {//перевірити на масив
        //     e.parameters_new = JSON.parse(e.parameters_new)
        //     e = e.parameters_new[0]
        //     console.log(e)
        // });


        // let getQuery = await  getQueryObj({
        //     url: urlJsonServer,
        //     table: "shop",
        //     search: `filter-category=Електроніка Гаджети Смартфони`,
        //     rand: ""
        //     // search: `filter{category}=Електроніка/filter{title}=Морозильна камера/filter{parameters_new}=Морозильна камера`,
        //     // search: `filter-category=Електроніка/filter-title=Морозильна камера/filter-parameters_new=Морозильна камера`,
        //     // search: 'filter=оообєм',//пошук ц всіх колонках
        //     // search: `filterjson-parameters_new=Серія=WW`
        // });

        // let getQuery1 = await  getQueryObj(url, table, search, rand, limit);
        // generateCards(transformData(await  getQuery(urlJsonServer + 'shop/', 'category', ['Електроніка', 'Гаджети', 'Гаджети'], 'rand()', 'limit=6')), '.arrivals__cards .cards');
        // let getQuery1 = await  getQueryObj(urlJsonServer, "shop/", ``, '', '');
    }


    {

        // const images =  getQuery(urlJsonServer + 'shop/', 'category', ['Мелкая_бытовая_техника', 'Кухня', 'Кухонные_комбайны'], 'rand()', 'limit=6');
    }



    let categoryListFilter = await getQuery(urlJsonServer + 'shop_category_filter');
    categoryListFilter = categoryListFilter[0];



    // categoryListFilter.filter = JSON.stringify(categoryListFilter.filter);
    // // addDataPost(urlJsonServer + 'shop_category_filter/', JSON.stringify(categoryListFilter));
    // categoryListFilter.category = JSON.parse(categoryListFilter.filter);
    // console.log(categoryListFilter);

    let categoryList = await getQuery(urlJsonServer + 'shop_category/');
    // console.log(categoryList.data[0])
    categoryList = categoryList.data[0];

    // // updateDataPost(urlJsonServer + 'shop_category/', JSON.stringify(categoryList))
    categoryList.category = JSON.parse(categoryList.category);
    // // console.log(categoryList);
    categoryList = categoryList.category[0];
    console.log(categoryList);
    // console.log(JSON.stringify(categoryList));


    const xx = Object.keys(categoryList)
    //Добавляє до кожної категорії і підкатегорії малюнок  
    // xx.forEach(e => {
    //      getQuery(urlJsonServer + 'shop/', 'category', [e], 'rand()', 'limit=1')
    //         .then(rez => {
    //             const aa = JSON.parse(rez.data[0].images)[0].img;
    //             categoryList[e].imgCategory = aa;
    //             // console.log(categoryList);
    //             const yy = Object.keys(categoryList[e]);
    //             console.log(yy)


    //             yy.forEach(ee => {
    //                  getQuery(urlJsonServer + 'shop/', 'category', [e + '---' + ee], 'rand()', 'limit=1')
    //                     .then(rez => {
    //                         const aa = JSON.parse(rez.data[0].images)[0].img;
    //                         categoryList[e][ee].imgCategory = aa;
    //                         // console.log(categoryList);
    //                         const zz = Object.keys(categoryList[e][ee]);
    //                         // console.log(yy)

    //                         zz.forEach(eee => {
    //                              getQuery(urlJsonServer + 'shop/', 'category', [e + '---' + ee + "---" + eee], 'rand()', 'limit=1')
    //                                 .then(rez => {
    //                                     const aa = JSON.parse(rez.data[0].images)[0].img;
    //                                     categoryList[e][ee][eee][0] = { "imgCategory": aa };
    //                                     console.log(categoryList);
    //                                     console.log(JSON.stringify(categoryList));

    //                                 });
    //                         });
    //                     });
    //             });
    //         });
    // });




    console.log(window.location.pathname.length);
    //Якщо головна сторінка
    if (window.location.pathname.includes('/index.html') || window.location.pathname.length === 1) {

        // sessionStorage.setItem('catalog_00', '');
        // sessionStorage.setItem('catalog_01', '');
        // sessionStorage.setItem('catalog_02', '');
        // sessionStorage.setItem('levelCatalog', '');
        // sessionStorage.setItem('product_id', '');

        // UPDATE `shop` SET `category` = REPLACE(category, id, ''), `title` = REPLACE(title, id, '') WHERE `shop`.`id` = 22710;

        // const p = [];
        // p.push( getQuery(urlJsonServer + 'shop/', 'category', [], 'rand()', 'limit=50'));
        // p.push( getQuery(urlJsonServer + 'shop/', 'category', ['Електроніка---Гаджети---Ноутбуки'], '', 'limit=8'));
        // p.push( getQuery(urlJsonServer + 'shop/', 'category', ['Електроніка---Гаджети---Смартфони'], '', 'limit=8'));
        // p.push( getQuery(urlJsonServer + 'shop/', 'category', ['Компьютерная_техника---Ноутбуки_и_аксессуары---Ноутбуки'], '', 'limit=1000'));
        // p.push( getQuery(urlJsonServer + 'shop/', 'category', ['Електроніка---Гаджети---Компютери'], '', 'limit=5'));
        // p.push( getQuery(urlJsonServer + 'shop/', 'category', ['Електроніка---Гаджети---Ноутбуки'], '', 'limit=5'));
        // p.push( getQuery(urlJsonServer + 'shop/', 'category', ['Електроніка---Гаджети---Смартфони'], '', 'limit=5'));
        // p.push( getQuery(urlJsonServer + 'shop/', 'category', ['Електроніка---Гаджети---TV'], '', 'limit=10'));
        // p.push( getQuery(urlJsonServer + 'shop/', 'category', ['Електроніка---Гаджети---Планшети'], '', 'limit=5'));

        // Promise.all(p).then((values) => {
        //     console.log(values)
        //     generateCards(transformData(values[0]), '.arrivals__cards .cards');
        //     generateCards(transformData(values[1]), '.easy_monthly .cards');
        //     generateCards(transformData(values[2]), '.on_sale .cards');
        //     generateCards(transformData(values[3]), '.top_rated .cards');
        //     generateCardsBestDeals(transformData(values[4]), '.kitchen_appliances .bestdeals_main-cards');
        //     generateCardsBestDeals(transformData(values[5]), '.consoles .bestdeals_main-cards');
        //     generateCardsBestDeals(transformData(values[6]), '.tv_video .bestdeals_main-cards');
        //     generateCardsBestDeals(transformData(values[7]), '.cell_phones .bestdeals_main-cards');
        //     generateCardsBestDeals(transformData(values[8]), '.grocery .bestdeals_main-cards');
        // });

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
        // getCountLocalStorage();
        // setTimeout(() => {
        //     // stratLocalStorage('.cart_list__cart', 'cart');
        //     // stratLocalStorage('.cart_list__likes', 'likes')
        //     console.log('22222')

        // }, 2000);
        //Якщо не головні сторінки 

    } else {
        const LEVEL_CATALOG = Number(sessionStorage.getItem('levelCatalog'));
        let catalogs = sessionStorage.getItem('catalogs').split(' ');
        if (catalogs[0] === 'undefined') catalogs = [];
        let product_id = sessionStorage.getItem('product_id');

        // console.log('KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK')
        // console.log(catalogs);
        // console.log('NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN')
        // console.log(LEVEL_CATALOG);

        //Якщо головний каталог або підкаталоги
        if (LEVEL_CATALOG >= 0 || LEVEL_CATALOG <= 100) {
            await catalogcreatecard(LEVEL_CATALOG, catalogs, categoryList);
        }

        //Якщо карточка товару
        if (LEVEL_CATALOG === 1000) {
            await productCreateCart(catalogs, product_id);
        }

        stratLocalStorage('.cart_list__cart', 'cart');
        stratLocalStorage('.cart_list__likes', 'likes');
        getCountLocalStorage();
    }
}

// fetch('http://trygonimetry.smm.zzz.com.ua/shop/filter-category=Електроніка/limit=5/rand()')
//     .then(rez => rez.json())
//     .then(data => console.log(data))

// fetch('http://trygonimetry.smm.zzz.com.ua/shop/filter-category=Електроніка/limit=20/rand()')
//     .then(rez => rez.json())
//     .then(data => console.log(data))

// fetch('http://trygonimetry.smm.zzz.com.ua/shop/filter-category=Електроніка/limit=5/rand()')
//     .then(rez => rez.json())
//     .then(data => console.log(data))


// const rezakt = await  getQuery(urlJsonServer);

// console.log(await  getQuery(urlJsonServer))

// fetch(`http://trygonimetry.smm.zzz.com.ua/shop`)
// fetch(`${urlJsonServer}`)
//     .then(response => response.json())
//     .then(commits => {
//         console.log(commits)
//         let result = convertObjectToInArray(commits, new Array());
//         console.log(result)

//     })

// generateCards(dataGlobalJson.Електроніка.Гаджети.Компютери, '.arrivals__cards .cards', 6);

// console.log(`href  ${window.location.href}`)
// console.log(`host  ${window.location.host}`)
// console.log(`hostname  ${window.location.hostname}`)
// console.log(`hash  ${window.location.hash}`)
// console.log(`origin  ${window.location.origin}`)
// console.log(`pathname  ${window.location.pathname.includes('/index.html')}`)
// fetch(`http://trygonimetry.smm.zzz.com.ua/shop`)
//     // fetch(`${urlJsonServer}`)
//     .then(response => response.json())
//     .then(commits => {
//         console.log(commits)
//         Object.assign(dataGlobalJson, commits)
//         if (window.location.pathname.includes('/index.html')) {
//             sessionStorage.setItem('catalog_00', '');
//             sessionStorage.setItem('catalog_01', '');
//             sessionStorage.setItem('catalog_02', '');
//             sessionStorage.setItem('LEVEL_CATALOG', '');
//             sessionStorage.setItem('product_id', '');
//             // generateCards(dataGlobalJson.Електроніка.Гаджети.Компютери, '.arrivals__cards .cards', 6);
//             // generateCards(dataGlobalJson.Електроніка.Гаджети.Ноутбуки, '.easy_monthly .cards', 8);
//             // generateCards(dataGlobalJson.Електроніка.Гаджети.Компютери, '.on_sale .cards', 8);
//             // generateCards(dataGlobalJson.Електроніка.Гаджети.Ноутбуки, '.top_rated .cards', 8);
//             // generateCardsBestDeals(dataGlobalJson.Електроніка.Гаджети.Смартфони, '.kitchen_appliances .bestdeals_main-cards ', 1);
//             // generateCardsBestDeals(dataGlobalJson.Електроніка.Гаджети.Ноутбуки, '.consoles .bestdeals_main-cards ', 1);
//             // generateCardsBestDeals(dataGlobalJson.Електроніка.Гаджети.Компютери, '.tv_video .bestdeals_main-cards ', 1);
//             // generateCardsBestDeals(dataGlobalJson.Електроніка.Гаджети.Смартфони, '.cell_phones .bestdeals_main-cards ', 1);
//             // generateCardsBestDeals(dataGlobalJson.Електроніка.Гаджети.Ноутбуки, '.grocery .bestdeals_main-cards ', 1);

//             setTimeout(() => {
//                 stratLocalStorage('.cart_list__cart', 'cart');
//                 stratLocalStorage('.cart_list__likes', 'likes')
//                     , 2000
//             });
//         } else {
//             setTimeout(() => {
//                 stratLocalStorage('.cart_list__cart', 'cart');
//                 stratLocalStorage('.cart_list__likes', 'likes')
//                     , 2000
//             });
//             let LEVEL_CATALOG = Number(sessionStorage.getItem('LEVEL_CATALOG'));
//             let catalog_00 = sessionStorage.getItem('catalog_00');
//             let catalog_01 = sessionStorage.getItem('catalog_01');
//             let catalog_02 = sessionStorage.getItem('catalog_02');
//             let product_id = sessionStorage.getItem('product_id');

//             // console.log(catalog_00)
//             // console.log(LEVEL_CATALOG)
//             // if (catalog_00 && LEVEL_CATALOG) {
//             console.log(catalog_00)
//             console.log(catalog_01)
//             console.log(catalog_02)
//             console.log(LEVEL_CATALOG)
//             // sessionStorage.setItem('catalog_00', '');
//             // sessionStorage.setItem('LEVEL_CATALOG', '');
//             if (LEVEL_CATALOG === 1 || LEVEL_CATALOG === 2 || LEVEL_CATALOG === 3 || LEVEL_CATALOG === 100) {
//                 catalogcreatecard(LEVEL_CATALOG, [catalog_00, catalog_01, catalog_02]);
//             }

//             if (LEVEL_CATALOG === 1000) {
//                 productCreateCart([catalog_00, catalog_01, catalog_02], product_id);
//             }
//             // }
//         }
//     });



// console.log(dataGlobalJson);

const mainSearch = document.querySelector('.main-search');
console.log(mainSearch)
// const catalogProducts = document.querySelector('.catalog_products');
if (mainSearch) {

    mainSearch.addEventListener('input', (e) => {
        let searchText = e.target.value;

        if (!!searchText) {
            addRemoveClass('.search-product__on', 'remove', 'hidden');
            addRemoveClass('.search-product__off', 'add', 'hidden');
            searchCatalogCreateCard(searchText, dataGlobalJson);
            console.log(searchText);
            // console.log(dataGlobalJson);
        } else {
            addRemoveClass('.search-product__on', 'add', 'hidden');
            addRemoveClass('.search-product__off', 'remove', 'hidden');
        }

    })

}



function addToCard(dataJson) {

    const dlina = dataJson.length;
    let countDlina = 0;
    const sendArrayObjects = [];
    console.log(countDlina);



    let startNumberCodProduct = 700000;

    dataJson.forEach((e, i) => {
        // if (countDlina >= 0 && countDlina < 100) {
        // console.log(e);
        // console.log(e.images.split(' '));
        // const e = dataJson[countDlina]
        // e.shopDownload = "DOWNLOAD";
        const newObj = {};
        newObj.parametrs_text = "phones";
        newObj.title = e.title;
        newObj.category = e.category.replace(/ /ig, '_').replace(/->/ig, ' ');
        // newObj.kod_product = parseInt(Math.random() * 999999999);
        // newObj.kod_product = e.Артикул;
        newObj.kod_product = startNumberCodProduct;
        startNumberCodProduct++;

        newObj.images = [];
        newObj.images && e.images.split(' ').forEach(img => newObj.images.push({ alt: "", img }));
        newObj.images && (newObj.images = JSON.stringify(newObj.images));
        // newObj.images = `
        // [{"alt":"","img":"http:magazilla.ru/jpg_zoom1/756614.jpg"},{"alt":"","img":"http:mzimg.com/big/r1/f184b93d4r1.jpg"},{"alt":"","img":"http:mzimg.com/big/91/f184bj9sj91.jpg"},{"alt":"","img":"http:mzimg.com/big/e1/f184bp55me1.jpg"},{"alt":"","img":"http:mzimg.com/big/s1/f184bw87is1.jpg"},{"alt":"","img":"http:mzimg.com/big/g1/f184chy1vg1.jpg"},{"alt":"","img":"http:mzimg.com/big/61/f184ct29561.jpg"},{"alt":"","img":"http:mzimg.com/big/b1/fofa1bu3ob1.jpg"},{"alt":"","img":"http:mzimg.com/big/z1/fofa1c2twz1.jpg"},{"alt":"","img":"http:mzimg.com/big/u1/fofa1c7fhu1.jpg"},{"alt":"","img":"http:mzimg.com/big/e1/f184codfae1.jpg"},{"alt":"","img":"http:mzimg.com/big/e1/fofa1cbhhe1.jpg"},{"alt":"","img":"http:mmedia.ozone.ru/multimedia/1014304650.jpg"},{"alt":"","img":"http:mobilkin.info/d/727623/d/s7.jpg"},{"alt":"","img":"http:mmedia.ozone.ru/multimedia/1014304669.jpg"},{"alt":"","img":"http:spb.shop.megafon.ru/images/goods/952/95282_p_8_4.jpg"},{"alt":"","img":"http:33033.ru/data/big/s7-white.jpg"}]
        // `
        if (e.Цена) {
            newObj.newPrice = e.Цена;
            newObj.oldPrice = parseInt(newObj.newPrice) * 0.8;
        }
        newObj.rating = parseInt(Math.random() * 100 - 20);
        newObj.sales = parseInt(Math.random() * 2500);
        newObj.count = parseInt(Math.random() * parseInt(newObj.sales));
        newObj.parameters = [];
        newObj.parameters_new = [];

        if (e.Характеристики) {
            newObj.parameters_new = [e.Характеристики];
            const keys = Object.keys(e.Характеристики)
            keys.forEach(key => newObj.parameters.push({ [key]: e.Характеристики[key] }))
        } else if (e.Описание) {
            const newDescripchion = e.Описание.split(';');
            const newDescripchionObject = {};
            newDescripchion.forEach(elem => {
                let [pole, znach] = elem.split(':');
                newDescripchionObject[pole] = znach;
                if (!znach) znach = 'Присутній';
            })


            newObj.parameters_new = [newDescripchionObject];
            const keys = Object.keys(newDescripchionObject)
            keys.forEach(key => newObj.parameters.push({ [key]: newDescripchionObject[key] }))
        }

        if (e.Производитель) {
            newObj.parameters.push({ "Виробник": e.Производитель })
            newObj.parameters_new.Виробник = e.Производитель
            newObj.parameters = JSON.stringify(newObj.parameters);
            newObj.parameters_new = JSON.stringify(newObj.parameters_new);
        }

        // newObj.parameters_new = `[{"Вес (г)":" 180"," Размеры (мм)":" 158.5х75.5х8.1"," Емкость (мАч)":" 4000"," Аккумулятор":" Li-Pol"," Видео (основная)":" 3840x2160 (4K)"}]`
        // newObj.parameters = `[{"Вес (г)":" 180"},{" Размеры (мм)":" 158.5х75.5х8.1"},{" Емкость (мАч)":" 4000"},{" Аккумулятор":" Li-Pol"},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{" Видео (основная)":" 3840x2160 (4K)"},{"Виробник":"Xiaomi"}]`
        // console.log(e);
        // console.log(newObj);

        // if (i >= 65000 && i < 70000) {
        // if (i >= 55000 && i < 60000) {
        // if (i >= 50000 && i < 55000) {
        // if (i >= 45000 && i < 50000) {
        // if (i >= 40000 && i < 45000) {
        // if (i >= 35000 && i < 40000) {
        // if (i >= 30000 && i < 35000) {
        // if (i >= 25000 && i < 30000) {
        // if (i >= 20000 && i < 25000) {
        // if (i >= 15000 && i < 20000) {
        // if (i >= 10000 && i < 15000) {
        // if (i >= 5000 && i < 10000) {
        if (i < 10000) {
            sendArrayObjects.push(newObj);
        }

        // addDataPost(urlJsonServer + 'shop', JSON.stringify(newObj))
        //     then((data) => {
        //         console.log(data); // JSON data parsed by `response.json()` call
        //     });
        // }
    });
    // }, 1);


    console.log(sendArrayObjects);
    addDataPost(urlJsonServer + 'shop', JSON.stringify(sendArrayObjects))
        .then((data) => {
            console.log(data); // JSON data parsed by `response.json()` call
        });



}


// cleanData();

async function cleanData() {//очишчаємо одинакові записи
    let getQuery = await getQuery(urlJsonServer + 'shop/', '', [], '', 'limit=5');
    console.log(getQuery);

    let arrkod_product = {};
    getQuery.forEach((e) => {//Заносимо в обєкт ключ kod_product і добавляємо в його масив значення 


        // addDataPost(urlJsonServer + 'shop', JSON.stringify(e))
        //     .then((data) => {
        //         console.log(data); // JSON data parsed by `response.json()` call
        //     });


        // console.log(`${ e.id } -- - ${ e.kod_product }`)
        if (arrkod_product[e.kod_product]) {
            arrkod_product[e.kod_product].push(e.id);
        } else {
            arrkod_product[e.kod_product] = [e.id];
        }

    })


    let keys = Object.keys(arrkod_product)//Робимо масив ключів
    keys = keys.filter(e => arrkod_product[e].length > 1);//

    keys = keys.filter(e => (arrkod_product[e].length > 1) && arrkod_product[e]);//
    // keys = keys.map(e => (arrkod_product[e].length > 1) && arrkod_product[e]);
    keys = keys.map(e => e.pop());
    keys = keys.join().split(',');
    console.log(keys);

    let count = 0;
    console.log(keys.length);
    const myTimer1 = setInterval(() => {
        if (count >= keys.length - 1) clearInterval(myTimer1);
        // deleteData(keys[count]);

        console.log(count);
        count++;
    }, 25)

}

async function deleteData(id, columnsType, arrayColumns) {
    deletePost(urlJsonServer + 'shop/', id, columnsType, arrayColumns)
        .then((data) => {
            console.log(data); // JSON data parsed by `response.json()` call
        });
}

// deleteData('', 'id', [8456476987, 98456479, 56456757, 56467567, 5467457, 45675476, 5675, 4567546747, 467457457, 456745754]);