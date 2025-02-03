const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const time = document.getElementById("time");

const updateDateTime = () => {
  const today = new Date();

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const allMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  date.innerHTML = (today.getDate() < 10 ? "0" : "") + today.getDate();
  day.innerHTML = weekDays[today.getDay()];
  month.innerHTML = allMonths[today.getMonth()];
  year.innerHTML = today.getFullYear();

  const hours = today.getHours().toString().padStart(2, "0");
  const minutes = today.getMinutes().toString().padStart(2, "0");
  const seconds = today.getSeconds().toString().padStart(2, "0");

  time.innerHTML = `${hours}:${minutes}:${seconds}`;
};

updateDateTime();
setInterval(updateDateTime, 1000); // Update time every second
