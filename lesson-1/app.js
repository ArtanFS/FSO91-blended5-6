// // //TODO: 1 ===================================
// // // Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.
// // // const a = 11;
// // // if (a === 10) {
// // //    return console.log("True");
// // // }
// // // console.log("False");
// // // a === 10 ? console.log("True") : console.log("False");

// // //TODO: 2 ===================================
// // // У змінній min лежить число від 0 до 59. Визначте у котру чверть години
// // // Попадає це число (у першу, другу, третю або четверту).

// // // const min = 61;
// // // if (min >= 0 && min <= 15) {
// // //     console.log("First");
// // // } else if (min > 15 && min <= 30) {
// // //     console.log("Second");
// // // } else if (min > 30 && min <= 45) {
// // //     console.log("Third");
// // // } else if (min > 45 && min <= 59) {
// // //     console.log("Fourth");
// // // } else {
// // //     console.log('Wrong number');
// // // }

// // //TODO: 3 ===================================
// // // Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// // // значення '1', то у змінну result запишемо 'зима', якщо має значення
// // // '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// // const num = 2;

// // switch (num) {
// //   case 1:
// //     console.log("Зима");
// //     break;
// //   case 2:
// //     console.log("Весна");
// //     break;
// //   case 3:
// //     console.log("Літо");
// //     break;
// //   case 4:
// //     console.log("Осінь");
// //     break;
// //   default:
// //     console.log("Некоректне значненя!");
// // }

// // //TODO: 4 ===================================
// // // скористаємося циклом while та виведіть у консоль числа від 0 до 50

// // let num = 0;

// // while (num < 50) {
// //   num += 1;
// //   console.log(num);
// // }

// //TODO: 5 ===================================
// // Напишіть програму, яка отримає від користувача
// //число (кількість хвилин) і виведе у консоль
// //рядок у форматі годин і хвилин
// //70 === 01:10
// //

// const globalMinutes = 69;

// const hours = String(Math.floor(globalMinutes / 60)).padStart(2, 0);
// // const minutes = String(globalMinutes - 60 * hours).padStart(2, 0);
// const minutes = String(globalMinutes % 60).padStart(2, 0);

// console.log(`${hours}:${minutes}`);

//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

//const min = 1;
// const max = 90;
// let total = 0
// for (let i = max; i >= min; i -= 1) {
//     if(i % 2 !== 0) {
// continue;

//     }
//     total += i;
//     console.log('парні: ', i);
// }
// console.log(`сума усіх парних:${total}`);

// Написати ф-цію, яка створює масив із зазначеною довжиною та наповнює його переданим значенням
// приклад: ф-ція fillArray(3, 'a') повинна повертати масив ['a', 'a', 'a']

// function fillArray(number, symbol) {
//   const newArray = [];
//   for (let i = 0; i < number; i += 1) {
//     newArray.push(symbol);
//   }
//   return newArray;
// }
// fillArray(3, "a");
// console.log(fillArray(10, "g"));
//TODO: 11 ===================================

// Написати ф-цію, яка прибиратиме з масиву всі значення, які перетворюються на false
// undefined, null, false, '', 0, NaN
// const array = [
//   1,
//   0,
//   54,
//   'doc',
//   null,
//   'jpg',
//   undefined,
//   '',
//   'png',
//   'exe',
//   false,
//   'mp4',
//   NaN,
//   'hbs',
// ];

// function clearArray (arr){
//     const newClear = []

//     for (const value of arr) {
//         if (value) {
//             newClear.push(value)
//         }
//     }
//     return newClear;

// }
// console.log(clearArray(array));

//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив

// const numbers = [2, 5, 35, 56, 1, 24, 7, 0, 3];

// function findSmallerNumber(array) {
//   if (!Array.isArray(array)) {
//     return "no array";
//   }
//   let min = array[0];
//   for (const number of array) {
//     if (min > number) {
//       min = number;
//     }
//   }

//   return min;
// }
// console.log(findSmallerNumber(0));
