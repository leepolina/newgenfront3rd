import { fetchEvents } from "./services";
import { fetchSearch } from "./search";
import { fetchCity } from "./fetchCity";

const eventsList = document.querySelector("#events-list");
const inputName = document.querySelector(".header_input[data=name]");
const inputCity = document.querySelector(".header_input[data=city]");
const listCity = document.querySelector(".header_list-city");
const option = document.querySelector(".header_option-button");
let page = 1;
function loadEvents(page = 0) {
  fetchEvents(page)
    .then((events) => {
      console.log("Your events:", events);
      renderEvents(events);
    })
    .catch((error) => {
      console.error(error);
    });
}

function renderEvents(events) {
  eventsList.innerHTML = events
    .map((event) => {
      const image = event.images[0].url;
      const name = event.name;
      const date = event.dates.start.localDate;

      return `
        <li data-id="${event.id}" class="event-card">
          <img src="${image}" alt="${name}" />
          <h2>${name}</h2>
          <p>${date}</p>
        </li>
      `;
    })
    .join("");
}
function searchName() {
  let queryName = inputName.value.trim();
  fetchSearch(page, queryName)
    .then((events) => {
      renderEvents(events);
    })
    .catch((error) => {
      console.error("error to load the event", error);
    });
}
function searchCity() {
  let queryCity = inputCity.value.trim();
  fetchSearch(page, queryCity)
    .then((events) => {
      renderEvents(events);
    })
    .catch((error) => {
      console.error("error to load the event", error);
    });
}

inputName.addEventListener("input", searchName);
inputCity.addEventListener("input", () => {
 option.classList.add("header_svg-rotation");
  listCity.classList.remove("header_list-city-invisibily");
  let queryCity = inputCity.value.trim();
  fetchCity((page = 1), listCity, queryCity);
  searchCity();
});
option.addEventListener("click", () => {
 option.classList.toggle("header_svg-rotation");
 listCity.classList.toggle("header_list-city-invisibily");
   let queryCity = inputCity.value.trim();
  fetchCity((page = 1), listCity, queryCity);
});
listCity.addEventListener("click", (e) => {
  e.preventDefault();
  let city = e.target.textContent;
  inputCity.value = city;
  searchCity();
});
loadEvents();
