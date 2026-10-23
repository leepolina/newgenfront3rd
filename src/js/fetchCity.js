const API_KEY = "nodlSYDYPs3zawFkRJQUF5HZXVlBWBCZ";
const BASE_URL = "https://app.ticketmaster.com/discovery/v2/";
import renderModal from "./modal";
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

    renderCity(data._embedded.events ?? [], listCity);

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchModal(id) {
  try {
    const data = await fetch(
      `${BASE_URL}events.json?apikey=${API_KEY}&id=${id}`,
    );
    const mod = await data.json();
    return mod;
  } catch (error) {
    console.error(error);
  }
}
