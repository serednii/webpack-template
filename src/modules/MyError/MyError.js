// Создаём новый объект, затем через прототип делаем его наследником конструктора Error.
// class MyError {
//     constructor(message) {
//         this.name = "MyError";
//         this.message = message || "Сообщение по умолчанию";
//         this.stack = new Error().stack;
//     }
// }

// MyError = Object.create(Error.prototype);



// // Создаём новый объект, затем через прототип делаем его наследником конструктора Error.
// function MyError(message) {
//     this.name = "MyError";
//     this.message = message || "Сообщение по умолчанию";
//     this.stack = new Error().stack;
// }
// MyError.prototype = Object.create(Error.prototype);
// MyError.prototype.constructor = MyError;