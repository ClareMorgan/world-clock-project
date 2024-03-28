function updateNewYork() {
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment.tz("America/New_York");

  newYorkDateElement.innerHTML = newYorkTime.format("dddd MMMM Do YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format(
    "HH:mm:ss[<small>]A[</small>]"
  );
}
updateNewYork();
setInterval(updateNewYork, 1000);

function updateTokyo() {
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment.tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("dddd MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("HH:mm:ss[<small>]A[</small>]");
}
updateTokyo();
setInterval(updateTokyo, 1000);
