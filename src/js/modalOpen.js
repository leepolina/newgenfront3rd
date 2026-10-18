const API_KEY = "nodlSYDYPs3zawFkRJQUF5HZXVlBWBCZ";
const BASE_URL = "https://app.ticketmaster.com/discovery/v2/";
const currentLi = document.querySelector("[data-id]");

async function fetchModal(id) {
  try {
    const data = await fetch(`${BASE_URL}/${id}`);
    const mod = data.json();
    return mod;
  } catch (error) {
    console.error(error);
  }
}

