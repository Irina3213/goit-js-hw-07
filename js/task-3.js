const inputRef = document.querySelector('.js-input');

const nameLabelRef = document.querySelector('.js-title > span');

inputRef.addEventListener('focus', handleInputFocus);

inputRef.addEventListener('blur', handleEventBlur);

inputRef.addEventListener('input', handleInputChange);

function handleInputFocus(event) {
  console.log('Получил фокус!');
}

function handleEventBlur(event) {
  console.log('Потерял фокус!');
}

function handleInputChange(event) {
  nameLabelRef.textContent = event.target.value.trim();
  if (!span.textContent) {
    span.textContent = 'Anonymous';
  }
}
