import addRemoveClass from "./addRemoveClass";

function singInOpen() {
    addRemoveClass('.sing-in-registration', 'remove', 'hidden');
    addRemoveClass('.fon', 'remove', 'hidden');
    addRemoveClass('body', 'add', 'overflov-hidden');
}

export default singInOpen;