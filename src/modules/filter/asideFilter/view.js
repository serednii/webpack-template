

import { state } from "../../state/state";
const parentAsideFilterSelected = document.querySelector('.catalog_products__bottom-sort_parent_left');
function printTopFilterSelectedHTML(countProduckts) {

    parentAsideFilterSelected && (parentAsideFilterSelected.innerHTML = "");
    if (state.arraySelectElements.length > 0) {
        const htmlAsideFilter = `
        <div class="selected-filters">
        <p class="selected-filters_find-count">Найдено ${countProduckts} товарів</p>
        <button class="selected-filters_deleted-filters">Скасувати</button>
        <ul class="selected-filters_lists">
            ${generateFiltersSelectedListVAlue()}
            </ul>
        </div>
            `
        parentAsideFilterSelected && parentAsideFilterSelected.insertAdjacentHTML('beforeend', htmlAsideFilter)
    }
}

function generateFiltersSelectedListVAlue() {

    return state.arraySelectElements.map((e, i) => {
        let value;
        if (typeof state.arraySelectElementValue[i] === 'string') {
            value = state.arraySelectElementValue[i];
        } else if (typeof state.arraySelectElementValue[i] === 'object') {
            value = String(state.arraySelectElementValue[i].from) + '-' + String(state.arraySelectElementValue[i].to)
        }

        return `<li class="selected-filter_list">
            <p class="selected-filter_list_content" data-num="${i}">${value} </p>
            <div class="svg-close">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                    viewBox="0 0 512 512" height="1em" width="1em">
                    <path
                        d="M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z">
                    </path>
                </svg>
            </div>
        </li >`
    });
}

export default printTopFilterSelectedHTML;

