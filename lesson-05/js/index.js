// Модуль 8. Заняття 16. Local storage
// 1. Counter
// Використовуй html з файлу counter.html
// Отримай всі кнопки з атрибутом data-action
// До відповідної кнопки, з відповідним data-action застосовувуй свій функціонал:
// При кліку на кнопку data-action="save" зберігай значення counter у local storage
// При кліку на кнопку data-action="clear-save" видаляй збережене значення counter з local storage
// При кліку на кнопку data-action="decrease" зменшуй counter на 1
// При кліку на кнопку data-action="increase" збільшуй counter на 1
// При кліку на кнопку data - action="reset" роби counter = 0

// 2. Theme switcher
// Використовуй html з файлу themeSwitch.html
// Використовуй local storage для зберігання вибраної теми (dark / light)
const themeSwitcher = document.getElementById("theme-switch");
const body = document.body;
const LS_K = "Theme";
themeSwitcher.addEventListener("click", onCheckBoxChange);
document.addEventListener("DOMContentLoaded", setThemeOnLoad);

// light theme is default, that's why themeSwitcher is unchecked
themeSwitcher.checked = false;

function changeLightTheme() {
  body.classList.replace("dark", "light");
  localStorage.setItem(LS_K, "light");
}

function changeDarkTheme() {
  body.classList.replace("light", "dark");
  localStorage.setItem(LS_K, "dark");
}

function onCheckBoxChange() {
  if (themeSwitcher.checked) {
    changeDarkTheme();
  } else {
    changeLightTheme();
  }

  // if you change theme to dark, add 'dark' class and remove previus, add this change to local storage
  // if you select light theme do the same work but add 'light' class
}

function setThemeOnLoad() {
  // this helpful function should call every time when you update page, to check what theme was seted to local storage
  // you should get data from LS and set saved theme to body
  // don't forget about themeSwitcher, if current theme is dark, it should be checked
  const lsData = localStorage.getItem(LS_K);
  if (lsData === "dark") {
    body.classList.replace("light", "dark");
    themeSwitcher.checked = true;
  } else {
    body.classList.replace("dark", "light");
  }
}

// Модуль 9. Заняття 17. Timers and date. Asynchrony
// 1. Напиши скрипт для віджета календаря. В кінцевому результаті повинна відображатися сьогоднішня дата у календарику. Використовуй new Date() для отримання поточного року, місяця, дня тижня та самого дня. Задай відповідні дані у відповідні елементи на html сторінці.
// Викоритовуй шаблон календаря з файлу index.html.
const monthNameEl = document.querySelector(".js-month");
const dayNameEl = document.querySelector(".js-day");
const dayNumEl = document.querySelector(".js-day-number");
const yearEl = document.querySelector(".js-year");

const date = new Date();
monthNameEl.textContent = date.toLocaleDateString("uk-UA", { month: "long" });
dayNameEl.textContent = date.toLocaleDateString("uk-UA", { weekday: "long" });
dayNumEl.textContent = date.toLocaleDateString("uk-UA", { day: "numeric" });
yearEl.textContent = date.toLocaleDateString("uk-UA", { year: "numeric" });

// clock
const timeZone = -date.getTimezoneOffset() / 60;

(function createClock(rootSelector) {
  const markup = `
  <div class="clock__container">
             <div class="clock__items js-clock-items">
               <div class="clock__item js-clock__hours">00</div>
               <div class="clock__item js-clock__minutes">00</div>
               <div class="clock__item js-clock__seconds">00</div>
             </div>
           </div>
 `;

  rootSelector.insertAdjacentHTML("afterend", markup);
  const clockEl = document.querySelector(".js-clock-items");
  startClock(clockEl);
})(dayNameEl);

function startClock(rootSelector) {
  setInterval(() => {
    const currentTime = Date.now();
    const { hours, minutes, seconds } = convertMs(currentTime);
    rootSelector.querySelector(".js-clock__hours").textContent = addPad(
      hours + timeZone
    );
    rootSelector.querySelector(".js-clock__minutes").textContent =
      addPad(minutes);
    rootSelector.querySelector(".js-clock__seconds").textContent =
      addPad(seconds);
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function addPad(value) {
  return String(value).padStart(2, 0);
}

// 2. Потрібно створити калькулятор віку. Є контейнер з заголовком "калькулятором віку" і input з введенням дати. Якщо ми натиснемо на input дати, ми зможемо вибрати дату нашого дня народження. Наприклад, якщо ми виберемо дату 17.06.1998 року і натиснемо на "Розрахувати вік", побачимо, що вік розраховується на основі цієї дати і нам у результаті покажеться, що Your age is 25 years old; Якщо нічого не введено, то виводь alert("Please enter your birthday")Використовуй доповіжні функції для роботи.
// Викоритовуй шаблон форми з файлу ageCalculator.html.

const btnEl = document.querySelector(".js-form-btn");
const inputEl = document.querySelector(".js-input");
const resultEl = document.querySelector(".js-form-result");

function calculateAge() {
  const birthdayDate = new Date(inputEl.value);
  const currentDate = new Date();

  if (birthdayDate > currentDate) {
    return alert("Please enter your birthday");
  }

  const diffDate = currentDate - birthdayDate;
  const result = getAge(diffDate);
  console.log(result);
  resultEl.textContent = `Your age is ${result} years old!`;
}

function getAge(diffMs) {
  return Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365.25));
}

btnEl.addEventListener("click", calculateAge);

// 3. Напишіть changeBackground() встановлює фонове зображення на body. Викоритовуй масив картинок, які повинні кожні 5 секунд змінюватися, тобто через кожні 5 секунд має викликатися функція changeBackground. Якщо ми дійшли до кінця масива, то починай спочатку. Для цього створи лічильник, аби слідкувати, яка картинка зараз показується.
// Стиль для body для плавного переходу

// body {
//   background-repeat: no-repeat;
//   transition: background-image 1s ease-in-out;

//   background-position: top;
//   background-size: cover;
// }
// const images = [
//   'url("https://picsum.photos/id/1015/1920/1080")',
//   'url("https://picsum.photos/id/1018/1920/1080")',
//   'url("https://picsum.photos/id/1025/1920/1080")',
// ];

// function changeBackground() {}

//! Promise

//TODO:====================01==========================
/**
 * Перероби функцію на проміс таким чином, щоб проміс повертав значення
 * через 2 секунди після виклику функції
 */

function greet() {
  return "hello world";
}

//TODO:====================02==========================
/**
 * Перероби код так, щоб усі дані збиралися
 * одноразово і приходили у вигляді масиву
 */

const getData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 1;
      console.log(data);
      res(data);
    }, 1000);
  });

const getNewData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 2;
      console.log(data);
      res(data);
    }, 1000);
  });

const getAnotherData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 3;
      console.log(data);
      res(data);
    }, 1000);
  });

const getLastData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 4;
      console.log(data);
      res(data);
    }, 1000);
  });

//TODO:====================03==========================
/**
 * Функція countWithDelay приймає приймає 3 аргументи:
 * 1) кількість секунд перед тим як спрацює ф-ція logCount
 * 2) скільки разів має відпрацювати logCount
 * 3) затримка між викликами ф-ції
 *
 * logCount повинна логувати кількість викликів
 */

function createPromise(delay, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delay);
  }).then(() => {
    callback();
  });
}

function countWithDelay(delay, time, interval) {
  let counter = 0;
  function logCounter() {
    counter += 1;
    if (counter === time) return;
    setTimeout(logCounter, interval);

    console.log(counter);
  }
  createPromise(delay, logCounter);
}

countWithDelay(3000, 8, 1000);

//TODO:====================04==========================
/**
 * - Використовуй prompt і повертай значення звідти.
 * - Створи функцію, всередині якої буде проміс.
 * Якщо значення не є числом, відхиляй проміс і логіруй "error".
 * Якщо значення парне, вирішуй проміс і повертай "even" через 1 секунду.
 * Якщо значення не парне, вирішуй проміс і повертай "odd" через 2 секунди.
 */

// const value = prompt('Paste value');
// checkValue(value).then(console.log).catch(console.log);
