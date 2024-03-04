const year = document.getElementById("year");
const thisYear = new Date().getFullYear();
year.setAttribute("dateTime", thisYear);
year.textContent = thisYear;
