function printElementHtml(classs, element) {
    const objectElementHtml = document.querySelector(classs);
    if (objectElementHtml) objectElementHtml.insertAdjacentHTML('beforeend', element);
}
export default printElementHtml;