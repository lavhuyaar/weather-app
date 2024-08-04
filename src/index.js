import "./style.css";
import { validityChecker } from "./validityChecker";

window.onload = () => {
  document.querySelector("#location-input").onchange = validityChecker;
};

const searchBtn = document.querySelector("#search-btn");
searchBtn.addEventListener("click", async () => {
  // div.style.display = 'block';
  // await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/raipur/?key=CGHZG6CC44V6TE576RG622928').then((response)=> {return response.json()}).then(response => {
  //     console.log(response)
  //     // div.style.display = 'none';
  // })

  console.log("clicked");
  validityChecker();
});

