// Object
//TODO:==========Task-1=============
// Напиши скрипт, який для об'єкта user,
// Послідовно:
// 1 додати поле mood зі значенням 'happy'
// 2 замінити hobby на 'skydiving'
// 3 замінити значення premium на false
// 4 виводити вміст об'єкта user у форматі
// ключ:значення використовуючи Object.keys() і for...of

const user = {
  userName: "Jon",
  age: 42,
  hobby: "footbol",
  premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

// for (const key of Object.keys(user)) {

// //     console.log(`${key}: ${user[key]}`);
// }

///TODO:=========task-2=================
// Потрібно написати функцію, яка приймає 2 параметри obj і key, яка буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true
// Є 2 варіанти рішення, спочатку напишемо функцію, потім вирішимо простим способом

// function getBool(object, key) {
//     const keys = Object.keys(object);
// return keys.includes(key);
// }

// console.log(getBool(user, "hyt")) ;

// const getBool = (object, key) => key in object

// console.log(getBool(user, "hobby"));

//TODO:==========task-3=============
// У нас є об'єкт, у якому зберігатимуться зарплати
// нашої команди
// Напишіть код для сумування всіх зарплат і
// збережіть його результат у змінній sum.
// Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// let sum = 0;
// for (const salary of Object.values(salaries)) {
//     sum += salary;
// }

// console.log(sum);

//TODO:============task-4================
// Створіть функцію multiplyNumeric(obj),
// яка множить всі числові властивості об'єкта obj на 2.

// до виклику функції
// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
// };

// function multiplyNumeric(obj) {
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             if (typeof obj[key] === "number") {
//                 obj[key] *= 2;
//             }

//         }
//     }
//     return obj;
// }

// console.log(multiplyNumeric(menu));

//TODO:=================task-04=============================
// Напиши функцію яка приймає масив чисел і повертає новий масив, унікальних чисел, які не повторюються.
// Є 2 варіанти виконання.

// const numbers = [1, 1, 1, 2, 3, 4, 7, 7, 6, 6, 5, 4, 23, 22, 22, 111, 1, 5];

// function uniqArray(arr) {
//     const uniq = {};
//     for (const number of arr) {
//         uniq[number] = number;
//     }
//     return Object.values(uniq);
// }
// console.log(uniqArray(numbers));

// CallBack

//TODO:============task-01=========================
//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

// function letMeSeeYourName(callback) {
//   const userName = prompt("Enter your name: ");
//   callback(userName);
// }

// function greet(name) {
//   console.log(`Привіт ${name}`);
// }

// letMeSeeYourName(greet);

// //TODO:============task-02=========================
// // Напишіть функцію, яка приймає два числа і колбек-функцію.
// // Функція повинна помножити числа між собою та передати результат дії до колбек - функції.Колбек - функція повинна, у разі, якщо, це число є парним - помножити це число на себе, якщо ні - взяти квадратний корінь з цього числа, та вивести результат у консоль лог.

// const performOperation = (a, b, callback) => callback(a * b);

// // function performOperation(a, b, callback) {
// //   const sum = a * b;
// //   return callback(sum);
// // }

// const callbackfn = (number) =>
//   number % 2 === 0 ? Math.pow(number, 2) : Math.sqrt(number);

// // function callbackfn(number) {
// //   if (number % 2 === 0) {
// //     return Math.pow(number, 2);
// //   } else {
// //     return Math.sqrt(number);
// //   }
// // }

// console.log(performOperation(3, 3, callbackfn));

//TODO:============task-03=========================
// Напишіть функцію, яка приймає масив і колбек-функцію. Функція повинна повернути перший елемент масиву,
//який задовольняє умову, визначену в колбек - функції. Якщо такого елементу немає, функція
// повинна повернути null. Також необхідно написати 2 різні колбеки. При використанні першого колбеку має
// повертатись перше парне число. При використанні другого - має повертатись перше слово у масиві, що починається з літери
// "O" у будь - якому реєстрі.

// const numbers = [1, 3, 2, 5, 7, 9, 20];
// const words = ["apple", "banana", "orange", "pear"];

// function findElement(arr, callback) {
//   let result = null;
//   arr.forEach((element) => {
//     if (callback(element) && result === null) {
//       result = element;
//     }
//   });
//   return result;
// }

// function isEven(number) {
//   return number % 2 === 0;
// }

// function startWithO(word) {
//   return word.toLowerCase().startsWith("o");
// }

// console.log(findElement(numbers, isEven));
