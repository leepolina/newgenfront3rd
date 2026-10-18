const API_KEY = "nodlSYDYPs3zawFkRJQUF5HZXVlBWBCZ";
const BASE_URL = "https://app.ticketmaster.com/discovery/v2/";
// fetch(
//   `https://app.ticketmaster.com/discovery/v2/events.json?apikey=nodlSYDYPs3zawFkRJQUF5HZXVlBWBCZ`,
// ).then((data) => console.log(data));

export async function fetchEvents(page) {
  try {
    const response = await fetch(
      `${BASE_URL}events.json?apikey=${API_KEY}&page=${page}&size=20`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch events");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
