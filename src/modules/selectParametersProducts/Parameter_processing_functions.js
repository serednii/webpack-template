
import { isSet } from "./isSet";
export const newPrice = (e, k, setParameters) => {
    const temp = new Set();
    e[k] = Number(e[k])
    // console.log(e[k])
    if (isSet(setParameters[k])) {
        let arr = ([...Array.from(setParameters[k]), e[k]])
        // console.log(arr)
        arr.sort((a, b) => a - b);
        arr.forEach(m => {
            temp.add(m);
        });
    } else {
        temp.add(e[k]);
    }
    // console.log(temp)
    return temp;
}

export const power = (e, k, setParameters) => {
    const temp = new Set();
    if (isSet(setParameters[k])) {
        const arr = ([...Array.from(setParameters[k]), ((e[k]) + " ")])//
        arr.forEach(m => {
            temp.add(m);
        });
    } else {
        temp.add(e[k] + " ");
    }
    return temp;
}

export const nozzles = (e, k, setParameters) => {
    const temp = new Set();
    if (isSet(setParameters[k])) {
        let arr = ([...Array.from(setParameters[k]), ((e[k]) + " ")])//
        // console.log(arr)
        arr = arr.join(',').split(',');

        arr.forEach(m => {
            temp.add(m);
        });
    } else {
        temp.add(e[k] + " ");
    }
    return temp;
}

export const weight = (e, k, setParameters) => {
    const temp = new Set();

    if (isSet(setParameters[k])) {
        let arr = ([...Array.from(setParameters[k]), ((" " + e[k]))])//
        arr.sort((a, b) => parseFloat(a) - parseFloat(b));
        arr.forEach(m => {
            temp.add(m);
        });
    } else {
        temp.add(" " + e[k]);
    }
    return temp;
}
// (^\d*)|(\d*\.\d*)
export const all = (e, k, setParameters) => {
    const temp = new Set();
    if (isSet(setParameters[k])) {
        let arr = ([...Array.from(setParameters[k]), (e[k] + " ")])//
        arr = arr.join(',').split(',');


        let reg1 = /(^\d*)|(\d*\.\d*)/;
        arr[0] && reg1.test(arr[0]) && arr.sort((a, b) => parseFloat(a) - parseFloat(b));

        arr.forEach(m => {
            temp.add(m);
        });
    } else {
        temp.add(e[k] + " ");
    }
    return temp;
}