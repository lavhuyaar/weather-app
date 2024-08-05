//Converts fahrenheit to celcius
export function fahrenheitToCelcius(value) {
  const celcius = ((value - 32) * 5) / 9;
  return Math.round(celcius * 10) / 10;
}
