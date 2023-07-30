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
