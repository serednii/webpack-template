
export async function getQuery(url = "", type = "", arrCatalogs = [], rand = '', limit = '') {
    console.log(type);
    console.log(arrCatalogs);
    console.log(rand);
    console.log(limit);


    const urlSearch = url + allDataSearch(type, arrCatalogs) + (rand ? rand : "") + (limit ? ("/" + limit) : "");
    // $('#text-out').html(urlSearch).css({ "color": "black", "padding": "20px" });
    console.log(urlSearch);
    let response;
    try {
        response = await fetch(urlSearch)
    } catch (err) {
        console.log(err)
    }

    return response.json();
}


//Відправляємо запрос методом POST
export async function postQuery(url = '', data = {}) {
    // Default options are marked with *
    console.log(url);
    console.log(data);
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: data // body data type must match "Content-Type" header
    })

    return response.json(); // parses JSON response into native JavaScript objects
}


export async function getQueryObj(url, table = '', search = '', rand = '', limit = '') {
    const urlSearch = url + table + (search ? ('/' + search.replace(/ /ig, '+')) : "") + (rand ? ('/' + rand) : "") + (limit ? ('/' + limit) : "");
    console.log(urlSearch);
    let response = await fetch(urlSearch);
    return response.json();
}


export async function getQueryAll(url = "", data = "") {
    if (data === "") return {};
    const urlSearch = url + 'filter=' + data

    console.log(urlSearch);
    let response = await fetch(urlSearch)
    return response.json()
}


// *******************************************************
export function transformData(data) {
    console.log(data)
    if (!data.data.message) {

        const dataObject = data.data.map(e => {
            const _e = Object.assign({}, e);
            if (typeof _e.images === 'string') _e.images = JSON.parse(_e.images);
            if (typeof _e.images_text === 'string') {
                _e.images_text = [];
                e.images_text.split(",").forEach(img => _e.images_text.push({ img: img, alt: "" }))
            }
            if (typeof e.parameters === 'string') _e.parameters = JSON.parse(e.parameters)
            return _e;
        })
        return dataObject;
    } else return false;
}
function StringToObject(img) {
    this.img = img;
    this.alt = "";
}
// *******************************************************


export function allDataSearch(type = "", data = []) {
    let stringSearch = "";
    data.forEach(e => {
        e && (stringSearch += `${type !== '' ? `filter-${type}=` : ''}${e}/`);
    })
    return stringSearch;
}

//Всі дані в тому числі вложені приходять в JSON варіанті  
export async function updateDataPost(url = '', data = {}) {
    // Default options are marked with *
    console.log(url);
    const response = await fetch(url, {
        method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: data // body data type must match "Content-Type" header
    });
    return await response.text(); // parses JSON response into native JavaScript objects
}


export async function addDataPost(url = '', data = {}) {
    // Default options are marked with *
    console.log(url)
    console.log(data)
    const response = await fetch(url, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + 'username' + ":" + 'password'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: data // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
}

export async function deletePost(url = '', id, columnsType, arrayColumns) {
    url = url + id;
    const data = {
        columnsTyp: columnsType,
        arrayColumns: arrayColumns
    }
    // Default options are marked with *
    console.log(url)
    const response = await fetch(url, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response; // parses JSON response into native JavaScript objects
}
