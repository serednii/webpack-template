
import { data } from 'autoprefixer';
import { getQuery, updateDataPost, addDataPost } from '../fetch/fetch';
import { urlJsonServer } from '../GlobalVariable';
//Очистка ссилок img
async function updateLInksTest() {


    // const rezCategory = await  getQuery(urlJsonServer + 'shop/', 'category', ['Мелкая_бытовая_техника', 'Кухня', 'Мясорубки'], 'rand()', '');

    // console.log(rezCategory)
    // for (const obj of rezCategory.data) {
    //     console.log(JSON.parse(obj.images))
    // }
    let categoryList = await getQuery(urlJsonServer + 'shop_category/');
    [categoryList] = JSON.parse(categoryList.data[0].category);
    console.log(categoryList)

    // parseCategory(categoryList, [])

    // let getQuery = await  getQuery(urlJsonServer + 'shop/5', '', [], '', '');
    // const sizeList = getQuery.meta[0].count;
    // const sizeBlock = 2000;
    // const countBlock = parseInt(getQuery.meta[0].count / sizeBlock);

    // console.log(sizeList);
    // console.log(sizeBlock);
    // console.log(countBlock);

    // let counter = 1;
    // const getQueryData1 = await  getQuery(urlJsonServer + 'shop/2', '', [], '', ``);



    {
        // const getQueryData1 = await  getQuery(urlJsonServer + 'shop/', '', [], '', `page[size]=${10000}>page[limit]=${2}`);
        // console.log(getQueryData1.data);

        const getQueryData1 = await getQuery(urlJsonServer + 'shop/', '', [], '', `page[size]=${50000}>page[limit]=${6}/fields[shop]=id,images`);
        console.log(getQueryData1.data);
        let newDataArr = [];
        getQueryData1.data.forEach(e => {
            // e.title = (e.title.replace(/kvest|kolo|test/gi, '')).trim();
            // e.title = e.title + 'test ';
            let images = JSON.parse(e.images);
            // images.forEach(async (obj, i) => {
            if (images.length > 6) {
                // console.log(e.id + '  ' + images.length);
                images = images.slice(0, 6);
                e.images = JSON.stringify(images);
                // console.log(e.id + ' -- ' + images.length);
                newDataArr.push(e);
            }
            // });
        })
        // newDataArr = newDataArr.slice(0, 10)
        console.log(newDataArr);


        // getQueryData1.data.forEach(e => {
        //     const images = JSON.parse(e.images);
        //     const newArray = [];
        //     let flagDeleteImg = false;
        //     // console.log('********************************');

        //     images.forEach(async (obj, i) => {
        //         // console.log(obj.img);
        //         let rez;

        //         try {
        //             rez = await chengeImgLink(obj.img);
        //             if (rez === 'ok') {
        //                 console.log('ok');
        //                 newArray.push(obj);
        //             }

        //         } catch (err) {
        //             console.log(e.id + "  " + obj.img)
        //             flagDeleteImg = true;
        //             // obj.img = obj.img.replace(/HHHH/g, '');
        //             // newArray.push(obj);
        //             e.images = JSON.stringify(newArray);
        //             console.log(JSON.parse(e.images));
        //             updateDataPost(urlJsonServer + `shop/`, JSON.stringify([e]));
        //         }


        //         // if (images.length - 1 === i) {
        //         //     if (flagDeleteImg) {
        //         //         console.log(rez);
        //         //         // console.log(newArray.lenght);
        //         //         e.images = JSON.stringify(newArray);
        //         //         console.log(JSON.parse(e.images));
        //         //         updateDataPost(urlJsonServer + `shop/`, JSON.stringify([e]));
        //         //     }
        //         // }

        const parentArr = await concatArray(newDataArr);
        // sendAddDataPostArray('shop1', parentArr, 50, 0, parentArr.length - 1);
        // sendUpdateDataPostArray('shop', parentArr, 100, 0, parentArr.length - 1);
        // console.log(parentArr);
        //     });
        // });
    }

    // parentArr.forEach(e => {
    //     console.log(JSON.stringify(e).length)
    // })





    // const getQueryData = await  getQuery(urlJsonServer + 'shop/', '', [], '', `page[size]=${10}>page[limit]=${10}`);
    // const getQueryData = await  getQuery(urlJsonServer + 'shop/', '', [], '', `page[size]=${30}>page[limit]=${4}/fields[shop]=id,title`);
    // // getQueryData.data.forEach(e => {
    // //     console.log(e);
    // // });

    // // const newArr = getQueryData.data.map(e => {
    // //     e.title = e.title + ' TEST';
    // // return e;
    // // });
    // // console.log(newArr);

    // // getQueryData.data.forEach(e => {
    // //     e.title += ' TEST';
    // //     // e.title = e.title.replace(/TEST|KVEST|KOLO/g, '');
    // // });

    // console.log(getQueryData.data);
    // 
    // // // updateDataPost(urlJsonServer + 'shop1/', JSON.stringify(getQueryData.data));
    //  addDataPost(urlJsonServer + 'shop1/', JSON.stringify(getQueryData.data));
}




//відсилає на сервер масив даних для додавання з певною періодичністью
function sendAddDataPostArray(table, data, time = 10, counter = 0, counterEnd = 0) {
    return new Promise(resolve => {
        const myInterval = setInterval(async function () {
            if (counter === counterEnd) {
                console.log('END ');
                clearInterval(myInterval);
                resolve('resolved');
            }
            // console.log(data[counter]);
            addDataPost(urlJsonServer + `${table}/`, JSON.stringify(data[counter]));
            // console.log(counter);
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
            // console.log(counter);
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
            // console.log('OK');
            resolve('ok');
        }

        img.onerror = () => {
            // console.log(`меня нет  ${counter} ${getQueryData.data[i].id}  ${element.img}`);
            rejeckt('error');
        }
    }));
}


//Рекурсивна функція розкладає меню на окремі елементи формуючи шлях і кінцевий маасив
async function parseCategory(obj, arr) {
    const key1 = Object.keys(obj)
    // console.log(key1)

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