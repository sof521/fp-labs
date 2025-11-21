var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//1
//Функция, которая принимает массив чисел и возвращает новый массив, содержащий только числа, кратные заданному числу.
var num = [12, 0, -33, 80];
function filterNumbers(arr, divider) {
    if (divider === 0) {
        console.error("Ошибка: деление на ноль невозможно");
        return [];
    }
    return arr.filter(function (n) { return n % divider === 0; });
}
console.log(filterNumbers(num, 3));
//Функция, которая принимает массив строк и возвращает новую строку, содержащую все строки, объединенные заданным разделителем.
var str = ["12", "hello", "", "world"];
function sumString(arr, separator) {
    return arr.join(separator);
}
console.log(sumString(str, "/"));
//Функция, которая принимает массив объектов и возвращает новый массив, отсортированный по значению определенного свойства.
var obj = [
    { name: "Rose", age: 58 },
    { name: "Tim" },
    { age: 21 },
    { name: "Jack", age: 37 }
];
function sortByProperty(arr, property) {
    return __spreadArray([], arr, true).sort(function (a, b) {
        var valueA = a[property];
        var valueB = b[property];
        if (valueA == null && valueB == null) {
            return 0;
        }
        if (valueA == null) {
            return 1;
        }
        if (valueB == null) {
            return -1;
        }
        if (valueA > valueB) {
            return 1;
        }
        else if (valueA < valueB) {
            return -1;
        }
        else {
            return 0;
        }
    });
}
var sortedByAge = sortByProperty(obj, "age");
console.log(sortedByAge);
var sortedByName = sortByProperty(obj, "name");
console.log(sortedByName);
//2 Создайте функцию, которая принимает другую функцию в качестве аргумента и возвращает новую функцию,
// которая выполняет логирование перед вызовом исходной функции.
function addNumbers(a, b) {
    return a + b;
}
function withLog(func) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Логирование с аргументами:", args);
        return func.apply(void 0, args);
    };
}
var loggedAdd = withLog(addNumbers);
var result = loggedAdd(5, 3);
console.log("Результат:", result);
// function sayHello() {
//     console.log("Привет!");
// }
// function withLog(func: () => void): () => void {
//     return () => {
//         console.log("Логирование");
//         func();
//     };
// }
// const loggedHello = withLog(sayHello);
// loggedHello();
