const categorEl = document.querySelector('ul#categories');

const itemEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${itemEl.length}`);

// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

itemEl.forEach(function (item) {
  const titleEl = item.querySelector('h2');
  console.log(`Category: ${titleEl.textContent}`);

  const titleItemEl = item.querySelectorAll('ul li');

  console.log(`Elements: ${titleItemEl.length}`);
});
