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
}
user.mood = 'happy';
user.hobby = 'skydiving';
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

const getBool = (object, key) => key in object

console.log(getBool(user, "hobby")) ;