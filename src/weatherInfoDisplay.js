import { createIcon } from "./createIcon";
import { fahrenheitToCelcius } from "./fahrenheitToCelcius";

//Displays weather info
export function weatherInfoDisplay(apiData) {
  const mainContainer = document.querySelector(".main-container");
  mainContainer.innerHTML = ``;
  console.log(apiData);

  //Location title
  const locationTitle = document.createElement("h2");
  locationTitle.className = "location-title";
  locationTitle.textContent = apiData.resolvedAddress;

  //Current date, day and time
  let date = new Date(apiData.days[0].datetime) + "";
  const currentDayDate = document.createElement("div");
  currentDayDate.className = "current-day-date";
  currentDayDate.textContent = `${date.split(" ").splice(0, 1).join()}, ${date
    .split(" ")
    .splice(1, 2)
    .join(" ")} ${new Date().toLocaleTimeString()}`;

  //Current day conditions
  const currentDayConditions = document.createElement("div");
  currentDayConditions.className = "current-day-details";

  //Current day icon
  const currentIcon = createIcon(apiData.currentConditions.icon);
  currentIcon.className = "current-icon";

  //Current Temperature
  const currentTemperature = document.createElement("h3");
  currentTemperature.className = "current-temp";
  currentTemperature.textContent = `${fahrenheitToCelcius(
    apiData.currentConditions.temp
  )}° C`;

  //Current feels like temperature
  const currentFeelsLikeTemp = document.createElement("div");
  currentFeelsLikeTemp.className = "current-feels-like-temp";
  currentFeelsLikeTemp.textContent = `Feels like ${fahrenheitToCelcius(
    apiData.currentConditions.feelslike
  )}° C`;

  //Current humidity
  const currentHumidity = document.createElement("div");
  currentHumidity.className = "current-humidity";
  currentHumidity.textContent = `${apiData.currentConditions.humidity}% humidity`;

  //Current condition
  const currentCondition = document.createElement("div");
  currentCondition.className = "current-condition";
  currentCondition.textContent = apiData.currentConditions.conditions;

  //Current min-max temperature
  const currentMinMaxTemp = document.createElement("p");
  currentMinMaxTemp.className = "current-min-max-temp";
  currentMinMaxTemp.textContent = `${fahrenheitToCelcius(
    apiData.days[0].tempmin
  )}° C / ${fahrenheitToCelcius(apiData.days[0].tempmax)}° C (min/max)`;

  currentDayConditions.append(
    currentIcon,
    currentTemperature,
    currentFeelsLikeTemp,
    currentCondition,
    currentHumidity,
    currentMinMaxTemp
  );

  //Grid of cards
  const weeklyDataGrid = document.createElement("div");
  weeklyDataGrid.className = "weekly-data-grid";

  mainContainer.append(
    locationTitle,
    currentDayDate,
    currentDayConditions,
    weeklyDataGrid
  );

  //Loop that create cards
  for (let i = 1; i <= 10; i++) {
    const card = document.createElement("div");
    card.className = "card";

    //Humidity
    const humidityData = document.createElement("p");
    humidityData.className = "humanity-data";
    humidityData.textContent = `${apiData.days[i].humidity}% humidity`;

    //Feels like temperature
    const tempFeelsLikeData = document.createElement("p");
    tempFeelsLikeData.className = "temp-feels-like-data";
    tempFeelsLikeData.textContent = `Feels like ${fahrenheitToCelcius(
      apiData.days[i].feelslike
    )}° C`;

    //Temperature
    const tempData = document.createElement("h3");
    tempData.className = "temp-data";
    tempData.textContent = `${fahrenheitToCelcius(apiData.days[i].temp)}° C`;

    //Day and date
    const dayDate = document.createElement("p");
    dayDate.className = "day-date";
    let date = new Date(apiData.days[i].datetime) + "";
    dayDate.textContent = `${date.split(" ").splice(0, 1).join()}, ${date
      .split(" ")
      .splice(1, 2)
      .join(" ")}`;

    card.append(
      dayDate,
      tempData,
      createIcon(apiData.days[i].icon),
      tempFeelsLikeData,
      humidityData
    );

    weeklyDataGrid.append(card);
  }
}
