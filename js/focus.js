const focusForm = document.querySelector("#focusForm");
const focusInput = document.querySelector("#focusInput");
const focus = document.querySelector("#focus");
const focusBox = document.querySelector("#focusBox");
const checkBox = document.querySelector("#checkBox");
const removeFocus = document.querySelector("#removeFocus");
const TODAY_FOCUS = "todayFocus";
const CHECKED = "checked";
let focusObj = {
  text: "",
  check: 0,
};
const savedFocus = localStorage.getItem(TODAY_FOCUS);

function saveFocus() {
  localStorage.setItem(TODAY_FOCUS, JSON.stringify(focusObj));
}

function focusSubmit(event) {
  event.preventDefault();
  focusForm.classList.add(HIDDEN);
  focusObj.text = focusInput.value;
  saveFocus();
  paintFocus();
}
function paintFocus() {
  focus.innerText = focusObj.text;
  if (focusObj.check) {
    focus.classList.add(CHECKED);
    checkBox.setAttribute(CHECKED, CHECKED);
  }
  focusBox.classList.remove(HIDDEN);
  checkBox.addEventListener("change", checkedFocus);
  removeFocus.addEventListener("click", rmvFocus);
}
function checkedFocus() {
  if (this.checked) {
    focusObj.check = 1;
    checkBox.setAttribute(CHECKED, CHECKED);
    focus.classList.add(CHECKED);
    saveFocus();
  } else {
    focusObj.check = 0;
    focus.classList.remove(CHECKED);
    saveFocus();
  }
}

function rmvFocus() {
  localStorage.removeItem(TODAY_FOCUS);
  window.location.reload();
}

if (savedFocus === null) {
  focusForm.classList.remove(HIDDEN);
  focusForm.addEventListener("submit", focusSubmit);
} else {
  const parsedFocus = JSON.parse(savedFocus);
  focusObj = parsedFocus;
  paintFocus();
}
