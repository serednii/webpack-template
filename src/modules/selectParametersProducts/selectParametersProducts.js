import { getQuery, transformData, updateDataPost, addDataPost } from '../fetch/fetch';
import { urlJsonServer } from '../GlobalVariable';
import { printTable, getTRHtml } from './printTable';
import { arrayCategory } from './const_category_list';
import { generateObject } from './generateObjeckt';

export async function selectParametersProducts() {

    // let getQueryData1 = transformData(await  getQuery(urlJsonServer + 'shop/', '', [], '', `page[size]=10000>page[limit]=1/fields[shop]=parameters_new,category`));
    // const getQueryData2 = transformData(await  getQuery(urlJsonServer + 'shop/', '', [], '', `page[size]=10000>page[limit]=2/fields[shop]=id,images`));
    // const getQueryData3 = transformData(await  getQuery(urlJsonServer + 'shop/', '', [], '', `page[size]=10000>page[limit]=3/fields[shop]=id,images`));
    // const getQueryData4 = transformData(await  getQuery(urlJsonServer + 'shop/', '', [], '', `page[size]=10000>page[limit]=4/fields[shop]=id,images`));
    // getQueryData1 = [...getQueryData1, ...getQueryData2, ...getQueryData3, ...getQueryData4];
    // console.log(getQueryData1)
    // console.log(getQueryData2)
    // console.log(getQueryData3)
    // console.log(getQueryData4)

    const arrayParametrsCategory = [];
    let counter = 0;
    arrayCategory.forEach(async function (keyCategory, i) {
        if (i < 50) {
            const getQueryData = transformData(await getQuery(urlJsonServer + 'shop/', 'category', [keyCategory], '', ''));
            // console.log(getQueryData);
            //Передаємо в функцію масив обєктів з товарами
            const setParameters = generateObject(getQueryData);
            // console.log({ [keyCategory]: setParameters })

            // arrayParametrsCategory.push({ [keyCategory]: setParameters })
            //Роздруковуємо на екран товари з параметрами
            printTable({ params: setParameters, nameCategory: keyCategory })

            counter++;
            if (counter === 3) {
                console.log(...arrayParametrsCategory)
            }
        }
    })
}










{/* <tr>
<th scope="col">#</th>
<th scope="col">Имя</th>
<th scope="col">Фамилия</th>
<th scope="col">Обращение</th>
</tr> */}



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


