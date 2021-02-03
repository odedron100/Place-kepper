
const changeBackgroundColor = (el) => {
  document.body.style.backgroundColor = el.value;
  document.body.style.color = el.value;
}

const onChangeAge = (val) => {
  let elAge = document.querySelector('.age-txt');
  elAge.innerHTML = val;
}

const onSubmitClicked = (ev) => {
  ev.preventDefault();
  const userName = document.querySelector('[name = name]').value;
  const color = document.querySelector('[name = user-favorite-color]').value;
  const birthday = document.querySelector('[name = Birthday]').value;
  const time = document.querySelector('[name = time]').value;
  const email = document.querySelector('[name = email]').value;
  const age = document.querySelector('[name = age]').value;

  const user = createUser(userName, color, birthday, time, email, age);
  addUser(user);

  document.querySelector('[name = name]').value = '';
  document.querySelector('[name = user-favorite-color]').value = '';
  document.querySelector('[name = Birthday]').value = '';
  document.querySelector('[name = time]').value = '';
  document.querySelector('[name = email]').value = '';
  document.querySelector('[name = age]').value = '18';
  window.location.href = 'map.html';
}

const onShowForecast = () => {
  openModal();
}

const openModal = () => {
  var elModal = document.querySelector('.forecast-modal');
  var forecastTxt = getForecast();
  elModal.querySelector('h2').innerHTML = 'Forecast';
  document.querySelector('.forecast-modal p').innerHTML = forecastTxt;
  elModal.classList.add('visible');
}


function closeModal() {
  var elModal = document.querySelector('.forecast-modal');
  elModal.classList.remove('visible');
}
