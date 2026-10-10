const API_KEY = "nodlSYDYPs3zawFkRJQUF5HZXVlBWBCZ";
const BASE_URL = "https://app.ticketmaster.com/discovery/v2/";
export async function fetchSearch(page, query) {
  try {
    const response = await fetch(
      `${BASE_URL}events.json?apikey=${API_KEY}&page=${page}&size=20&keyword=${query}`,
    );
    const data = await response.json();
    return data && data._embedded && data._embedded.events
      ? data._embedded.events
      : [];
  } catch (error) {
    console.error(error);
  }
}
