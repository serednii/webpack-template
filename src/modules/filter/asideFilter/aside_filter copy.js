
import printCard from "../../catalog/printCard";
import { postQuery } from "../../fetch/fetch";
import { urlJsonServer } from "../../GlobalVariable";
import { transformData, getQuery } from "../../fetch/fetch";
import { getCountLimitLocalStorage } from "../count_cards/count_cards";
import convertObjectToInArray from "../../function/convertObjectToInArray";
import printTopFilterSelectedHTML from "./view";
import { generateObject } from "../../selectParametersProducts/generateObjeckt";
import { state } from "../../state/state";
import { createFormSortCheckbox, createFormSortRange } from "./sort_products";
// import { remove } from "cherio/lib/api/manipulation";
const catalogProductFilterParent = document.querySelector('.catalog_product-filter_parent');
catalogProductFilterParent && catalogProductFilterParent.addEventListener('change', (e) => asideFilter(e.target));
catalogProductFilterParent && catalogProductFilterParent.addEventListener('mousedown', (e) => {
    console.log('mouseDown')
    // console.log(e.target)
    const formCheckedParent = e.target.closest('.form-checked_parent');
    if (formCheckedParent.classList.contains('form-checked_parent')) {
        console.log(formCheckedParent)
        state.flagRangeSlider = 1
        asideFilterRange(e.target);
    }
});

catalogProductFilterParent && catalogProductFilterParent.addEventListener('mouseup', (e) => {
    console.log('mouseup')
    // console.log(e.target)
    const formCheckedParent = e.target.closest('.form-checked_parent');
    if (formCheckedParent.classList.contains('form-checked_parent')) {
        console.log(formCheckedParent)
        state.flagRangeSlider = 2
        state.rangeSliderMouseUpTarget = formCheckedParent;
    }
    // asideFilterRange(e.target);
});



console.log('start aside fliter');
// SELECT * FROM shop  WHERE category LIKE '%Електроніка Гаджети Компютери%'  AND  JSON_VALUE(parameters_new, '$[0].Мясорубка' ) LIKE 'да'
// SELECT * FROM shop  WHERE category LIKE '%Електроніка Гаджети Компютери%'  AND  JSON_VALUE(parameters_new, '$[0].Мясорубка' ) = 'да'

// SELECT * FROM shop  WHERE category LIKE '%Мелкая_бытовая_техника Кухня Соковыжималки%'  AND  JSON_VALUE(parameters_new, '$[0].Тип' ) = 'шнековая'  AND  JSON_VALUE(parameters_new, '$[0].Тип' ) = 'центробежная'
// http://trygonimetry.smm.zzz.com.ua/shop/filter-category=Мелкая_бытовая_техника---Кухня---Соковыжималки/filterjson-parameters_new=Тип=шнековая/filterjson-parameters_new=Тип=центробежная

export async function asideFilter(target) {

    console.log(target);
    console.log(target.value);

    const catalogsArray = sessionStorage.getItem('catalogs').split(' ');//Получаємо шлях меню категорій і розбиваємо на масив
    // console.log(catalogsArray)
    addDeleteElementToArray(target)//Провіряємо вибраний або зняттий з фільтра елемент в масив state.arraySelectElements
    // console.log(state.arraySelectElements)
    // console.log(createQuery())
    let result = await getQueryFilter(catalogsArray, target);
    // console.log(result)
    changingFilters(result, catalogsArray, target);
    // console.log(result)
    printTopFilterSelectedHTML(result.length);//Друкуємо вибрані запроси в окремий рядок другим параметром передаємо 0, що означає немає заппросів і строку з запросами видалити
    result = result.slice(0, getCountLimitLocalStorage());
    printCard(convertObjectToInArray(result, new Array()), catalogsArray, '.search-product__off .catalog_product-grid');
    console.log('************************************************************************')
    console.log(state.arraySelectElements)
    console.log(state.arraySelectElementValue)
    console.log('************************************************************************')
}

export async function asideFilterRange(values) {

    console.log('values')
    if (state.flagRangeSlider === 2) {
        console.log(values);
        state.flagRangeSlider = 0;
        const catalogsArray = sessionStorage.getItem('catalogs').split(' ');//Получаємо шлях меню категорій і розбиваємо на масив
        addChangElementToArray(values)//Провіряємо вибраний або зняттий з фільтра елемент в масив state.arraySelectElements
        let result = await getQueryFilter(catalogsArray);
        changingFilters(result, catalogsArray);

        // console.log(result);
        // console.log(result.length);

        console.log(state);
        printTopFilterSelectedHTML(result.length);//Друкуємо вибрані запроси в окремий рядок другим параметром передаємо 0, що означає немає заппросів і строку з запросами видалити
        result = result.slice(0, getCountLimitLocalStorage());
        printCard(convertObjectToInArray(result, new Array()), catalogsArray, '.search-product__off .catalog_product-grid');
        delete state.rangeSliderMouseUpTarget;
        console.log('************************************************************************')
        console.log(state.arraySelectElements)
        console.log(state.arraySelectElementValue)
        console.log('************************************************************************')
    }
    // // console.log(result)
}

export async function deleteParametersFilter(e) {//Видаляє доавлені фільтри в топі над списком по одному
    // try {
    const catalogsArray = sessionStorage.getItem('catalogs').split(' ');
    // console.log(e.closest('.selected-filter_list').querySelector('.selected-filter_list_content').dataset.num)
    const numDeleteElement = e.closest('.selected-filter_list').querySelector('.selected-filter_list_content').dataset.num
    state.arraySelectElements.splice(numDeleteElement, 1)[0].checked = false;
    state.arraySelectElementValue.splice(numDeleteElement, 1);

    console.log('************************************************************************')
    console.log(state.arraySelectElements)
    console.log(state.arraySelectElementValue)
    console.log('************************************************************************')

    // console.log(t)
    let result = await getQueryFilter(catalogsArray)
    printTopFilterSelectedHTML(result.length);//Друкуємо вибрані запроси в окремий рядок другим параметром передаємо 0, що означає немає заппросів і строку з запросами видалити
    result = result.slice(0, getCountLimitLocalStorage());
    printCard(convertObjectToInArray(result, new Array()), catalogsArray, '.search-product__off .catalog_product-grid');
    // console.log(state.arraySelectElements)
    // } catch (e) {
    //     console.log(e);
    // }
}

export async function deleteParametersFilterAll(e) {//Видаляє доавлені фільтри в топі над списком всі
    // try {
    const catalogsArray = sessionStorage.getItem('catalogs').split(' ');
    // console.log(e.closest('.selected-filter_list').querySelector('.selected-filter_list_content').dataset.num);
    // const numDeleteElement = e.closest('.selected-filter_list').querySelector('.selected-filter_list_content').dataset.num;
    state.arraySelectElements.forEach(e => e.checked = false)
    state.arraySelectElements.splice(0, state.arraySelectElements.length);
    state.arraySelectElementValue.splice(0, state.arraySelectElementValue.length);

    console.log('************************************************************************')
    console.log(state.arraySelectElements)
    console.log(state.arraySelectElementValue)
    console.log('************************************************************************')

    let result = await getQueryFilter(catalogsArray);
    printTopFilterSelectedHTML(state.arraySelectElements, result.length);//Друкуємо вибрані запроси в окремий рядок другим параметром передаємо 0, що означає немає заппросів і строку з запросами видалити
    result = result.slice(0, getCountLimitLocalStorage());
    printCard(convertObjectToInArray(result, new Array()), catalogsArray, '.search-product__off .catalog_product-grid');
    // console.log(state.arraySelectElements)
    // } catch (e) {
    //     console.log(e);
    // }
}

function addChangElementToArray(values) {
    console.log('************************************************************************')
    console.log(state.arraySelectElements)
    console.log(state.arraySelectElementValue)
    console.log('************************************************************************')

    if (!state.arraySelectElements.includes(state.rangeSliderMouseUpTarget)) {//Провіряємо вибраний або зняттий з фільтра елемент в масив state.arraySelectElements
        state.arraySelectElements.unshift(state.rangeSliderMouseUpTarget);//Добавляємо вибраний елемент з фільтра якщо нема
        state.arraySelectElementValue.unshift({ from: values.from, to: values.to })
    } else {
        const ind = state.arraySelectElements.indexOf(state.rangeSliderMouseUpTarget)
        state.arraySelectElements[ind] = state.rangeSliderMouseUpTarget;
        state.arraySelectElementValue[ind] = { from: values.from, to: values.to };
    }
}

function addDeleteElementToArray(target) {
    // console.log(target)
    // console.log(state)
    // debugger
    if (target.checked) {//Провіряємо вибраний або зняттий з фільтра елемент в масив state.arraySelectElements
        if (!state.arraySelectElements.includes(target)) {
            state.arraySelectElements.unshift(target);//Добавляємо вибраний елемент з фільтра якщо нема
            state.arraySelectElementValue.unshift(target.value);//Добавляємо вибраний елемент з фільтра якщо нема
        }
    } else {
        if (state.arraySelectElements.includes(target)) {
            const number = state.arraySelectElements.indexOf(target)
            state.arraySelectElements.splice(number, 1)//Видаляємо знятий елемент з фільтра якщо є
            state.arraySelectElementValue.splice(number, 1)//Видаляємо знятий елемент з фільтра якщо є
        }
    }
    // console.log(state)
}

export function createQuery(target) {
    console.log(state.arraySelectElementValue)
    // try {
    const catalogsString = sessionStorage.getItem('catalogs');
    let filter = `SELECT * FROM shop  WHERE category LIKE '%${catalogsString}%'`;
    let jsonFilter = ``;
    let rangeFilter = ``;
    state.arraySelectElements.forEach((e, i) => {
        console.log(typeof state.arraySelectElementValue[i])
        if (typeof state.arraySelectElementValue[i] === 'string') {
            const titleValue = e.closest('.form-checked')?.querySelector('.form-check_title')?.innerText;
            const value = e.value?.trim();
            console.log(titleValue)
            console.log(value)
            if (titleValue && value) {
                (jsonFilter += `JSON_VALUE(parameters_new, '$[0].${titleValue}' ) LIKE '%${value}%' OR `);
            } else {
                // throw 'ERROR FILTER'
            }
        } else if (typeof state.arraySelectElementValue[i] === 'object') {
            console.log(e.querySelector('.js-range-slider_title')?.innerText)
            const titleValue = e.querySelector('.js-range-slider_title')?.innerText
            const from = state.arraySelectElementValue[i].from;
            const to = state.arraySelectElementValue[i].to;
            console.log(typeof from)
            console.log(to)
            // const formParent = e.querySelector('.js-range-slider_title');
            // const title = formParent && formParent.querySelector('.form-check_title');
            if (titleValue === 'newPrice') {
                titleValue && from && to && (rangeFilter = `(${titleValue} >= ${from} AND ${titleValue}  <= ${to})`);
            }
        }
    });

    console.log(!!jsonFilter)
    console.log(!!rangeFilter)
    if (jsonFilter) {
        console.log('jsonFilter')
        if (rangeFilter) rangeFilter = rangeFilter + ' AND ';
        jsonFilter = jsonFilter.replace(/OR $/, "")
        jsonFilter = '(' + jsonFilter + ')';
    }
    if (jsonFilter || rangeFilter) {
        filter += ' AND ' + rangeFilter + ' ' + jsonFilter
        console.log('sonFilter || rangeFilter')
    }
    return filter;

    // jsonFilter = jsonFilter.replace(/OR $/, ")");

    // else
    // filter.replace(/(AND )$/, ")");
    // } catch (e) {
    //     throw e
    //     // console.log(e)
    // }
}

async function getQueryFilter(catalogsArray, target) {//повертає відфільтрований запрос

    return new Promise(async (resolve, rejeckt) => {
        // try {
        let result;
        if (state.arraySelectElements.length === 0) {//Якщо немає фільтрів
            result = transformData(await getQuery(urlJsonServer + 'shop/', 'category', catalogsArray, null, null));

            // result = transformData(await getQuery(urlJsonServer + 'shop/', 'category', catalogsArray, null, 'limit=' + getCountLimitLocalStorage()));
            const newSetParameters = generateObject(result);
            console.log(newSetParameters);
        } else {
            result = transformData({ data: await postQuery(urlJsonServer + 'shop/', JSON.stringify([{ select: createQuery(target) }])) });
            // debugger
            // createQuery1(result, catalogsArray, target);
            // listFilter.forEach(nameFilter => {
            //     // console.log(newObj[nameFilter])
            //     // if (newObj[nameFilter][0] === 'checkbox') createFormSortCheckbox(nameFilter, newObj[nameFilter]);
            //     // if (newObj[nameFilter][0] === 'range') createFormSortRange(nameFilter, newObj[nameFilter]);
            // })
        }
        resolve(result);
        // } catch (error) {
        //     // console.log(error)
        //     rejeckt(error)
        // }



        // console.log(result)

    })
    // const resolve_1 = await promise;
    // return resolve_1;
}



async function changingFilters(result, catalogsArray, target) {
    const newSetParameters = generateObject(result);//Із відфільтрованих даних отримуємо новий список фільтрів які присутні в нових даних
    console.log(newSetParameters);

    let categoryListFilter = await getQuery(urlJsonServer + 'shop_category_filter/', 'product_filters', [catalogsArray.join('---')], '', '');
    categoryListFilter = JSON.parse(categoryListFilter.data[0].filter);//Із shop_category_filter отримаємо список вибраних фільтрів для даного товару
    console.log(categoryListFilter);

    const key_setParametrs = Object.keys(categoryListFilter);//Ключі полів список  вибраних фільтрів для даного товару
    const key_newSetParameters = Object.keys(newSetParameters);//Ключі полів список  вибраних фільтрів для даного товару
    console.log(key_setParametrs)
    console.log(key_newSetParameters)

    key_newSetParameters.forEach(e => {//Залишаємо в новому списку newSetParameters тільки ті ключі які є опреділені в списку categoryListFilter
        if (!key_setParametrs.includes(e)) {
            delete newSetParameters[e]
        } else {
            // newSetParameters[e] = [...Array.from(newSetParameters[e])];
            if (categoryListFilter[e][0] === 'range') {
                newSetParameters[e] = categoryListFilter[e]
            }
        }
    })

    console.log(newSetParameters)
    //         // if (categoryListFilter[key][0] === 'range') {
    //         //     const min = newObj[key][1];
    //         //     const max = newObj[key][newObj[key].length - 1];
    //         //     let minV = (((max - min) * 0.2) + min).toFixed(2);
    //         //     let maxV = (((max - min) * 0.6) + min).toFixed(2);
    //         //     if (Number.isInteger(min)) {
    //         //         minV = parseInt(minV);
    //         //         maxV = parseInt(maxV);
    //         //     }
    //         //     newObj[key] = ['range', min, max, minV, maxV];
    //         // }
    //     }
    //     // console.log(newSetParameters[key])
    // }
    // console.log(newObj)
    // const listFilter = Object.keys(newObj);
    // console.log(listFilter)

    //Показує або скриває параметри фільтра в меню
    const parentChangeTitle = target?.closest('.form-checked_parent')?.querySelector('.form-check_title')?.innerText.trim();
    const formCheckedParent = catalogProductFilterParent?.querySelectorAll('.form-checked_parent')
    formCheckedParent && formCheckedParent.forEach(parentFilter => {
        const title = (parentFilter && parentFilter.querySelector('.form-check_title')?.innerText).trim();
        if (newSetParameters[title][0] = 'checkbox' && title !== parentChangeTitle) {
            const valuesFilter = parentFilter?.querySelectorAll('.form-check')//Вибираємо всі значення із фільтра 
            valuesFilter && valuesFilter.forEach(el => {// 
                const elInput = el.querySelector('.form-check-input');
                if (newSetParameters[title].includes(elInput.value.trim())) {//Якщо фільтра немає в новому списку то його скриваємо
                    el.classList.remove('hidden');
                } else {
                    el.classList.add('hidden');
                }
            })
        }

    })

    // } catch (e) {
    //     console.log(e)
    // }
}





// function showHiddenParametersFilter(newSetParameters, key_setParametrs, target) {
    // const parentChangeTitle = target?.closest('.form-checked_parent')?.querySelector('.form-check_title')?.innerText.trim();

//     const formCheckedParent = catalogProductFilterParent?.querySelectorAll('.form-checked_parent')
//     console.log(formCheckedParent)
//     // debugger
//     formCheckedParent && formCheckedParent.forEach(parentFilter => {
//         const title = (parentFilter && parentFilter.querySelector('.form-check_title')?.innerText).trim();
//         // if (key_setParametrs.includes(title))//Якщо в новому списку є назва фільтру що є на екрані
//         //     if (newSetParameters[title][0] === 'range') {
//         //         console.log('input')

//         //         // input.dataset.min = newObj[title][1]
//         //         // input.dataset.max = newObj[title][2]
//         //         // input.dataset.from = newObj[title][3]
//         //         // input.dataset.to = newObj[title][4]
//         //         // const menuPatch = newObj[title].shift();
//         //         // console.log(menuPatch);
//         //         // createFormSortRange('nameFilter', menuPatch)

//         //         // $(".js-range-slider").ionRangeSlider({
//         //         //     type: "double",
//         //         //     min: newObj[title][1],
//         //         //     max: newObj[title][2],
//         //         //     from: newObj[title][3],
//         //         //     to: newObj[title][4],
//         //         //     grid: true
//         //         // });

//         //     } else
//             if (newSetParameters[title][0] = 'checkbox' && title !== parentChangeTitle) {
//                 const valuesFilter = parentFilter?.querySelectorAll('.form-check')//Вибираємо всі значення із фільтра
//                 // debugger
//                 console.log(valuesFilter)
//                 valuesFilter && valuesFilter.forEach(el => {//
//                     const elInput = el.querySelector('.form-check-input');
//                     if (newSetParameters[title].includes(elInput.value.trim())) {//Якщо фільтра немає в новому списку то його скриваємо
//                         el.classList.remove('hidden');
//                     } else {
//                         el.classList.add('hidden');
//                     }
//                 })
//             }

//     })
// }

