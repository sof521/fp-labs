// Функция, которая принимает два числа и возвращает их сумму
let add a b = a + b
printfn "Сумма -4 и 12 = %d" (add -4 12)

// Функция, которая принимает два числа и возвращает их разность
let subtract a b = a - b
printfn "Разность 3 и 9 = %d" (subtract 3 9)

// Функция, которая принимает два числа и возвращает их произведение
let multiply a b = a * b
printfn "Произведение 5 и -7 = %d" (multiply 5 -7)

// Функция, которая принимает два числа и возвращает результат деления
let divide a b =
    if b = 0 then Error "Ошибка: деление на ноль!"
    else Ok (a / b)

match divide 16 2 with
| Ok result -> printfn "Деление 16 на 2 = %d" result
| Error msg -> printfn "%s" msg

match divide 8 0 with
| Ok result -> printfn "Деление 8 на 0 = %d" result
| Error msg -> printfn "%s" msg

// Рекурсивная функция для вычисления факториала числа
let factorial n =
    let rec loop n acc =
        if n <= 1 then acc
        else loop (n - 1) (n * acc)
    loop n 1

printfn "Факториал 7 = %d" (factorial 7)

// Использование каррирования для создания специализированных функций из общих
let add9 = add 9 
printfn "9 + 5 = %d" (add9 5)

let multiplyBy12 = multiply 12
printfn "12 * 3 = %d" (multiplyBy12 3)