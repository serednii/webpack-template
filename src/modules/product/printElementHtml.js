function printElementHtml(className, element) {
    const objectElementHtml = document.querySelector(className);
    if (objectElementHtml) objectElementHtml.insertAdjacentHTML('beforeend', element);
}
export default printElementHtml;