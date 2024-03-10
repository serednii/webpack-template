
import { addDataPost } from "../fetch/fetch";
import { urlJsonServer } from "../GlobalVariable";
//Активуємо деактивуємо радіо кнопки
export function clickTable(target) {
    const form = target.closest('form');
    if (target.classList.contains('table-category-select_checkbox')) {
        const range = form.querySelector('[value="range"]')
        const checkbox = form.querySelector('[value="checkbox"]')
        const radio = form.querySelector('[value="radio"]')

        if (target.checked) {
            range.disabled = false;
            checkbox.disabled = false;
            radio.disabled = false;
        } else {
            range.disabled = true;
            checkbox.disabled = true;
            radio.disabled = true;
            range.checked = false;
            checkbox.checked = true;
            radio.checked = false;
        }

    }
}


export function addTable(e) {//
    const table = e.closest('.table-category-select_parent');
    const category = table.querySelector('.table-category-select_title').innerText;
    const arrString = table.querySelectorAll('.stroka')
    const objFilter = {};

    arrString.forEach(e => {//перебираємо всі строки
        const form = e.querySelector('form');
        const range = form.querySelector('[value="range"]')
        const checkbox = form.querySelector('[value="checkbox"]')
        const radio = form.querySelector('[value="radio"]')
        const selectString = form.querySelector('.table-category-select_checkbox')

        if (selectString.checked) {//Якщо вибрана строка
            const checkboxSelect = range.checked && range.value || checkbox.checked && checkbox.value || radio.checked && radio.value;
            const key = e.querySelector('.table-category-select_key').innerText;
            const value = e.querySelector('.table-category-select_value').innerText;

            if (checkboxSelect === 'range') {
                const arrValue = value.split(',');
                const min = parseFloat(arrValue[0]);
                const max = parseFloat(arrValue[arrValue.length - 1]);

                let minV = (((max - min) * 0.2) + min).toFixed(2);
                let maxV = (((max - min) * 0.6) + min).toFixed(2);

                if (Number.isInteger(min)) {
                    minV = parseInt(minV);
                    maxV = parseInt(maxV);
                };
                objFilter[key] = [checkboxSelect, min, max, minV, maxV];
            } else {
                objFilter[key] = [checkboxSelect, ...value.split(',')];
            }
        }
    });
    addDataPost(urlJsonServer + 'shop_category_filter/', JSON.stringify([{ product_filters: category, filter: JSON.stringify(objFilter) }]));
}