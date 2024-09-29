const form = document.querySelector('.feedback-form');
const localData = JSON.parse(localStorage.getItem('feedback-form-state'));

const formData = {
  email: '',
  message: '',
};

function fillData(localStorage) {
  if (localStorage) {
    form.elements.email.value = localStorage.email || '';
    form.elements.message.value = localStorage.message || '';

    formData.email = localStorage.email || '';
    formData.message = localStorage.message || '';
  }
}

fillData(localData);
form.addEventListener('input', (event) => {
  if (event.target.name === 'email') {
    formData.email = event.target.value.trim();
  } else if (event.target.name === 'message') {
    formData.message = event.target.value.trim();
  }

localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Lütfen bütün alanları doldurunuz');
    return;
  }

  console.log(formData);
  form.reset();
  localStorage.removeItem('feedback-form-state');
  
  formData.email = '';
  formData.message = '';
});