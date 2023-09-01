
import { getZapros, updateDataPost } from '../fetch/fetch';
import { urlJsonServer } from '../GlobalVariable';
//Очистка ссилок img
async function clearImgLInksBead(bbb) {
    const clearcountelementParent = document.querySelector('#clearcountelement_parent');
    clearcountelementParent && clearcountelementParent.insertAdjacentHTML('afterBegin', `
    <div class="clearcountelement"><span>${bbb}</span> - <span class=" bbb${bbb}" ></span></div>
    `)
    const elementShowCounter = clearcountelementParent.querySelector('.bbb' + bbb);
    elementShowCounter.innerText = '0'
    const countBlock = 100;
    let getQuery = await getZapros(urlJsonServer + 'shop/5', '', [], '', '');

    const sizeList = getQuery.meta[0].count
    const sizeBlock = parseInt(getQuery.meta[0].count / countBlock)
    // const sizeBlock = 10
    // 1-3 71
    console.log(sizeList);
    console.log(sizeBlock);
    let counter = 0;
    const rezultArr = [];


    // const bbb = 5;
    // 66
    for (let block = bbb; block <= bbb; block++) {
        // const getQueryData = await getZapros(urlJsonServer + 'shop/', '', [], '', `page[size]=${sizeBlock}>page[limit]=${block}/fields[shop]=id,parameters,parameters_new`);
        let pp, ff, ppff = [];
        const getQueryData = await getZapros(urlJsonServer + 'shop/', '', [], '', `page[size]=${sizeBlock}>page[limit]=${block}/fields[shop]=id,images`);
        let flag = false;
        console.log(getQueryData.data.length)


        // for (let i = 0; i < getQueryData.data.length; i++) {
        const dlll = getQueryData.data.length;
        let i = 0;
        const myInterval = setInterval(() => {
            if (i === dlll - 1) {
                clearInterval(myInterval)
            }
            let arrImg = [];
            arrImg = JSON.parse(getQueryData.data[i].images);

            if (arrImg.length === 0) console.log('EMPTY IMG');

            // arrImg.forEach((element, i) => {
            //     // console.log();
            //     ff = element.img.match(/http:\w{1}/g);
            //     ff && (element.img = element.img.replace(/http:/g, 'http://'));
            //     // pp = element.img.match(/http:\/\/magazilla.ru|http:\/\/www.technohit.ru|http:\/\/static-eu.insales.ru|http:\/\/sibpartner.ru|http:\/\/www.aquadomspb.ru/g)
            //     // pp && arrImg.splice(i, 1);//видаляємо елемент змасива
            //     // console.log(ff);
            //     // console.log(pp);
            //     // console.log(element.img);
            //     if (ff) {
            //         ppff.push(1);
            //     }
            //     // console.log();
            // });

            // arrImg.forEach((element, i) => {
            //     // console.log();
            //     // ff = element.img.match(/http:\w{1}/g);
            //     // ff && (element.img = element.img.replace(/http:/g, 'http://'));
            //     pp = element.img.match(/http:\/\/magazilla.ru|http:\/\/www.technohit.ru|http:\/\/static-eu.insales.ru|http:\/\/sibpartner.ru|http:\/\/www.aquadomspb.ru/g)
            //     pp && arrImg.splice(i, 1);//видаляємо елемент змасива
            //     // console.log(ff);
            //     // console.log(pp);
            //     // console.log(element.img);
            //     if (pp) {
            //         ppff.push(1);
            //     }
            //     // console.log();
            // });

            arrImg.forEach((element, i) => {

                var img = document.createElement('img');
                img.src = element.img;

                img.onload = () => {
                    console.log('OK');
                }

                img.onerror = () => {
                    console.log(`меня нет  ${counter} ${getQueryData.data[i].id}  ${element.img}`);
                    arrImg.splice(i, 1);//видаляємо елемент змасива
                    // flag = true;//Позначаємо що в елементі видалялися записи
                    getQueryData.data[i].images = JSON.stringify(arrImg);
                    elementShowCounter.innerText = counter;
                    counter++;
                    // updateDataPost(urlJsonServer + 'shop/' + getQueryData.data[i].id, JSON.stringify(getQueryData.data[i]));
                }

            });
        }, 0);


        // if (ppff.length > 0) {
        //     getQueryData.data[i].images = JSON.stringify(arrImg);
        //     // console.log(getQueryData.data[i].id)
        //     console.log(getQueryData.data[i]);
        //     updateDataPost(urlJsonServer + 'shop/' + getQueryData.data[i].id, JSON.stringify(getQueryData.data[i]))
        //     counter++;
        //     clearcountelement && (clearcountelement.innerText = counter);
        //     // rezultArr.push({ id: getQueryData.data[i].id, images: getQueryData.data[i] });
        // }


        ppff = [];

        // {//**********************************************
        // const newStr2 = getQueryData.data[i].parameters.match(/\'\"/g, '');//доробити 1
        //'удар' 'Универсал'
        // console.log(getQueryData.data[i].parameters)
        // const newStr2 = getQueryData.data[i].parameters.match(/\'\"/g, '');
        // 'удар' 'Универсал' 'Прозвонка' 'Крона'
        // let newStr1 = getQueryData.data[i].parameters.match(/\'удар\'|\'Универсал\'|\'Прозвонка\'|\'Крона\'|\'|\'\"/g, '');
        // let newStr2 = getQueryData.data[i].parameters_new.match(/\'удар\'|\'Универсал\'|\'Прозвонка\'|\'Крона\'|\'\"|\'/g, '');

        // (newStr2 || newStr1) && console.log(`${getQueryData.data[i].id}  ++++++++++  ${newStr1} ++++++ ${newStr2}`);

        // getQueryData.data[i].parameters = getQueryData.data[i].parameters.replace(/\'/g, '');//доробити 1
        // getQueryData.data[i].parameters = getQueryData.data[i].parameters.replace(/\'\"/g, '\"');//доробити 1
        // getQueryData.data[i].parameters = getQueryData.data[i].parameters.replace(/\'удар\'/g, 'удар');//доробити 1
        // getQueryData.data[i].parameters = getQueryData.data[i].parameters.replace(/\'Универсал\'/g, 'Универсал');//доробити 1
        // getQueryData.data[i].parameters = getQueryData.data[i].parameters.replace(/\'Прозвонка\'/g, 'Прозвонка');//доробити 1
        // getQueryData.data[i].parameters = getQueryData.data[i].parameters.replace(/\'Крона\'/g, 'Крона');//доробити 1

        // getQueryData.data[i].parameters_new = getQueryData.data[i].parameters_new.replace(/\'/g, '');//доробити 1
        // getQueryData.data[i].parameters_new = getQueryData.data[i].parameters_new.replace(/\'\"/g, '\"');//доробити 1
        // getQueryData.data[i].parameters_new = getQueryData.data[i].parameters_new.replace(/\'удар\'/g, 'удар');//доробити 1
        // getQueryData.data[i].parameters_new = getQueryData.data[i].parameters_new.replace(/\'Универсал\'/g, 'Универсал');//доробити 1
        // getQueryData.data[i].parameters_new = getQueryData.data[i].parameters_new.replace(/\'Прозвонка\'/g, 'Прозвонка');//доробити 1
        // getQueryData.data[i].parameters_new = getQueryData.data[i].parameters_new.replace(/\'Крона\'/g, 'Крона');//доробити 1

        // (newStr2 || newStr1) && updateDataPost(urlJsonServer + 'shop/' + getQueryData.data[i].id, JSON.stringify(getQueryData.data[i]));

        // newStr1 = getQueryData.data[i].parameters.match(/\'удар\'|\'Универсал\'|\'Прозвонка\'|\'Крона\'|\'\"/g, '');
        // newStr2 = getQueryData.data[i].parameters_new.match(/\'удар\'|\'Универсал\'|\'Прозвонка\'|\'Крона\'|\'\"/g, '');

        // (newStr2 || newStr1) && console.log(`${getQueryData.data[i].id}  ----  ${newStr1} ** ${newStr2}`);
        // getQueryData.data[i].parameters = getQueryData.data[i].parameters.replace(/\'удар\'/g, 'удар');//доробити 1
        // getQueryData.data[i].parameters = getQueryData.data[i].parameters.replace(/\'удар\'/g, 'удар');//доробити 1

        // getQueryData.data[i].parameters = getQueryData.data[i].parameters.replace(/\'\"/g, '\"');
        // }//**********************************************

        // }//

    }


    // promise.then(resolve => {
    console.log(counter);
    // clearcountelement && (clearcountelement.innerText = counter);

    //     const dl = rezultArr.length;
    //     let dlCounter = 0;
    //     console.log(rezultArr)
    //     // if (dl) {
    //     //     const myInterval = setInterval(() => {
    //     //         if (dlCounter === dl - 1) { clearInterval(myInterval) }
    //     //         updateDataPost(urlJsonServer + 'shop/' + rezultArr[dlCounter].id, JSON.stringify(rezultArr[dlCounter].images))
    //     //         dlCounter++;
    //     //         console.log('Отправлено');
    //     //     }, 5);
    //     // }
    // })











    const newMass = [];





    // getQuery.data.forEach(element => {
    // const arrImg = JSON.parse(element.images)
    // console.log(arrImg)
    // console.log(element.images)
    // let flag = false;

    // arrImg.forEach((el, i) => {//перебираємо всі елементи і находимо потрібний
    //     if (el.img.includes('http://magazilla.ru/')) {
    //         // console.log('************  ' + element.id + '  ************')
    //         // console.log(el.img)
    //         arrImg.splice(i, 1);//видаляємо елемент змасива
    //         flag = true;//Позначаємо що в елементі видалялися записи
    //     }
    // });

    // arrImg.forEach((el, i) => {//перебираємо всі елементи і шукаємо биті ссилки

    //     var img = document.createElement('img');
    //     img.src = el.img;
    //     // bedLinks.appendChild(img);
    //     // img.onload = () => images.appendChild(img);
    //     img.onload = () => console.log('OK');
    //     img.onerror = () => {
    //         console.log(`меня нет  ${counter} ${element.id}`);
    //         // console.log(arrImg);

    //         arrImg.splice(i, 1);//видаляємо елемент змасива
    //         // console.log(arrImg);

    //         flag = true;//Позначаємо що в елементі видалялися записи
    //         element.images = JSON.stringify(arrImg)
    //         // updateDataPost(urlJsonServer + 'shop/' + element.id, JSON.stringify(element))
    //         counter++;

    //     }
    // });


    // if (flag) {// якщо в елементі є співпадіння заносимо його в другий масив
    //     element.images = JSON.stringify(arrImg)
    //     newMass.push(element);
    //     counter++;
    // }


    // });
    // setTimeout(() => {
    //     console.log(`Counter ${counter}`)
    //     console.log(`newMass ${newMass}`)

    //     const lengthNewMass = newMass.length;
    //     let counterTimerNewMass = 0;
    //     console.log(lengthNewMass);
    //     const myInterval = setInterval(() => {
    //         if (counterTimerNewMass >= lengthNewMass) { clearInterval(myInterval); }
    //         else {
    //             updateDataPost(urlJsonServer + 'shop/' + newMass[counterTimerNewMass].id, JSON.stringify(newMass[counterTimerNewMass]))
    //             console.log(counterTimerNewMass);
    //             counterTimerNewMass++;
    //         }

    //     }, 20);
    // }, 10000);


}


export default clearImgLInksBead;