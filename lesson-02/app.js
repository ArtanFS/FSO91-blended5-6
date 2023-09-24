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

// Array methodes

//TODO:=========task-01=================
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить квадрати кожного елементу вхідного масиву. Очікуваний результат: [1, 4, 9, 16, 25].

// const array = [1, 2, 3, 4, 5];
// const res = array.map((number) => Math.pow(number, 2));
// console.log(res);

//TODO:=========task-02=================
// Дано масив об'єктів {id: 1, values: [1, 2, 3]}, {id: 2, values: [4, 5, 6]}, {id: 3, values: [7, 8, 9]}. Створіть новий масив, що містить всі значення з масивів values кожного об'єкту, збережених в одному масиві. Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const res = data.flatMap(({ values }) => values);
// console.log(res);

//TODO:=========task-03=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Перевірте, чи є хоча б один об'єкт з віком менше 20 років. Очікуваний результат: true.

// const people = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const res = people.some(({ age }) => age < 20);
// console.log(res);

//TODO:=========task-04=================
//  Дано масив чисел [2, 4, 6, 8, 10]. Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const res = numbers.every((number) => number % 2 === 0);
// console.log(res);

//TODO:=========task-05=================
// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// const res = numbers.find((number) => number % 2 !== 0);
// console.log(res);

//TODO:=========task-06=================
// Відсортуйте масив чисел [4, 2, 5, 1, 3] у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbers = [4, 2, 5, 1, 3];
// const res = [...numbers].sort((a, b) => a - b);
// console.log(res);
// console.log(numbers);

//TODO:===============task-07===============================
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"] у порядку алфавіту. Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const array = ["banana", "orange", "apple", "pear"];
// const res = [...array].sort((a, b) => a.localeCompare(b));
// console.log(res);

//TODO:===============task-07===============================
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"] у порядку алфавіту. Очікуваний результат: ["apple", "banana", "orange", "pear"].

//TODO:=========task-08=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Створіть новий масив, що містить тільки об'єкти, в яких вік більше 20 років. Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user1 = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const res = user1.filter(({ age }) => age > 20);
// console.log(res);

//TODO:=========task-11=================
// Дано масив чисел [1, 2, 3, 4, 5]. Застосуйте метод reduce для обчислення суми елементів масиву

// const array = [1, 2, 3, 4, 5];
// const res = array.reduce((acc, number) => acc + number, 0);
// console.log(res);

//TODO:===============task-12===============================
/// Даний словник із міст та дат виступів рок-групи

/// Необхідно перетворити словник (key-value) на масив із назв міст
/// Виведення міст має бути у хронологічному порядку
/// Міста у яких концерт вже пройшов потрібно виключити
/// Результат ["Умань", "Харків", "Одеса"]

// const concerts = {
//   Київ: new Date("2020-04-01"),
//   Умань: new Date("2023-09-02"),
//   Вінниця: new Date("2020-04-21"),
//   Одеса: new Date("2023-09-15"),
//   Хмельницький: new Date("2020-04-18"),
//   Харків: new Date("2023-09-10"),
// };

// function concertsToArray(obj) {
//   return Object.keys(obj)
//     .filter((city) => obj[city] > new Date())
//     .sort((a, b) => obj[a] - obj[b]);
// }
// console.log(concertsToArray(concerts));
const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];
// Отримати масив імен всіх користувачів (поле name).
//TODO:==========================
// Отримати масив об'єктів користувачів за кольором очей (eyeColor).
//TODO:==========================
// Отримати масив імен користувачів за статтю (поле gender)
//TODO:==========================
// Отримати масив тільки неактивних користувачів (поле isActive).
//TODO:==========================
// Отримати масив користувачів віком від min до max
//TODO:==========================
// Отримати загальну суму балансу (поле balance) всіх користувачів.
//TODO:==========================
// Масив імен всіх користувачів, у яких є товарищь із зазначеним ім'ям.
//TODO:==========================
// Масив імен (поле name) людей, відсортованих залежно кількості їх друзів (поле friends)
//TODO:==========================
// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не повинно бути
// Уміння, що повторюються, і вони повинні бути відсортовані в алфавітному порядку.
