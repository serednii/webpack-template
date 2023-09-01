
import { getZapros } from '../fetch/fetch';
import { urlJsonServer } from '../GlobalVariable';

//збираємо з бази даних категорії і формуємо JSON структуру
async function queryMakeCategory() {
    // Мелкая_бытовая_техника', 'Кухня', 'Кухонные_комбайны'

    let newCategory = {};

    let getQuery = await getZapros(urlJsonServer + 'shop/', '', [], '', 'limit=1000');
    console.log(getQuery);

    // getQuery.forEach(e => console.log(e))


    let level = new Set();//збираємо всі унікальні імена категорій всіх рівнів
    const level1 = new Set();//збираємо всі унікальні імена категорій першого рівня
    const level2 = new Set();//збираємо всі унікальні імена категорій другого рівня

    getQuery.forEach(e => {
        const sp = e.category.split(' ')
        level.add(sp);//збираємо всі унікальні імена категорій всіх рівнів
        level1.add(sp[0]);//збираємо всі унікальні імена категорій першого рівня
        level2.add(sp[1]);//збираємо всі унікальні імена категорій другого рівня
    })

    level = Array.from(level)
    level1.forEach(e => {
        newCategory[e] = {};//Заповняємо обєкт першого рівня
    });

    level1.forEach((e) => {
        const xx = level.filter(ee => ee[0] === e)
        xx.forEach(el => {
            newCategory[e][el[1]] = {};//Заповняємо обєкт другого рівня
        })
    });

    level1.forEach((e) => {
        const listKeys = Object.keys(newCategory[e])
        listKeys.forEach(k => {
            const listPole = level.filter(ee => (ee[0] === e && ee[1] === k))
            listPole.forEach(e3 => {
                newCategory[e][k][e3] = [];////Заповняємо обєкт третьго рівня
            })
        })
    });


    // console.log(newCategory)
    // console.log(JSON.stringify(newCategory))
}

export default queryMakeCategory;