//Creates icon
export function createIcon(data) {
  const icon = document.createElement("img");
  icon.className = "icon";
  if (data === "clear-day") {
    icon.src = "./icons/clear-day.svg";
  } else if (data === "clear-night") {
    icon.src = "./icons/clear-night.svg";
  } else if (data === "cloudy") {
    icon.src = "./icons/cloudy.svg";
  } else if (data === "fog") {
    icon.src = "./icons/fog.svg";
  } else if (data === "partly-cloudy-day") {
    icon.src = "./icons/partly-cloudy-day.svg";
  } else if (data === "partly-cloudy-night") {
    icon.src = "./icons/partly-cloudy-night.svg";
  } else if (data === "rain") {
    icon.src = "./icons/rain.svg";
  } else if (data === "snow") {
    icon.src = "./icons/snow.svg";
  } else if (data === "wind") {
    icon.src = "./icons/wind.svg";
  }

  return icon;
}
