function refreshDetails(response) {
  document.querySelector("#city-name-id").innerHTML = response.data.city;
  let temp = Math.round(response.data.temperature.current);
  document.querySelector("#temp-id").innerHTML = temp;
}

function searchCity(city) {
  let apiKey = "742ecdbd8fa1dfo0tac0da7480944305";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(refreshDetails);
}

function handleSearchSubmit(event) {
  event.preventDefault(); /*ie reloading the page */
  let cityElement = document.querySelector("#search-input-id");
  searchCity(cityElement.value);
}

let searchFormElement = document.querySelector("#search-form-id");
searchFormElement.addEventListener("submit", handleSearchSubmit);
