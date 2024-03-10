

import { newPrice, nozzles, all } from "./Parameter_processing_functions";
export function generateObject(data) {
    const newObject = {};

    data.forEach((e, i, arr) => {
        const obj = Object.assign({}, e, ...JSON.parse(e.parameters_new))

        delete obj.parameters_new;
        delete obj.parametrs_text;
        delete obj.kod_product;
        delete obj.images_text;
        delete obj.parameters;
        delete obj.parameters;
        delete obj.category;
        delete obj.images;
        delete obj.rating;
        delete obj.oldPrice;
        delete obj.title;
        delete obj.sales;
        delete obj.id;

        const key = Object.keys(obj)

        key.forEach(k => {//Перебираємо обєкт по ключах
            if (k === 'newPrice') {
                newObject[k] = newPrice(obj, k, newObject);
            } else if (k === 'Насадки') {
                newObject[k] = nozzles(obj, k, newObject);
            } else {
                newObject[k] = all(obj, k, newObject);
            }
        });
    })
    return newObject
}
