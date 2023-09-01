import singInOpen from "./sing-in-open";
import addRemoveClass from "./addRemoveClass";

function formRegisterOpen(element) {
    singInOpen();
    addRemoveClass('.sing-in-registration__sing-in', 'add', 'hidden');
    addRemoveClass('.sing-in-registration__registration', 'remove', 'hidden');

}

export default formRegisterOpen;