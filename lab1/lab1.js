const numbers = [1, 15, 39, 400, -12]

//1
const evenNumbers = (arr) => arr.filter(n => n % 2 === 0)
console.log("Чётные числа:", evenNumbers(numbers))

//2
const squareNumbers = (arr) => arr.map(n => n * n)
console.log("Квадраты чисел:", squareNumbers(numbers))

//3
const objects = [
  { name: "Rose", age: 14 }, 
  { name: "Tim", age: null }, 
  { age: 21 }, 
  { name: "Jack", value: 14 } ]

const hasAge = (arr) => arr.filter(obj => obj.hasOwnProperty("age"))
console.log("Объекты с возрастом:", hasAge(objects))

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
const objects1 = [{ value: 4 }, { value: 12 }, { value: -9 }, { value: null }, { value: 'not a number' }]

const greaterThanNum = (arr, num) => 
  arr.filter(obj => typeof obj.value === "number" && obj.value > num)

const average = (arr, num) => {
  const filtered = greaterThanNum(arr, num)
  return filtered.length === 0 ? 0 : sumNumbers(filtered.map(obj => obj.value)) / filtered.length
}

console.log("Cреднее арифметическое всех чисел, больших заданного значения:", average(objects1, 10))