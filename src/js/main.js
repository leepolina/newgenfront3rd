import { fetchEvents } from "./services";
import { fetchSearch } from "./search";
import { fetchCity } from "./fetchCity";
let totalPage = 20;
const eventsList = document.querySelector("#events-list");
const inputName = document.querySelector(".header_input[data=name]");
const inputCity = document.querySelector(".header_input[data=city]");
const listCity = document.querySelector(".header_list-city");
const option = document.querySelector(".header_option-button");
const pagination = document.querySelector("#pagination");
let page = 1;
let showNextPages = false;
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

async function loadEvents(page) {
  try {
    const events = await fetchEvents(page);
    renderEvents(events._embedded.events);
    renderPagination(page);
  } catch (error) {
    console.error(error);
  }
}

// function renderPagination(currentPage) {
//   pagination.innerHTML = "";
//   for (let i = 1; i <= totalPage; i += 1) {
//     if ((i <= 10 && !showNextPages) || (i >= 11 && showNextPages)) {
//       const button = document.createElement("button");
//       button.textContent = i;
//       button.dataset.page = i;
//       if (i === currentPage) {
//         button.classList.add("pagination-button");
//       }
//       pagination.appendChild(button);
//     } else if (i === 11 && !showNextPages) {
//       const span = createDots();
//       span.dataset.page = 10;
//       pagination.appendChild(span);
//     }
//   }
// }
function renderPagination(currentPage) {
  pagination.innerHTML = "";

  const prevButton = document.createElement("button");
  prevButton.textContent = "<";
  prevButton.dataset.action = "first";
  prevButton.classList.add("pagination-arrow");
  pagination.appendChild(prevButton);
  const startPage = showNextPages ? 11 : 1;
  const endPage = showNextPages ? 20 : 10;

  for (let i = startPage; i <= endPage; i += 1) {
    const button = document.createElement("button");
    button.textContent = i;
    button.dataset.page = i;
    if (i === currentPage) {
      button.classList.add("pagination-button");
    }
    pagination.appendChild(button);
  }
  const nextButton = document.createElement("button");
  nextButton.textContent = ">";
  nextButton.dataset.action = "last";
  nextButton.classList.add("pagination-arrow");
  pagination.appendChild(nextButton);
}

function createDots() {
  const span = document.createElement("span");
  span.textContent = "...";
  return span;
}

pagination.addEventListener("click", (event) => {
  const target = event.target;
  if (target.dataset.action === "first") {
    page = 1;
    showNextPages = false;
    loadEvents(page);
    return;
  }
  if (target.dataset.action === "last") {
    page = totalPage;
    showNextPages = true;
    loadEvents(page);
    return;
  }
  const selectedPage = Number(target.dataset.page);
  if (!selectedPage) {
    return;
  }
  page = selectedPage;
  loadEvents(page);
});

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

loadEvents(1);
