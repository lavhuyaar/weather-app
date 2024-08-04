import "./style.css";
import { validityChecker } from "./validityChecker";
import { weatherInfoDisplay } from "./weatherInfoDisplay";

window.onload = () => {
  document.querySelector("#location-input").onchange = validityChecker;
};

const searchBtn = document.querySelector("#search-btn");
searchBtn.addEventListener("click", async () => {
  // div.style.display = 'block';
  const locationInput = document.getElementById('location-input');
  await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationInput.value}/?key=CGHZG6CC44V6TE576RG622928`).then((response)=> {return response.json()}).then(response => {
      weatherInfoDisplay(response);
      // div.style.display = 'none';
  })

  console.log("clicked");
});

