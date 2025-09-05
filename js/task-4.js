const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', event => {
  event.preventDefault();

  const emailInput = event.currentTarget.elements.email;
  const passwordInput = event.currentTarget.elements.password;

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  if (emailValue === '' || passwordValue === '') {
    return alert('All form fields must be filled in');
  }
  const formData = {
    email: emailValue,
    password: passwordValue,
  };
  console.log(formData);
  event.currentTarget.reset();
});
