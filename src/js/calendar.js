const calendarDate = document.querySelector(".calendar-date");
const date = new Date();
const CLASS_CLICKED = "clicked";

function calendar() {
  date.setDate(1);
  document.querySelector(".month").innerText = date.getMonth() + 1;
  document.querySelector(
    ".date p"
  ).innerText = `${date.getFullYear()} ${date.toLocaleString("en-US", {
    month: "short",
  })}`;

  const prevLastDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate(); //저번달 마지막 일자
  const thisLastDate = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate(); //이번달 마지막 일자
  const thisFirstDay = date.getDay();
  const thisLastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();
  let days = "";
  let count = 0;
  //저번달 미리보기
  for (let i = thisFirstDay; i > 0; i--) {
    days += `<div class="prev-date">${prevLastDate - i + 1}</div>`;
    count++;
  }
  //이번달
  for (let i = 1; i <= thisLastDate; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth() &&
      date.getFullYear() == new Date().getFullYear()
    ) {
      days += `<div class="item today">${i}</div>`;
    } else {
      days += `<div class="item">${i}</div>`;
    }
    count++;
  }
  console.log(count);
  const nextDates = count > 35 ? 7 - thisLastDay - 1 : 7 - thisLastDay - 1 + 7; //calendar 6row fix
  //다음달 미리보기
  for (let i = 1; i <= nextDates; i++) {
    days += `<div class="next-date">${i}</div>`;
  }
  calendarDate.innerHTML = days;

  calendarDate.addEventListener("click", (e) => {
    if (document.getElementsByClassName(CLASS_CLICKED)[0]) {
      document
        .getElementsByClassName(CLASS_CLICKED)[0]
        .classList.remove(CLASS_CLICKED);
    }
    if (e.target.classList.contains("item")) {
      e.target.classList.add(CLASS_CLICKED);
    }
  });
}

document.querySelector(".prev-month").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  calendar();
});
document.querySelector(".next-month").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  calendar();
});
calendar();

const calBtn = document.querySelector("#calBtn");
calBtn.addEventListener("click", () =>
  document.querySelector(".calendar-container").classList.toggle("show")
);
