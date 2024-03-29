function updateTime() {
  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment.tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("dddd MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("HH:mm:ss[<small>]A[</small>]");

  //Edinburgh
  let edinburghElement = document.querySelector("#edinburgh");
  let edinburghDateElement = edinburghElement.querySelector(".date");
  let edinburghTimeElement = edinburghElement.querySelector(".time");
  let edinburghTime = moment.tz("Europe/Edinburgh");

  edinburghDateElement.innerHTML = edinburghTime.format("dddd MMMM Do YYYY");
  edinburghTimeElement.innerHTML = edinburghTime.format(
    "HH:mm:ss[<small>]A[</small>]"
  );

  //Honolulu
  let honoluluElement = document.querySelector("#honolulu");
  let honoluluDateElement = honoluluElement.querySelector(".date");
  let honoluluTimeElement = honoluluElement.querySelector(".time");
  let honoluluTime = moment.tz("Pacific/Honolulu");

  honoluluDateElement.innerHTML = honoluluTime.format("dddd MMMM Do YYYY");
  honoluluTimeElement.innerHTML = honoluluTime.format(
    "HH:mm:ss[<small>]A[</small>]"
  );
}

function updateCity() {
  if (!selectedCity) return;
  if (selectedCity === "current") {
    selectedCity = moment.tz.guess();
  }
  let cityName = selectedCity.replace("_", " ").split("/")[1];
  let cityDate = moment.tz(selectedCity).format("dddd MMMM Do YYYY");
  let cityTime = moment.tz(selectedCity).format("HH:mm:ss[<small>]A[</small>]");
  let citiesElement = document.querySelector("#cities-display");

  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityDate}</div>
          </div>
          <div class="time">${cityTime}</div>
        </div>
        <a href="/">Back to all cities</ a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city-select");
citiesSelectElement.addEventListener("change", function (event) {
  selectedCity = event.target.value;
  updateCity();
});

let cityTimeZone = null;
setInterval(updateCity, 1000);
