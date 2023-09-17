


// const auto = { bmv: "sedsfsf", volvo: "sdsfsdsdfsdsssdf" }


// console.log(auto?.bmvj)


// function* strgenerator() {
//     yield 'h'
//     yield 'e'
//     yield 'l'
//     yield 'l'
//     yield 'o'
//     yield 'h'

// }

// const str = strgenerator();
// console.log(str.next())


function* numberGen(n = 10) {
    for (let i = 0; i < n; i++) {
        yield i
    }
}


const num = numberGen(5)
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
