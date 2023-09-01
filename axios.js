const axios = require('axios').default;
const fs = require('fs');
const fetch = require('node-fetch');


// axios({
//     method: 'get',
//     url: 'http://trygonimetry.smm.zzz.com.ua/shop/5',
//     responseType: 'stream'
// })
//     .then(function (response) {
//         // response.data.pipe(fs.createWriteStream('images/something.jpg'));
//         console.log(response)
//     })
//     .catch(function (error) {
//         // handle error
//         console.log(error);
//     });




fetch("http://trygonimetry.smm.zzz.com.ua/shop_category")
    .then(res => res.json())
    .then(data => {
        console.log(JSON.parse(data.data[0].category))
        const key = Object.keys(JSON.parse(data.data[0].category)[0])
        console.log(key)
    })





// getZapros("http://trygonimetry.smm.zzz.com.ua/shop/5")

// async function getZapros(url = "") {

//     // console.log(type)
//     // const urlSearch = url + allDataSearch(type, arrCatalogs) + (rand ? rand : "") + (limit ? ("/" + limit) : "");
//     // console.log(urlSearch)
//     let response = await fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//         })
//     // response.json().then(data => console.log(data))
//     // return response.json();
//     // fetch(urlSearch)
//     //     .then(response => response.json())
//     //     .then(data => {
//     //         const _data = transformData(data);
//     //         // console.log(_data);
//     //         // generateCards(data, classs, count);
//     //         // return transformData(data);
//     //         return _data;
//     //     })
// }