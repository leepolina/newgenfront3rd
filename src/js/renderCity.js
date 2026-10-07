export default function renderCity(data, container) {
  container.innerHTML = "";

  const allCountries = data.map((event) => {
    return event._embedded?.venues?.[0]?.city?.name;
  });

  const countries = [...new Set(allCountries)].filter(
    (country) => country,
  );

  container.innerHTML = countries
    .map((countryName) => {
      return `<li class="header_item-city">
      <p class="header_text-city">${countryName}</p>
    </li>`;
    })
    .join("");
}
