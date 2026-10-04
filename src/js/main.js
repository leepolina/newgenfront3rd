import { fetchEvents } from "./services";
const eventsList = document.querySelector("#events-list");

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

loadEvents();
