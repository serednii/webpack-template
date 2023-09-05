const catalogProductFilterParent = document.querySelector('.catalog_product-filter_parent');
catalogProductFilterParent && catalogProductFilterParent.addEventListener('change', (e) => asideFilter(e));

console.log('start aside fliter')
// SELECT * FROM shop  WHERE category LIKE '%Електроніка Гаджети Компютери%'  AND  JSON_VALUE(parameters_new, '$[0].Мясорубка' ) LIKE 'да'
// SELECT * FROM shop  WHERE category LIKE '%Електроніка Гаджети Компютери%'  AND  JSON_VALUE(parameters_new, '$[0].Мясорубка' ) = 'да'

// SELECT * FROM shop  WHERE category LIKE '%Мелкая_бытовая_техника Кухня Соковыжималки%'  AND  JSON_VALUE(parameters_new, '$[0].Тип' ) = 'шнековая'  AND  JSON_VALUE(parameters_new, '$[0].Тип' ) = 'центробежная'
// http://trygonimetry.smm.zzz.com.ua/shop/filter-category=Мелкая_бытовая_техника---Кухня---Соковыжималки/filterjson-parameters_new=Тип=шнековая/filterjson-parameters_new=Тип=центробежная
export function asideFilter(e) {
    console.log(e.target.value);
    const url = sessionStorage.getItem('catalogs');
    const formParent = e.target.closest('.form-checked');
    console.log(url);
    const title = formParent.querySelector('.form-check_title');
    console.log(title.innerText + "   " + e.target.value);
}