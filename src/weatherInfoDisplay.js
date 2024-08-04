import { format } from "date-fns";

//Displays weather info
export function weatherInfoDisplay(apiData) {
  const mainContainer = document.querySelector(".main-container");
  mainContainer.innerHTML = ``;
  console.log(apiData);

  //Location title
  const locationTitle = document.createElement("h2");
  locationTitle.className = "location-title";
  locationTitle.textContent = apiData.resolvedAddress;

  //Current date and day
  let date = new Date(apiData.days[0].datetime) + "";
  const todayDate = date.split(" ").splice(0, 1).join();
  const currentDayDate = document.createElement('div');
  currentDayDate.className = 'current-day-date';
  currentDayDate.textContent=  todayDate + " " + new Date().toLocaleTimeString();

  //Current day conditions
  const currentDayConditions = document.createElement("div");
  currentDayConditions.className = "current-day-details";

  //Temperature
  const currentTemperature = document.createElement("h3");
  currentTemperature.className = "current-temp";
  currentTemperature.textContent = `${apiData.currentConditions.temp}°`;

  const currentFeelsLikeTemp = document.createElement("div");
  currentFeelsLikeTemp.className = 'current-feels-like-temp';
  currentFeelsLikeTemp.textContent = `Feels like ${apiData.currentConditions.feelslike}°`

  const currentHumidity = document.createElement("div");
  currentHumidity.className = "current-humidity";
  currentHumidity.textContent = `Humidity - ${apiData.currentConditions.humidity}%`;

  const currentCondition = document.createElement("p");
  currentCondition.className = "current-condition";
  currentCondition.textContent = apiData.currentConditions.conditions;

  currentDayConditions.append(
    currentTemperature,
    currentFeelsLikeTemp,
    currentCondition,
    currentHumidity
  );

  const weeklyDataGrid = document.createElement("div");
  weeklyDataGrid.className = "weekly-data-grid";

  mainContainer.append(locationTitle,currentDayDate, currentDayConditions, weeklyDataGrid);

  for (let i = 1; i <= 8; i++) {
    const card = document.createElement("div");
    card.className = "card";

    const humidityData = document.createElement("p");
    humidityData.className = "humanity-data";
    humidityData.textContent = `Humidity - ${apiData.days[i].humidity}%`;

    const tempFeelsLikeData = document.createElement("p");
    tempFeelsLikeData.className = "temp-feels-like-data";
    tempFeelsLikeData.textContent = `Feels like ${apiData.days[i].feelslike}°`;

    const tempData = document.createElement("h3");
    tempData.className = "temp-data";
    tempData.textContent = `${apiData.days[i].temp}°`;

    const dayDate = document.createElement("p");
    dayDate.className = "day-date";

    let date = new Date(apiData.days[i].datetime) + "";
    dayDate.textContent = `${date.split(" ").splice(0, 1).join()} ${format(
      date,
      "dd-MM-yyyy"
    )}`;

    card.append(tempData, tempFeelsLikeData, humidityData, dayDate);

    weeklyDataGrid.append(card);
  }
}
