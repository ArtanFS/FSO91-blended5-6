//TODO:=========task-01=================
// 3. Вставте даний текст в html документ, а потім виділіть усі слова, які мають більше 8 символів у тексті абзацу (наприклад, жовтим фоном).

// const text = `Об'єктна модель документа (Document Object Model) - незалежний від мови інтерфейс для роботи з HTML-документом. Містить набір властивостей і методів, що дозволяють шукати, створювати і видаляти елементи, реагувати на дії користувача і багато іншого. Тобто з'єднує сторінку з мовою програмування.`;

// const words = text.split(/\s+/); // Розбиваємо текст на слова за допомогою роздільників (пробіли, коми, крапки і т.д.)
// console.log(words);
// const paragraphEl = document.createElement("p");
// words.forEach((element) => {
//   console.log(element);
//   if (element.length > 8) {
//     const spanEl = document.createElement("span");
//     spanEl.style.backgroundColor = "yellow";
//     spanEl.textContent = element + " ";
//     paragraphEl.appendChild(spanEl);
//   } else {
//     paragraphEl.innerHTML += element + " ";
//   }
// });
// console.log(paragraphEl);
// const list = document.querySelector(".film-list");
// list.after(paragraphEl);

//TODO:=========task-02=================
// Створіть контейнер div (з класом numberContainer )в HTML-документі та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div(numberContainer). Парні числа повинні мати зелений фон (додати клас even), Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;
// const BLOCKS = 200;
// const divEl = document.createElement("div");
// divEl.classList.add("number-container");
// const arrDiv = [];
// for (let i = 0; i < BLOCKS; i += 1) {
//   const div = document.createElement("div");
//   div.classList.add("number");
//   div.textContent = randomNumber();
//   div.textContent % 2 === 0
//     ? div.classList.add("even")
//     : div.classList.add("odd");
//   arrDiv.push(div);
// }
// console.log(arrDiv);
// divEl.append(...arrDiv);
// list.after(divEl);

// //TODO:=========task-03=================
// Створи HTML список фільмів на основі масиву під назвою films. Користувач обожнює дивитися кіно, дивиться його часто, тому при вході на сторінку він хоче бачити, які фільми вже були переглянуті, а до яких він ще не добрався. Вперу чергу зарендери фільми на сторінку, використовуй допоміжну функцію createMarkup(), яка буде повертати розмітку. Додай розмітку на сторінку задопомогою insertAdjacentHTML() і тільки після цього зроби елементи фільмів (li), які вже були переглянуті напівпрозорими (opacity: 0.5). Для цього використовуй масив унікальних id фільмів, знайди на сторінці елементи у яких id дорівнює тому id фільма, який користувач вже перелянув аби саме їх зробити напівпрозорими.

const films = [
  {
    title: 'Tetris',
    imgUrl: 'https://static.hdrezka.ac/i/2023/3/20/f509264b419fdmu53x38j.jpg',
    id: 'film_1',
  },
  {
    title: 'Avatar: The Way of Water',
    imgUrl: 'https://static.hdrezka.ac/i/2022/12/22/tc5e6b8212683gn66r84s.jpg',
    id: 'film_2',
  },
  {
    title: 'Operation Fortune: Ruse de guerre',
    imgUrl: 'https://static.hdrezka.ac/i/2022/2/11/s0d53f6cf0ae0tq29m85l.jpg',
    id: 'film_3',
  },
  {
    title: 'Babylon',
    imgUrl: 'https://static.hdrezka.ac/i/2022/12/25/z330b47a82209ww99w55a.jpg',
    id: 'film_4',
  },
  {
    title: 'The Whale',
    imgUrl: 'https://static.hdrezka.ac/i/2023/2/24/h23d8c65d734akd89q94c.jpg',
    id: 'film_5',
  },
];

// Приклад елементу списку
{
  /* <li id="${id}">
     <img src="${imgUrl}" alt="${title}" />
     <p>${title}</p>
</li> */
}

// const watchedFilms = ["film_2", "film_3", "film_5"];

// function createMarkup(obj) {
//   const { title, imgUrl, id } = obj;
//   return `<li id="${id}">
//      <img src="${imgUrl}" alt="${title}" />
//      <p>${title}</p>
//   </li>`;
// }
// function renderFilms(arr) {
//   const listEl = document.querySelector(".film-list");
//   const filmMark = arr.map((film) => createMarkup(film)).join("");
//   listEl.insertAdjacentHTML("beforeend", filmMark);
//   watchedFilms.forEach((id) => {
//     const filmEl = document.querySelector(`#${id}`);
//     if (filmEl) {
//       filmEl.style.opacity = 0.5;
//     }
//   });
// }
// renderFilms(films);
// Модуль 7. Заняття 13. Поширення подій.

//TODO:=========task-01=======Accordion==========
/**
 * Викоритовуй шаблон акордеон меню з файлу[accordion.html](./accordion.html) та напиши наступний функціонал:
 * при кліку на елемент меню, розкривай блок з текстом. При повторному кліку по елементу,
 * розкритий текст приховується.Нажимаючи на інші елементи меню, попередньо відкриті елементи не закриваються.
 */

// const listRef = document.querySelector(".js-accordion-list");

// function handleBtnClick(event) {
//   if (event.target.nodeName === "BUTTON") {
//     event.target.nextElementSibling.classList.toggle("active");
//   }
// }

// listRef.addEventListener("click", handleBtnClick);

//TODO:=========task-02=======Pagination==========
/**
 * Викоритовуй шаблон пагінації з файлу[pagination.html](./pagination.html) для розробки функціоналу пагінатора.
 * Використовуй поширення подій.Додавай клас`active` на поточну сторінку. Створи допоміжну функцію`updateActivePage`, яка повинна обновляти активний клас.
 * Функція`handleClick`повинна викликатися коли відбувається клік на елементі`pagination`.
 */
// {
// }
// const paginatEl = document.querySelector(".js-pagination");
// paginatEl.addEventListener("click", updateActivePage);

// function updateActivePage(event) {
//   if (event.target.nodeName !== "LI") {
//     return;
//   }
//   const currentButton = event.target;
//   const activeButton = paginatEl.querySelector(".active");
//   console.log(currentButton);
//   console.log(activeButton);
//   if (currentButton.dataset.type === "page") {
//     currentButton.classList.add("active");
//     activeButton.classList.remove("active");
//   }
//   if (currentButton.dataset.type === "prev") {
//     const activePage = activeButton.dataset.page - 1;
//     const prevBtn = paginatEl.querySelector(`[data-page="${activePage}"]`);
//     if (prevBtn) {
//       activeButton.classList.remove("active");
//       prevBtn.classList.add("active");
//     }
//   }
//   if (currentButton.dataset.type === "next") {
//     const activePage = Number(activeButton.dataset.page) + 1;
//     const nextBtn = paginatEl.querySelector(`[data-page="${activePage}"]`);
//     if (nextBtn) {
//       activeButton.classList.remove("active");
//       nextBtn.classList.add("active");
//     }
//   }
// }

//TODO:=========task-03======Modal window===========
/**
  |============================
  | Модальне вікно:
  |  1 - Реалізувати відкриття модального вікна по кліку по кнопці "Відкрити модалку".
  |  2 - Реалізувати закриття модального вікна по кліку на крестик і по "ESC". Не забувай знімати слухача події "keydown" після закриття модального вікна.
  |  Виконуй завдвння послідовно: 
  |  - Спочатку знайди елементи у Дом дереві, з якими тобі потрібно працювати. 
  |  - Створи 3 функції onOpenModalBtnElClick, closeModalWindow, onEscClick. Не забувай робити перевірку на цільовий елемент. 
  |  - Відображення модельного вікна реалізуй заа допомогою бібліотеки basicLightbox і його метода "basicLightbox.create".
  |============================
*/

/**
  |============Розмітка для модального вікна================
  <div class="modal">
  <button type="button" class="close-btn js-modal-close">
    X
  </button>

  <form class="login-form js-modal__form">
    <label>
      Name
      <input type="text" name="name" placeholder="enter your name" />
    </label>
    <label>
      Email
      <input type="email" name="email" placeholder="enter your email" />
    </label>
    <label>
      Password
      <input
        type="password"
        name="password"
        placeholder="enter your password"
      />
    </label>
    <button class="login-btn" type="submit">
      Login
    </button>
  </form>
</div>
  |============================
*/
