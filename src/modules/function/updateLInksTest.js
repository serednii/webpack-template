
import { data } from 'autoprefixer';
import { getQuery, updateDataPost, addDataPost } from '../fetch/fetch';
import { urlJsonServer } from '../GlobalVariable';
//Очистка ссилок img
async function updateLInksTest() {

    let categoryList = await getQuery(urlJsonServer + 'shop_category/');
    [categoryList] = JSON.parse(categoryList.data[0].category);

    {
        const getQueryData1 = await getQuery(urlJsonServer + 'shop/', '', [], '', `page[size]=${50000}>page[limit]=${6}/fields[shop]=id,images`);
        const newDataArr = [];
        getQueryData1.data.forEach(e => {
            let images = JSON.parse(e.images);
            if (images.length > 6) {
                images = images.slice(0, 6);
                e.images = JSON.stringify(images);
                newDataArr.push(e);
            }
        })
        const parentArr = await concatArray(newDataArr);
    }

}




//відсилає на сервер масив даних для додавання з певною періодичністью
function sendAddDataPostArray(table, data, time = 10, counter = 0, counterEnd = 0) {
    return new Promise(resolve => {
        const myInterval = setInterval(async function () {
            if (counter === counterEnd) {
                clearInterval(myInterval);
                resolve('resolved');
            }
            addDataPost(urlJsonServer + `${table}/`, JSON.stringify(data[counter]));
            counter++;
        }, time);
    })
}

//відсилає на сервер масив даних для Обновлення з певною періодичністью
function sendUpdateDataPostArray(table, data, time = 10, counter = 0, counterEnd = 0) {

    return new Promise(resolve => {
        const myInterval = setInterval(async function () {
            if (counter === counterEnd) {
                console.log('END ');
                clearInterval(myInterval);
                resolve('resolved');
            }
            console.log(data[counter]);
            updateDataPost(urlJsonServer + `${table}/`, JSON.stringify(data[counter]));
            counter++;
        }, time);
    })
}



//обєднює до пібмасиву обєкти величиною не більше sizeBlock і повертає масив з підмасивами
function concatArray(data, sizeBlock = 8000) {
    let parentArr = [];
    let childrenArr = []; //тимчасовий масив для зберігання підмасивів
    const arrLength = data.length;
    return new Promise(resolve => {
        data.forEach((e, i) => {
            childrenArr.push(e)
            if (JSON.stringify(childrenArr).length > sizeBlock) {
                childrenArr.pop();
                parentArr.push(childrenArr);
                childrenArr = [];
                childrenArr.push(e);
            }
            if (arrLength - 1 === i) {//Якщо кінець масиву то повертаємо результат і виходимо
                parentArr.push(childrenArr);
                resolve(parentArr);
            }
        });
    })
}



function chengeImgLink(images) {
    return new Promise(((resolve, rejeckt) => {
        let img = document.createElement('img');
        img.src = images;
        img.onload = () => {
            resolve('ok');
        }
        img.onerror = () => {
            rejeckt('error');
        }
    }));
}


//Рекурсивна функція розкладає меню на окремі елементи формуючи шлях і кінцевий маасив
async function parseCategory(obj, arr) {
    const key1 = Object.keys(obj)
    for (const k of Object.keys(obj)) {
        if (!Array.isArray(obj[k])) {
            parseCategory(obj[k], [...arr, k])
        } else {
            const dataArray = await getQuery(urlJsonServer + 'shop/', 'category', [...arr, k], '', '');
            console.log(`${[...arr, k]}   ${obj[k]}`)
            console.log(dataArray.data.length);
        }
    }
}



export default updateLInksTest;