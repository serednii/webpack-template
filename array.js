let cars = ['honda', "Toyota", "Seat", "Opel", "VW", "BMW", "AUDI"];

let nums = [1, 1, 1, 2, 3, 1, 2, 3, 4, 5, 5, 6, 6, 6, 6, 6, 4, 7, 7, 8, 8, 8, 9, 9, 7, 8, 9, 7];
let arr = [false, "ddG", 0, 5, 34, "", null, undefined, true, {}, []];


let sum = nums.reduce((x, y) => x + y, 1000);
let rez = arr.filter(Boolean)

let obj = { ...cars };//Створення із масиву обєкт
let newSet = new Set(nums);//
let set = [...new Set(nums)];
console.log(set);