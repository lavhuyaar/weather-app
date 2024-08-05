import "./style.css";
import "./responsive.css";
import { validityChecker } from "./validityChecker";
import { weatherInfoDisplay } from "./weatherInfoDisplay";

//Checks validity when input loaded
window.onload = () => {
  document.querySelector("#location-input").onchange = validityChecker;
};

//Seach button
const searchBtn = document.querySelector("#search-btn");
searchBtn.addEventListener("click", async () => {
  if (document.querySelector("#location-input").validity.valid) {
    document.querySelector(".main-container").innerHTML = ``;

    //Changes display of loader to block
    const loadingScreen = document.querySelector(".loader");
    loadingScreen.style.display = "block";
    const locationInput = document.getElementById("location-input");

    //Promise (calling weather API)
    await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationInput.value}/?key=CGHZG6CC44V6TE576RG622928`
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        weatherInfoDisplay(response);
        loadingScreen.style.display = "none";
        document.querySelector(".validity-message").style.display = "none";
      })
      .catch((e) => {
        document.querySelector(".validity-message").textContent =
          "Location not found";
        document.querySelector(".validity-message").style.color = "red";
        loadingScreen.style.display = "none";
        console.error(e);
      });
  } else {
    console.error("Invalid input");
  }
});
