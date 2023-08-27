// ! Callback
//TODO:============task-01=========================
//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

// function letMeSeeYourName(callback) {
// const name = prompt("enter your name")
// if (!name) {
//   return alert("Your name is empty")
// }
// callback(name)
// }
// function greet(name) {
// console.log(`Hello ${name}`);
// }
// letMeSeeYourName(greet)

//TODO:============task-02=========================
// Напишіть функцію, яка приймає два числа і колбек-функцію. Функція повинна помножити числа між собою та передати результат дії до колбек-функції. Колбек-функція повинна, у разі, якщо, це число є парним - помножити це число на себе, якщо ні - взяти квадратний корінь з цього числа, та вивести результат у консоль лог.

// function performOperation(a, b, callback) {
// const result = a * b
// return callback(result)
// }
// function callbackFn (number) {
// if(number % 2 === 0) {
//   return Math.pow(number, 2)
// }else {
//   return Math.sqrt(number)
// }
// }
// console.log(performOperation(3, 7, callbackFn));

// const performOperation = (a, b, callback) => callback(a * b)

//   const callbackFn = (number) => number % 2 === 0 ? Math.pow(number, 2) : Math.sqrt(number)

//   console.log(performOperation(3, 7, callbackFn));

//TODO:============task-03=========================
//Напишіть функцію each(array, callback), яка
//першим параметром приймає масив, а другим - функцію,
//Яка застосовується до кожного елементу масиву.
//Функція each повинна повернути новий масив, елементами
//якого будуть результати виклику callback
//callback функції повинна множити елементи на 2
//! Використай анонімну колбєк функцію

//  const numbers = [3, 5, 6, 34, 8, 83, 12, 34];
// function each(array, callback) {
// const newArray = [];
// array.forEach(element => {
//   newArray.push(callback(element))
// });
// return newArray
// }
// console.log(each(numbers, (number)=> number * 2));

//TODO:============task-04=========================
// Напишіть функцію, яка приймає масив чисел і колбек-функцію. Функція повинна повернути новий масив, у якому кожен елемент масиву перетворено згідно з логікою, яка визначається в колбек-функції. Колбек-функція приймає число, і повертає його ж, помножене на рандомне число від 1 до цього числа.

// const numbers = [1, 2, 3, 4, 5];
// function transformArray(array, callback) {
//   const newArray = []
//   array.forEach(element => { newArray.push(callbackFn(element))

//   });
//   return newArray
// }
// function callbackFn(number) {
//   return number * (Math.random() * (number-1)+1).toFixed()
// }
// console.log(transformArray(numbers, callbackFn));

// ! Object
//TODO:=========task-01=================
//  створіть об'єкт "Кошик", який буде мати список продуктів та методи для додавання і видалення продуктів. Також створіть об'єкт "Замовлення", який буде мати метод для отримання списку продуктів з кошика та оформлення замовлення. Зв'яжіть метод оформлення замовлення з методом "Оформити замовлення" об'єкта "Кошик" за допомогою bind.

// const cart = {
//   products: [],
//   addProduct(product) {
//     this.products.push(product);
//     console.log(`Product ${product} added to cart`);
//     console.log(this.products);
//   },
//   removeProduct(product) {
//     const index = this.products.indexOf(product);
//     if (index === -1) {
//       return alert(`Product with name ${product} not yet`);
//     } else {
//       this.products.splice(index, 1);
//     }
//     console.log(this.products);
//   },
//   checkOut() {
//     console.log(`Ordering product: ${this.products.join(", ")}`);
//   },
// };

// const order = {
//   checkOutCart: null,

//   placeOrder() {
//     console.log(this.checkOutCart);
//     if (this.checkOutCart) {
//       console.log("Placing order...");
//       this.checkOutCart();
//       console.log("Order placed successfully!");
//     } else {
//       console.log("No items in cart to order");
//     }
//   },
// };
// order.checkOutCart = cart.checkOut.bind(cart);

// console.log(order.checkOutCart === cart.checkOut);

// cart.addProduct("Apple");
// cart.addProduct("Orange");
// cart.addProduct("Banana");

// order.placeOrder();
// // *Ordering products: Apple, Orange, Banana
// // * Placing order...
// // * Ordering products: Apple, Orange, Banana
// // * Order placed successfully!

// cart.removeProduct("Orange");

// order.placeOrder();
//* Ordering products: Apple, Banana
//* Placing order...
//* Ordering products: Apple, Banana
//* Order placed successfully!

// ! Prototype and Class
//TODO:=========task-01=================
/**
 * Напиши клас Notes який управляє колекцією нотаток у властивості items.
 * Нотатка - це об'єкт із властивостями text і priority.
 * Додай класу статичний метод Priority, який буде повертати об'єкт із пріоритетами.
 * Додай методи
 * - addNote(note),
 * - removeNote(text)
 * - updatePriority(text, newPriority)
 */

// class Notes {
//   static Priority() {
//     return {
//       LOW: "low",
//       HIGHT: "hight",
//     };
//   }
//   constructor() {
//     this.items = [];
//   }
//   addNote(note) {
//     this.items.push(note);
//     console.log(this.items);
//   }
//   removeNote(noteName) {
//     const index = this.items.findIndex(({ text }) => text === noteName);
//     if (index !== -1) {
//       this.items.splice(index, 1);
//     }
//     console.log(this.items);
//   }
//   updatePriority({ text, newPriority }) {
//     const index = this.items.findIndex((item) => item.text === text);
//     if (index !== -1) {
//       this.items[index].priority = newPriority;
//     }
//   }
// }

// const note1 = new Notes();

// note1.addNote({ text: "Note1", priority: Notes.Priority().LOW });
// note1.addNote({ text: "Note2", priority: Notes.Priority().LOW });

// note1.removeNote("Note1");

// note1.updatePriority({ text: "Note2", newPriority: Notes.Priority().HIGHT });
// console.table(note1.items);

//! Практика наслідування у класах.
//TODO:=========task-02=================
/**
  |============Person================
  | Cтворіть клас `Person`, який містить наступні властивості:
  |  - `name` - ім'я людини;
  |  - `age`- вік людини;
  |  - `gender` - стать людини;
  |  - `email`- електронна пошта людини.
  |
  | ##### Крім того, клас `Person` має мати метод `getDetails()`, який повертає об'єкт з ім'ям, віком, статтю та електронною поштою людини.
  |============================
*/
// class Person {
//   constructor({ userName, age, gender, email }) {
//     this.name = userName;
//     this.age = age;
//     this.gender = gender;
//     this.email = email;
//   }
//   getDetails() {
//     return {
//       userName: this.name,
//       age: this.age,
//       gender: this.gender,
//       email: this.email,
//     };
//   }
// }

/**
  |=============Employee===============
  |Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  |  - salary - зарплата співробітника;
  |  - department - відділ, в якому працює співробітник.
  |  ##### Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з ідентифікатором співробітника, зарплатою та відділом, в якому працює співробітник.
  |============================
*/
// class Employee extends Person {
//   constructor({ userName, age, gender, email, salary, department }) {
//     super({ userName, age, gender, email });
//     this.department = department;
//     this.salary = salary;
//   }
//   getEmployeeDetails() {
//     return {
//       ...this.getDetails(),
//       salary: this.salary,
//       department: this.department,
//     };
//   }
// }

// const John = {
//   userName: "John Doe",
//   age: 30,
//   gender: "Male",
//   email: "john.doe@example.com",
// };

// const person = new Person("John Doe", 30, "Male", "john.doe@example.com");
// const person = new Person(John);
// console.log(person.getDetails());

// const Jane = {
//   userName: "Jane Smith",
//   age: 35,
//   gender: "Female",
//   email: "jane.smith@example.com",
//   salary: 5000,
//   department: "HR",
// };

// const employee = new Employee(
//   "Jane Smith",
//   35,
//   "Female",
//   "jane.smith@example.com",
//   5000,
//   "HR"
// );
// const employee = new Employee(Jane);
// console.log(employee.getEmployeeDetails());

// console.log(employee);
// console.log(document);

//TODO:=================task-03=============================
// Завдання полягає у створенні програми, що дозволяє керувати замовленнями в ресторані.

// #### Для цього потрібно реалізувати клас `Order`, який містить такі приватні властивості:
// - `tableNumber` - номер столика, де зроблено замовлення
// - `items` - масив предметів замовлення, де кожен предмет містить ім'я (name) та ціну (price)
// - `isPaid` - позначає, чи оплачене замовлення (default = false)

// ##### Для класу Order потрібно реалізувати такі методи:
// - `calculateTotal`() - повертає загальну суму замовлення.
// - `markAsPaid`() - позначає замовлення як оплачене
// - `addItem`() - який додає предмет замовлення до масиву "items"
// - `removeItem`() - який видаляє предмет замовленя з масиву "items"
// ##### Додатково можна створити гетери та сетери для отримання номера столика, статусу замовлення та самого замовлення

// #### Також потрібно створити клас `MenuItem`, який містить властивості `name` та `price` для предметів замовлення.

// Create menu items
// const item1 = new MenuItem("Burger", 10);
// const item2 = new MenuItem("Fries", 5);
// const item3 = new MenuItem("Drink", 2);

// // Create an order
// const order = new Order(1);

// // Add items to the order
// order.addItem(item1);
// order.addItem(item2);
// order.addItem(item3);

// // Calculate the total and mark the order as paid
// const total = order.calculateTotal();
// order.markAsPaid();

// console.log(`Order for table ${order.tableNumber} - Total: $${total}`);
// console.log(`Is paid: ${order.isPaid}`);
