

import { newPrice, nozzles, all } from "./Parameter_processing_functions";
export function generateObject(data) {
    // debugger
    // console.log(data)
    // 

    let newObject = {};

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
            // k = k.replace(/^"|"$/, "").trim(); 
            if (k === 'newPrice') {
                newObject[k] = newPrice(obj, k, newObject);
            } else if (k === 'Насадки') {
                newObject[k] = nozzles(obj, k, newObject);
            } else {
                newObject[k] = all(obj, k, newObject);
            }
        });


        // else if (k === 'Вес' || k === 'Емкость блендера' || k === 'Макс. обороты вращения') {
        //     newObject[k] = weight(e, k, newObject);
        // } else if (k === 'Мощность (Вт)') {
        //     newObject[k] = power(e, k, newObject);
        // }
        // if (i < 10) console.log(Object.keys(e))
    })
    // console.log(newObject)
    // for (const key in newObject) {
    //     newObject[key] = [...Array.from(newObject[key])]
    // }

    return newObject

}
