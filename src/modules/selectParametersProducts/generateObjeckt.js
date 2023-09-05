

import { newPrice, nozzles, all } from "./Parameter_processing_functions";
export function generateObject(data) {
    const setParameters = new Object();
    data.forEach((e, i, arr) => {
        e = Object.assign(e, ...JSON.parse(e.parameters_new))
        // console.log(e)
        delete e.parameters_new;
        delete e.parametrs_text;
        delete e.kod_product;
        delete e.images_text;
        delete e.parameters;
        delete e.parameters;
        delete e.category;
        delete e.images;
        delete e.rating;
        delete e.oldPrice;
        delete e.title;
        delete e.sales;
        delete e.id;

        const key = Object.keys(e)

        key.forEach(k => {//Перебираємо обєкт по ключах
            // k = k.replace(/^"|"$/, "").trim(); 
            if (k === 'newPrice') {
                setParameters[k] = newPrice(e, k, setParameters);
            } else if (k === 'Насадки') {
                setParameters[k] = nozzles(e, k, setParameters);
            } else {
                setParameters[k] = all(e, k, setParameters);
            }
        });



        // else if (k === 'Вес' || k === 'Емкость блендера' || k === 'Макс. обороты вращения') {
        //     setParameters[k] = weight(e, k, setParameters);
        // } else if (k === 'Мощность (Вт)') {
        //     setParameters[k] = power(e, k, setParameters);
        // }
        // if (i < 10) console.log(Object.keys(e))
    })
    return setParameters;
}
