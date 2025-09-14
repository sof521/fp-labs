const numbers = [1, 2, 3, 4, 5]

//1
const evenNumbers = (arr) => arr.filter(n => n % 2 === 0)
console.log("Чётные числа:", evenNumbers(numbers))

//2
const squareNumbers = (arr) => arr.map(n => n * n)
console.log("Квадраты чисел:", squareNumbers(numbers))

//3
const objects = [{ value: 4 }, { value: 12 }, { value: 20 }, { value: 9 }]

const greaterThanTen = (arr) => arr.filter(n => n.value > 10)
console.log("Числа больше 10:", greaterThanTen(objects))

//4
const sumNumbers = (arr) => arr.reduce((acc, curr) => acc + curr, 0)
console.log("Сумма чисел массива:", sumNumbers(numbers))

//5
const transformArray = (func, arr) => arr.map(func)
console.log(transformArray(n => n * 3, numbers))

//6
const sumOfSquares = sumNumbers(squareNumbers(evenNumbers(numbers)))
console.log("Сумма квадратов чётных чисел:", sumOfSquares)

//7
const filtered = greaterThanTen(objects);
const average = sumNumbers(filtered.map(obj => obj.value)) / filtered.length
console.log("Cреднее арифметическое всех чисел, больших заданного значения:", average)