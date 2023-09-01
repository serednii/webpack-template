function convertObjectToInArray(obj, arr, count = 2000) {
    if (!(Array.isArray(obj))) {
        for (const key in obj) {
            if (Array.isArray(obj[key])) {
                obj[key].forEach((e, i) => {
                    if (i < count) {
                        if (!!Object.keys(e).length) arr.push(e);
                    }
                })
            } else {
                convertObjectToInArray(obj[key], arr);
            }

        }

    } else {
        obj.forEach((e, i) => {
            if (i < count) {
                if (!!Object.keys(e).length) arr.push(e);
            }

        })
    }
    return arr;
}

export default convertObjectToInArray;