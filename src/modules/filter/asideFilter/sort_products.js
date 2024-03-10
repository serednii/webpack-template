export const CATALOG_PRODUCT_FILTER_PARENT = document.querySelector('.catalog_product-filter_parent');
import { getQuery, transformData, updateDataPost, addDataPost } from '../../fetch/fetch';
import { urlJsonServer } from '../../GlobalVariable';
import { asideFilterRange } from './aside_filter';
export async function createFormsSort(menuPatch) {
    try {
        const PRODUCT = menuPatch.join('---')//Із масива робимо строку розділену ---
        let categoryListFilter = await getQuery(urlJsonServer + 'shop_category_filter/', 'product_filters', [PRODUCT], '', '');
        console.log(categoryListFilter)
        if (categoryListFilter.data) {
            categoryListFilter = categoryListFilter.data[0];
            categoryListFilter.filter = JSON.parse(categoryListFilter.filter);
            categoryListFilter.id = categoryListFilter.id;
            const listFilter = Object.keys(categoryListFilter.filter);
            listFilter.forEach(nameFilter => {
                if (categoryListFilter.filter[nameFilter][0] === 'checkbox') createFormSortCheckbox(nameFilter, categoryListFilter.filter[nameFilter]);
                if (categoryListFilter.filter[nameFilter][0] === 'range') createFormSortRange(nameFilter, categoryListFilter.filter[nameFilter]);
            })
        }
    } catch (err) {
        console.log('ERROR createFormsSort ' + err)
    }
}

export function createFormSortCheckbox(nameFilter, menuPatch) {
    console.log(menuPatch)
    menuPatch.shift();

    let inputElementsCheckbox = '';
    menuPatch.forEach(e => {
        inputElementsCheckbox += `
        <div class="form-check">
        <input type="checkbox" class="form-check-input" 
        name="option1" value="${e.trim()}" >
        <label class="form-check-label" for="check1">${e.trim()}</label>
        </div>
        `
    })

    const formFilter = `
    <div class="form-checked_parent">
    <form class="form-checked" action="#">
        <h3 class="form-check_title">${nameFilter} <span></span></h3>
        ${inputElementsCheckbox}
    </form>
</div>
`
    CATALOG_PRODUCT_FILTER_PARENT && CATALOG_PRODUCT_FILTER_PARENT.insertAdjacentHTML('beforeend', formFilter);
}



export function createFormSortRange(nameFilter, menuPatch) {
    console.log(menuPatch)
    menuPatch.shift();

    const formFilter = `
    <div class="form-checked_parent range-wrap">
    <h3  class="js-range-slider_title form-check_title"> ${nameFilter} </h3>
    <input  type="text" class="js-range-slider form-checked_parent_input range-wrap" name="my_range" value="" 
        data-type="double"
        data-min="${menuPatch[0]}"
        data-max="${menuPatch[1]}"
        data-from="${menuPatch[2]}"
        data-to="${menuPatch[3]}"
        data-grid="true"
    />
</div>
`

    CATALOG_PRODUCT_FILTER_PARENT && CATALOG_PRODUCT_FILTER_PARENT.insertAdjacentHTML('beforeend', formFilter);
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 200,
        to: 500,
        grid: true,
        onChange: function (values) {
            asideFilterRange(values);
        },
        onUpdate: function (values) {
            console.log(values)
        }
    })
}




