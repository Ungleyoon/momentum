const nameForm = document.querySelector("#nameForm");
const nameInput = document.querySelector("#nameInput");
const greeting = document.querySelector("#greeting");
const userName = document.querySelector("#userName");
const removeBtn = document.querySelector("#removeBtn");
let ment;
const HIDDEN = "hidden";
const USERNSME_KEY = "username";
const savedUsername = localStorage.getItem(USERNSME_KEY);

function greetingMent() {
  const time = new Date();
  const currentHour = time.getHours();
  if (currentHour > 22) ment = "편안한 밤 되세요.😴";
  else if (currentHour > 19) ment = "오늘 하루도 고생 많았어요!☺️";
  else if (currentHour > 16) ment = "오늘도 거의 끝났어요. 조금만 힘내요💪";
  else if (currentHour > 13) ment = "점심 맛있게 드셨나요?😁";
  else if (currentHour > 10) ment = "좋은 하루가 되었으면 해요!";
  else if (currentHour > 6) ment = "좋은 아침이에요.";
  else ment = "아직 안주무시다니 대단해요!";
  greeting.innerText = ment;
}

greetingMent();
setInterval(greetingMent, 1000);

function nameSubmit(event) {
  event.preventDefault();
  nameForm.classList.add(HIDDEN);
  const value = nameInput.value;
  localStorage.setItem(USERNSME_KEY, value);
  paintGreeting(value);
}

function paintGreeting(name) {
  userName.innerText = `${name}님!`;
  userName.classList.remove(HIDDEN);
  greeting.classList.remove(HIDDEN);
  removeBtn.classList.remove(HIDDEN);
  removeBtn.addEventListener("click", removeUsername);
}

function removeUsername() {
  localStorage.removeItem(USERNSME_KEY);
  window.location.reload();
}

if (savedUsername === null) {
  nameForm.classList.remove(HIDDEN);
  nameForm.addEventListener("submit", nameSubmit);
} else {
  paintGreeting(savedUsername);
}
