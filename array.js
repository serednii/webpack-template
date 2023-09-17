
// Array.prototype.br_search = function (target) {
//     var half = parseInt(target.length / 2);
//     if (target === this[half]) {
//         return half;
//     }
//     if (target > this[half]) {
//         return half + this.slice(half, this.length).br_search(target);
//     }
//     else {
//         return this.slice(0, half).br_search(target);
//     }
// };

function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let currentElement = array[mid];
        if (currentElement === target) {
            return mid;
        }
        else if (target < currentElement) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }

    return -1;
}


let cars = ['Honda', "Toyota", "Seat", "Opel", "VW", "BMW", "AUDI"];

let nums = [1, 1, 1, 2, 3, 1, 2, 3, 4, 5, 5, 6, 6, 6, 6, 6, 4, 7, 45, 7, 8, 8, 8, 9, 9, 7, 8, 9, 7];
let nums2 = [3, 45, 2, 3, 6, 34, 78, 12, 90, 45]

let arr = [false, "ddG", 0, 5, 34, "", null, undefined, true, {}, []];
let newCars = [
    { car: 'Honda', color: "Red" },
    { car: 'Toyota', color: "Green" },
    { car: 'Seat', color: "Blue" },
    { car: 'Nissan', color: "Red" },
    { car: 'Audi', color: "Yelow" },
]

let sum = nums.reduce((x, y) => x + y, 1000);
let rez = arr.filter(Boolean)

let obj = { ...cars };//Створення із масиву обєкт
let newSet = new Set(nums);//Створення із масиву Set унікальні значення

let set = [...new Set(nums)];//Залишає унікальні значення в масиві новому
set = Array.from(new Set(nums), (e) => e * 5)


//Заміна окремих значень в масиві
cars.splice(3, 2, "Nissan", "Tesla", "AMD")


//Виводить значення окремих полів в обєктах 
let carName = Array.from(newCars, ({ color, car }) => car + " " + color)

//Clear array
// nums = [];
// nums.splice(0, nums.length)

//Найти однакові елементи в масивах
let newNams = [...new Set(nums)].filter(item => nums2.includes(item))

//реверс
let reversArray = nums.reverse();

//Найти останнє входження елементу в масиві
let lastIndex = nums.lastIndexOf(1)

//Створити і заповнити масив однаковими значеннями
const newArray1 = new Array(100).fill(1)

//Найти випадкове число з масива
const randomNumber = nums2[(Math.floor(Math.random() * (nums2.length - 1)))]
nums.fill(3)
console.log(nums);



console.time('node --trace-warnings ...');
let arrayHight = new Array(19999999).fill(1).map((e) => (Math.floor(Math.random() * 999999)))
console.timeEnd('node --trace-warnings ...');

console.time('node --trace-warnings ...');
let max = arrayHight[0];
for (let i = 1; i < arrayHight.length; i++) {
    if (arrayHight[i] > max) max = arrayHight[i];
}
console.timeEnd('node --trace-warnings ...');

console.log(max)

console.time('node --trace-warnings ...');
arrayHight = arrayHight.sort((a, b) => +a - +b)
console.timeEnd('node --trace-warnings ...');
console.log(arrayHight[arrayHight.length - 1])

// console.time('node --trace-warnings ...');
// const indexElement = binarySearch(arrayHight, 24464)
// console.timeEnd('node --trace-warnings ...');

// console.time('node --trace-warnings ...');
// const indexElement1 = arrayHight.includes(24464)
// console.timeEnd('node --trace-warnings ...');

// console.time('node --trace-warnings ...');
// const indexElement2 = arrayHight.indexOf(24464)
// console.timeEnd('node --trace-warnings ...');



// const arrayHight1 = arrayHight.map((e) => {
//     return e + 6;
// })
// const arrayHight1 = arrayHight
// for (let i = 0; i<100000000; i++ ){
//     fill(Math.floor(Math.random() * 9999999999));
// }
// console.log(indexElement);







//   l= [0,1,2,3,4,5,6];

