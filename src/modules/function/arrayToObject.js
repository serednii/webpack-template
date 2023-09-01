function arrayToObject(data = []) {
    //Перетворює масив обєктів в структуру обєктів меню

    let objectDataKey = {}//Створюємо пустий обєкт
    data.forEach(el => {//перебираємо всі обєкти
        if (!objectDataKey[el.catalog[0]]) objectDataKey[el.catalog[0]] = {};//беремо з масива перший рівень і якщо його нема добавляємо в обєкт як ключ з пустим обєктом
        if (!objectDataKey[el.catalog[0]][el.catalog[1]]) objectDataKey[el.catalog[0]][el.catalog[1]] = {};//беремо з масива другий рівень і якщо його нема добавляємо в обєктяк ключ з пустим обєктом
        if (!objectDataKey[el.catalog[0]][el.catalog[1]][el.catalog[2]]) {//беремо з масива третій рівень і якщо його нема добавляємо в обєкт як ключ з пустим масивом
            objectDataKey[el.catalog[0]][el.catalog[1]][el.catalog[2]] = [];
        } else {
            objectDataKey[el.catalog[0]][el.catalog[1]][el.catalog[2]].push(el)//на третьтому етапі добавляємо обєкт в масив
        }
    });
    return objectDataKey;
}

export default arrayToObject;