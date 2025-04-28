function handleSearchSubmit(event) {
  event.preventDefault(); /*ie reloading the page */
  let cityElement = document.querySelector("#search-input-id");
  document.querySelector("#city-name-id").innerHTML = cityElement.value;
}

let searchFormElement = document.querySelector("#search-form-id");
searchFormElement.addEventListener("submit", handleSearchSubmit);
