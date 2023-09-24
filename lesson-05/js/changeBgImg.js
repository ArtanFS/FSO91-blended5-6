// 3. Напишіть changeBackground() встановлює фонове зображення на body. Викоритовуй масив картинок, які повинні кожні 5 секунд змінюватися, тобто через кожні 5 секунд має викликатися функція changeBackground. Якщо ми дійшли до кінця масива, то починай спочатку. Для цього створи лічильник, аби слідкувати, яка картинка зараз показується.
// Стиль для body для плавного переходу

const images = [
  'url("https://picsum.photos/id/1015/1920/1080")',
  'url("https://picsum.photos/id/1018/1920/1080")',
  'url("https://picsum.photos/id/1025/1920/1080")',
];

let counterIndex = 0;

function changeBackground() {
  const body = document.body;
  body.style.backgroundImage = images[counterIndex];
  counterIndex = (counterIndex + 1) % images.length; // операція залишку - modulo
  console.log(counterIndex);
}

setInterval(changeBackground, 2000);
