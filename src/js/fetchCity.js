const API_KEY = "nodlSYDYPs3zawFkRJQUF5HZXVlBWBCZ";
const BASE_URL = "https://app.ticketmaster.com/discovery/v2/";
import renderCity from "./renderCity";
export async function fetchCity(page = 1, listCity, queryCity) {
  try {
    let response;
    if (!queryCity) {
      response = await fetch(
        `${BASE_URL}events.json?apikey=${API_KEY}&page=${page}&size=200`,
      );
    } else {
      response = await fetch(
        `${BASE_URL}events.json?apikey=${API_KEY}&page=${page}&keyword=${queryCity}`,
      );
    }

    const data = await response.json();
    console.log(data);
    renderCity(data._embedded.events ?? [], listCity);
  } catch (error) {
    console.error(error);
  }
}
