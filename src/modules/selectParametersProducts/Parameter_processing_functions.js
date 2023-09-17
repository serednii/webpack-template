
import { isSet } from "./isSet";
export const newPrice = (obj, k, newObject) => {//obj, k, newObject
    const temp = new Set();
    obj[k] = Number(obj[k])
    // console.log(e[k])
    if (isSet(newObject[k])) {
        let arr = ([...Array.from(newObject[k]), obj[k]])
        // console.log(arr)
        arr.sort((a, b) => a - b);
        arr.forEach(m => {
            temp.add(m);
        });
    } else {
        temp.add(obj[k]);
    }
    // console.log(temp)
    return temp;
}

export const power = (obj, k, newObject) => {
    const temp = new Set();
    if (isSet(newObject[k])) {
        const arr = ([...Array.from(newObject[k]), ((obj[k]))])//
        arr.forEach(m => {
            temp.add(m.trim());
        });
    } else {
        temp.add(obj[k].trim());
    }
    return temp;
}

export const nozzles = (obj, k, newObject) => {
    const temp = new Set();
    if (isSet(newObject[k])) {
        let arr = ([...Array.from(newObject[k]), ((obj[k]))])//
        // console.log(arr)
        arr = arr.join(',').split(',');

        arr.forEach(m => {
            temp.add(m.trim());
        });
    } else {
        temp.add(obj[k].trim());
    }
    return temp;
}

export const weight = (obj, k, newObject) => {
    const temp = new Set();

    if (isSet(newObject[k])) {
        let arr = ([...Array.from(newObject[k]), ((" " + obj[k]))])//
        arr.sort((a, b) => parseFloat(a) - parseFloat(b));
        arr.forEach(m => {
            temp.add(m.trim());
        });
    } else {
        temp.add(obj[k].trim());
    }
    return temp;
}

export const all = (obj, k, newObject) => {
    const temp = new Set();
    if (isSet(newObject[k])) {
        let arr = ([...Array.from(newObject[k]), (obj[k].trim())])//
        arr = arr.join(',').split(',');


        let reg1 = /(^\d*)|(\d*\.\d*)/;
        arr[0] && reg1.test(arr[0]) && arr.sort((a, b) => parseFloat(a) - parseFloat(b));

        arr.forEach(m => {
            temp.add(m);
        });
    } else {
        temp.add(obj[k].trim());
    }
    return temp;
}