

import { getZapros, transformData, updateDataPost, addDataPost } from '../fetch/fetch';
import { urlJsonServer } from '../GlobalVariable';

//
async function selectParametersProducts() {
    const getQueryData = transformData(await getZapros(urlJsonServer + 'shop/', 'category', ['Мелкая_бытовая_техника---Кухня---Кухонные_комбайны'], '', ''));
    console.log(getQueryData);
    const setParameters = new Set();
    getQueryData.forEach((e, i, arr) => {
        e = Object.assign(e, ...JSON.parse(e.parameters_new))
        delete e.parameters_new;
        delete e.parametrs_text;
        delete e.kod_product;
        delete e.parameters;
        delete e.parameters;
        delete e.category;
        delete e.images;
        delete e.rating;
        delete e.id;



        const key = Object.keys(e)
        key.forEach(k => {
            setParameters.add(k)
        })

        if (i < 10) console.log(Object.keys(e))
    })
    console.log(setParameters)


}




//відсилає на сервер масив даних для додавання з певною періодичністью
// function sendAddDataPostArray(table, data, time = 10, counter = 0, counterEnd = 0) {
//     return new Promise(resolve => {
//         const myInterval = setInterval(async function () {
//             if (counter === counterEnd) {
//                 console.log('END ');
//                 clearInterval(myInterval);
//                 resolve('resolved');
//             }
//             // console.log(data[counter]);
//             addDataPost(urlJsonServer + `${table}/`, JSON.stringify(data[counter]));
//             // console.log(counter);
//             counter++;
//         }, time);
//     })
// }

// //відсилає на сервер масив даних для Обновлення з певною періодичністью
// function sendUpdateDataPostArray(table, data, time = 10, counter = 0, counterEnd = 0) {

//     return new Promise(resolve => {
//         const myInterval = setInterval(async function () {
//             if (counter === counterEnd) {
//                 console.log('END ');
//                 clearInterval(myInterval);
//                 resolve('resolved');
//             }
//             console.log(data[counter]);
//             updateDataPost(urlJsonServer + `${table}/`, JSON.stringify(data[counter]));
//             // console.log(counter);
//             counter++;
//         }, time);
//     })
// }

export default selectParametersProducts;