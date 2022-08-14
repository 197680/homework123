

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let h5 = document.querySelector("h5");
h5.innerHTML = `${hours}:${minutes}, ${day}`;


// Завдання2

//function search(event) {
  //event.preventDefault();
  //let searchInput = document.querySelector("#search-text-input");
  //let h6 = document.querySelector("h6");
  //if (searchInput.value) {
    //h6.innerHTML = `${searchInput.value}`;
  //} else {
    //h6.innerHTML = `Zhytomyr`;
  //}
//}
//let form = document.querySelector("#search-form");
//form.addEventListener("submit", search);

function searchCity(city) {
    let apiKey = "cedbca303791d6afa0de69ad5e2a4b0b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
}
function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#search-text-input").value;
    searchCity(city);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);


function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
   cityElement.innerHTML = response.data.name;
  let descriptionElement = document.querySelector("#text-everyday");
  descriptionElement.innerHTML = response.data.weather[0].main;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
    let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);

}



