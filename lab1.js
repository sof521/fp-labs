const numbers = [1, 2, 3, 4, 5]

const evenNumbers = numbers.filter(n => n % 2 === 0)
console.log("Чётные числа:", evenNumbers)

const squareNumbers = numbers.map(n => n * n)
console.log("Квадраты чисел:", squareNumbers)

const greaterThanThree = numbers.filter(n => n > 3)
console.log("Числа больше 3:", greaterThanThree)

const sumNumbers = numbers.reduce((acc, curr) => acc + curr, 0)
console.log("Сумма чисел массива:", sumNumbers)

function transformArray (func, array) {
    return array.map(func)
}
const result = transformArray(n => n * 3, numbers)
console.log(result)

const even = numbers.filter(n => n % 2 === 0)
const squareOfEven = even.map(n => n * n)
const sumOfSquares = squareOfEven.reduce((acc, curr) => acc + curr, 0)
console.log("Сумма квадратов чётных чисел:", sumOfSquares)

const objects = [{ value: 4 }, { value: 12 }, { value: 20 }, { value: 9 }]
const filtered = objects.filter(obj => obj.value > 10)
const values = filtered.map(obj => obj.value)
const sum = values.reduce((acc, curr) => acc + curr, 0)
const average = sum / values.length
console.log("Cреднее арифметическое всех чисел, больших заданного значения:", average)