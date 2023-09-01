function addRemoveClass(classElement, typeChange, classChange, parent = document) {

    const elements = parent.querySelectorAll(classElement)
    if (elements) {
        if (typeChange == 'add') {
            elements.forEach(e => e.classList.add(classChange))
        } else if (typeChange == 'remove') {
            parent.querySelectorAll(classElement)
            elements.forEach(e => e.classList.remove(classChange))
        }
    }
}
export default addRemoveClass;