const API_KEY = '885df1b5232ec10e6c2b8b622fdbf9af';
const BASE_URL = "https://api.openweathermap.org/data/3.0/onecall";

async function fetchCoordinatesForCity(city) {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Geocoding request failed');
    }
    const data = await response.json();
    if (data.length === 0) {
      throw new Error('No location found');
    }
    return {
      lat: data[0].lat,
      lon: data[0].lon,
    };
  }

async function fetchWeatherForCoordinates(lat, lon) {
    const response = await fetch(`${BASE_URL}?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&appid=${API_KEY}&units=metric`);
    if (!response.ok) {
      throw new Error(`Weather data fetch failed: ${response.statusText}`);
    }
    return await response.json();
  }
  
  export { fetchCoordinatesForCity, fetchWeatherForCoordinates };