import addRemoveClass from "./addRemoveClass";

function singInClose() {
    addRemoveClass('.sing-in-registration', 'add', 'hidden');
    addRemoveClass('.fon', 'add', 'hidden');
    addRemoveClass('body', 'remove', 'overflov-hidden');
    addRemoveClass('.sing-in-registration__sing-in', 'remove', 'hidden');
    addRemoveClass('.sing-in-registration__registration', 'add', 'hidden');
}
export default singInClose;