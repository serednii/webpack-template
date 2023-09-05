


//Якщо то є Set
export const isSet = (obj) => {
    if (typeof obj === 'object') {//якщо то є обєкт
        if (Object.getPrototypeOf(obj) === Object.getPrototypeOf(new Set())) { // Якщо то є колекція Set
            return true;
        }
    } else {
        return false;
    }
}