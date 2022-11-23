function getTime() {
  const d = new Date();
  const today = document.querySelector("#day");
  const year = d.getFullYear();
  const month = d.getMonth();
  const resultMonth = month >= 10 ? month : `0${month}`;
  const date = d.getDate();
  const resultDate = date >= 10 ? date : `0${date}`;
  const day = d.toLocaleString("en-US", { weekday: "short" });
  // const arrDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  // const resultDay = arrDay[day];
  today.innerText = `${year}. ${resultMonth}. ${resultDate}.(${day})`;

  const clock = document.querySelector("#clock");
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const resultHours = hours >= 10 ? hours : `0${hours}`;
  const resultMinutes = minutes >= 10 ? minutes : `0${minutes}`;

  clock.innerText = `${resultHours} : ${resultMinutes}`;
}

getTime();
setInterval(getTime, 1000);
