export function printTable({ nameCategory, params }) {
    nameCategory = nameCategory.replace(/---/g, ' ');
    const tableWrapper = document.querySelector('.table-category-select')
    const tableHtml = `
    <div  class="table-category-select_parent">
    <table width="50%" border="10" class="table table-success table-striped">
    <caption class="table-category-select_title">${nameCategory}</caption>  
    <col width="3%">
    <col width="3%">
    <col width="5%">
    <col width="20%">
    <col width="69%">
        <thead>
        </thead>
        <tbody>
         ${getTRHtml(params)}
        </tbody>
    </table>
    <button type="button" class="btn btn-primary btn-add-table">Add</button>
</div>
    `
    tableWrapper && tableWrapper.insertAdjacentHTML('beforeend', tableHtml);
}
//формуємо строку

export function getTRHtml(params) {
    let count = 1;
    let strTR = '';
    for (const [key, value] of Object.entries(params)) {
        strTR += `
        <tr class="stroka">
        <th scope="row">${count}</th>
        <td>
            <form name="login_form">
            <div class="form-check form-check-inline">
            <input class="form-check-input" name="radio" type="radio" id="id${count}1" value="range" disabled>
            <label class="form-check-label" for="id${count}1">range</label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input" name="radio" type="radio" id="id${count}2" value="checkbox" checked disabled>
            <label class="form-check-label" for="id${count}2">checkbox</label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input" name="radio" type="radio" id="id${count}3" value="radio" disabled>
            <label class="form-check-label" for="id${count}3">radio</label>
            </div>
            <input class="table-category-select_checkbox" type="checkbox">
            </form>
            </td>
        <td class="table-category-select_key">${key}</td>
        <td width="500" class="table-category-select_value">${Array.from(value)} </td>
        </tr>
        `
        count++;
    }
    return strTR;
}