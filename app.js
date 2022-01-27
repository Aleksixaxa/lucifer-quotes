import apiRequest from './api-request.js';

// importing elements
let quote = document.querySelector('.quote'),
  quoteAuthor = document.querySelector('.quote-author'),
  button = document.querySelector('.new-quote');

async function renderData() {
  const data = await apiRequest();
  data.forEach((element) => {
    quote.innerHTML = `<q class="quote">${element.quote}</q>`;
    quoteAuthor.innerHTML = `<cite class="quote-author">${element.author}</cite>`;
  });

  console.log(data);
}

renderData();

button.addEventListener('click', () => {
  renderData();
});
