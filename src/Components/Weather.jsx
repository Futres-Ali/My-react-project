import { useState, useEffect } from "react";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setloading] = useState(true);
  const [selectedCity, setSelectedCity] = useState("Lahore");
  const [searchInput, setsearchInput] = useState("");

  const cities = {
    Lahore: { lat: 31.5204, lon: 74.3587 },
    Karachi: { lat: 24.8607, lon: 67.0011 },
    Islamabad: { lat: 33.6844, lon: 73.0479 },
    Rawalpindi: { lat: 33.5651, lon: 73.1896 },
    Multan: { lat: 30.1575, lon: 71.4454 },
    Faisalabad: { lat: 31.418, lon: 72.3457 },
    Peshawar: { lat: 34.0151, lon: 71.5249 },
    Quetta: { lat: 30.1798, lon: 66.975 },
    Hyderabad: { lat: 25.396, lon: 68.4062 },
    Gujranwala: { lat: 32.1814, lon: 74.1856 },
  };

  const getWeatherIconCode = (code) => {
    if (code === 0) return "☀️";
    if (code >= 1 && code <= 3) return "⛅";
    if (code >= 45 && code <= 48) return "🌫️";
    if (code >= 51 && code <= 57) return "🌧️";
    if (code >= 61 && code <= 67) return "🌧️";
    if (code >= 71 && code <= 77) return "❄️";
    if (code >= 80 && code <= 82) return "🌦️";
    if (code >= 85 && code <= 86) return "🌨️";
    if (code >= 95 && code <= 99) return "⛈️";

    return "❓";
  };

  const fetchWeather = async (cityName) => {
    try {
      setloading(true);
      setError(false);
      let city = cities[cityName];
      console.log(city);

      if (!city) {
        setloading("City not Found");
        setError(false);
        return;
      }

      let apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current=temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m,precipitation,is_day`;

      console.log(`Loading data from ${apiUrl}`);

      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      let data = await response.json;

      setWeather(data);
      setSelectedCity(city);
    } catch (error) {
      console.error("Error fetching weather:", error);
      setError(true);
    } finally {
      console.log("Weather API request completed");
      setloading(false);
    }
  };

  useEffect(() => {
    fetchWeather("Lahore");
  }, []);
  const handleCityChange = (e) => {
    const city = e.target.value;
    fetchWeather(city);
  };
  const handleSearch = (e) => {
    e.preventdefault();
    if (searchInput.trim() === "") {
      setError("city cannot be empty");
    }
  };
  if (cities[searchInput]) {
    fetchWeather(searchInput);
    searchInput("");
  } else {
    setError(`Error : city not found. Enter Lahore, Karachi or any other City`);
  }
  
}
