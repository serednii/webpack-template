import { getQuery, transformData } from '../fetch/fetch';
import { urlJsonServer } from '../GlobalVariable';
import { printTable } from './printTable';
import { arrayCategory } from './const_category_list';
import { generateObject } from './generateObjeckt';

export async function selectParametersProducts() {
    for (let i = 50; i <= 61; i++) {
        const result = transformData(await getQuery(urlJsonServer + 'shop/', 'category', [arrayCategory[i]], '', ''));
        //Передаємо в функцію масив обєктів з товарами
        const setParameters = generateObject(result);
        //Роздруковуємо на екран товари з параметрами
        printTable({ params: setParameters, nameCategory: arrayCategory[i] })
    }
}
