const mysql = require("mysql2");
const axios = require('axios').default;
const fs = require('fs');


const d = new Date();
// let time = d.getTime();



const connection = mysql.createConnection({
    host: "",
    user: "root",
    database: "seredniimykola",
    password: ""
});


// тестирование подключения
connection.connect(function (err) {
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    else {
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});
// 'Мелкая_бытовая_техника',
// 'Инструмент_и_садовая_техника',
// 'Дом_и_ремонт',
// 'Авто_и_мото',
// 'Побутова_техніка',
// 'Дитячі_товари',
// 'Електроніка',
// 'Спорт',
// 'Для_тварин',
// 'Детские_товары_и_игрушки',
// 'ТВ_и_видеотехника',
// 'Компьютерная_техника',
// 'Мобильные_и_связь'


const sql = `SELECT * FROM shop  GROUP BY images`;
// const sql = "SELECT * FROM `shop` WHERE `category` LIKE '%Мелкая_бытовая_техника%'";

connection.query(sql, function (err, results) {
    if (err) console.log(err);
    // console.log(results);
    // results.forEach(e => {

    const lenghtImages = results.length;
    console.log(lenghtImages);
    // console.time('Execution Time');
    // results.sort((a, b) => a.parameters.localeCompare(b.parameters))
    // console.timeEnd('Execution Time');


    // console.time('Execution Time');
    // const results1 = results.reduce((arr, e, i) => {
    //     // console.log(i)
    //     // if (arr.findIndex(ee => ee.images === e.images) === -1) {
    //     // if (arr.findIndex(ee => ee.parameters === e.parameters) === -1) {
    //     if (arr.findIndex(ee => ee.parameters === e.parameters) === -1) {
    //         return [...arr, e];
    //     } else {
    //         return arr
    //     }
    // }, []);
    // console.timeEnd('Execution Time');
    // console.log(results1.length)

    //всі записи з одинаковими parameters видаляємо лишаємо тільки один і викидаємо де нема зображення
    // console.time('Execution Time');
    let newArr = [];
    // const arrDeleteId = [];
    // // newArrEmptyImg = [];
    // for (let i = 0; i < lenghtImages; i++) {
    //     if (newArr.findIndex(ee => ee.parameters === results[i].parameters) === -1) {
    //         if (results[i].images !== '[]') {
    //             newArr.push(results[i].id);
    //         } else {
    //             arrDeleteId.push(results[i].id)
    //             // console.log(results[i].id)
    //             // newArrEmptyImg.push(results[i]);
    //             // const sql1 = `DELETE FROM shop WHERE id = ${results[i].id}`
    //             // console.log(sql1);
    //             // const data = [34, "Tom"];
    //             // connection.query(sql1, function (err, results) {
    //             //     if (err) console.log(err);
    //             //     // console.log(results);
    //             // });
    //         }
    //     } else {
    //         arrDeleteId.push(results[i].id)
    //         console.log(results[i].id)
    //         // const sql1 = `DELETE FROM shop WHERE id=${results[i].id};`
    //         // console.log(sql1);
    //         // const data = [34, "Tom"];
    //         // connection.query(sql1, function (err, results) {
    //         //     if (err) console.log(err);
    //         //     // console.log(results);
    //         // });
    //     }
    // }
    // // console.log(results[i].images)

    // console.log(arrDeleteId.length)
    // console.log(newArr.length)

    // console.timeEnd('Execution Time');

    // let i = 0;
    // const lengthNewArr = arrDeleteId.length
    // const myInterval = setInterval(() => {
    //     if (i >= lengthNewArr - 1) {
    //         clearInterval(myInterval);
    //     }
    //     const sql1 = `DELETE FROM shop WHERE id=${arrDeleteId[i]};`
    //     console.log(sql1);
    //     const data = [34, "Tom"];
    //     connection.query(sql1, function (err, results) {
    //         if (err) console.log(err);
    //         // console.log(results);
    //     });
    //     i++;
    // }, 1);


    //заповнюємо пусті малюнки 
    // for (let i = 0; i < newArrEmptyImg.lenght; i++) {
    //     const randNumber = Math.floor(Math.random() * newArr.length - 1);
    //     newArrEmptyImg[i].images = newArr[randNumber].images
    // }
    //Обєднюємо масиви і отримаємо один змалюнками
    // newArr = newArr.concat(newArrEmptyImg);
    // newArrEmptyImg = [];
    // console.log(newArr.length)

    // console.log(newArr)
    // console.timeEnd('Execution Time');


    // console.log(newArrEmptyImg[0])
    // console.log(newArr[0])
    // UPDATE `shop` SET `images_text`='' WHERE 1;
    /******************************************************** */
    // В newArr заносимо список всіх малюнків з привязкою до id і alt
    console.time('node --trace-warnings ...');
    let arrImages = [];
    results.forEach(e => {
        const t = JSON.parse(e.images)
        t.forEach(el => {
            arrImages.push({ img: el.img, alt: [el.alt], id: [e.id] })
        })
    })

    console.timeEnd('node --trace-warnings ...');

    // //Всі однакові малюнки удаляємо лишаємо тільки один і id alt в яких вони були записані
    console.time('node --trace-warnings ...');
    const newArr1 = [];

    for (let i = 0; i < arrImages.length; i++) {
        const indd = newArr1.findIndex(ee => ee.img === arrImages[i].img);
        if (indd === -1) {
            newArr1.push(arrImages[i])
        } else {
            newArr1[indd].id = [...newArr1[indd].id, ...arrImages[i].id];
            newArr1[indd].alt = [...newArr1[indd].alt, ...arrImages[i].alt];
        }
    }

    console.log(newArr1.length)
    console.timeEnd('node --trace-warnings ...');
    // newArr1.forEach(e => {
    //     if (e.id.length > 2) {
    //         console.log(e.id);
    //     }
    // })

    let i = 0;
    const lengthNewArr = newArr1.length
    const myInterval = setInterval(() => {
        if (i >= lengthNewArr - 1) {
            clearInterval(myInterval);
        }
        getImg(newArr1[i])
        i++;
    }, 40);

    /******************************************************** */

});




// const myInterval1 = setInterval(() => {
//     flaqCloseConnection = true;
//     setTimeout(() => {
//         if (flaqCloseConnection) {
//             // закрытие подключения
//             connection.end(function (err) {
//                 if (err) {
//                     return console.log("Ошибка: " + err.message);
//                 }
//                 console.log("Подключение закрыто");
//             });
//             clearInterval(myInterval1);
//         }
//     }, 5000)
// }, 3000);





function getImg({ img, id }) {
    console.log(img)

    axios({
        method: 'get',
        url: img,
        responseType: 'stream'
    })
        .then(function (response) {
            img = img.replace(/http:\/\/www\.|http:\/\/|\.|\/|-|jpg/gi, '');
            let urlImg = `images_2/${img}.jpg`;
            response.data.pipe(fs.createWriteStream(urlImg));
            // console.log(urlImg)
            let sql1 = '';
            id.forEach(up => {
                sql1 = `UPDATE shop SET images_text = CONCAT(images_text, ' ${urlImg} ', ",") WHERE id = ${up}; `;
                const data = [34, "Tom"];
                console.log(sql1);
                connection.query(sql1, data, function (err, results) {
                    if (err) console.log(err);
                    // console.log(results);
                });

            })

        })
        .catch(function (error) {
            console.log(error);
        });
}





// закрытие подключения
// connection.end(function (err) {
//     if (err) {
//         return console.log("Ошибка: " + err.message);
//     }
//     console.log("Подключение закрыто");
// });

