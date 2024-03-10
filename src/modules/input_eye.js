import addRemoveClass from "./addRemoveClass";

function inputEye(element) {
    const parent = element.closest('.form_password');
    const input = parent.querySelector('input');
    if (input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
        addRemoveClass('.open_eye', 'remove', 'hidden', parent);
        addRemoveClass('.close_eye', 'add', 'hidden', parent);
    } else {
        input.setAttribute('type', 'password');
        addRemoveClass('.open_eye', 'add', 'hidden', parent);
        addRemoveClass('.close_eye', 'remoce', 'hidden', parent);
    }
}
export default inputEye;