import { useState } from "react";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import ForecastGridItem from "./components/ForecastGrid";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";
import { WeatherApiResponse } from "./types/types";
import { ForecastApiResponse } from "./types/types";
import axios from "axios";
import { cities } from "./Constants";
import WeeklyForecast from "./components/WeeklyForecast";

function App() {
  const [data, setData] = useState<WeatherApiResponse | null>(null);
  const [forecast, setForecast] = useState<ForecastApiResponse | null>(null);

  const currentDate = new Date().getDate();
  const filteredItems =
    forecast?.list.filter(
      (item) => new Date(item.dt * 1000).getDate() === currentDate
    ) || [];

  const weekFilteredItems =
    forecast?.list.filter(
      (item) =>
        new Date(item.dt * 1000).getDate() > currentDate &&
        new Date(item.dt * 1000).getHours() < 3
    ) || [];

  console.log(new Date(1713538955 * 1000).getHours());
  console.log(weekFilteredItems);

  const onSelectCity = (val: string) => {
    const selectedCity = cities.find((city) => {
      console.log(city.city, val);
      return city.city.toLowerCase() === val.toLowerCase();
    });
    if (selectedCity) {
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${selectedCity.latitude}&lon=${selectedCity.longitude}&appid=b0011235ef5bece1b52b26b323021eb9&units=metric`;
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${selectedCity.latitude}&lon=${selectedCity.longitude}&appid=b0011235ef5bece1b52b26b323021eb9&units=metric`;
      axios.get(weatherUrl).then((response) => setData(response.data));
      axios.get(forecastUrl).then((response) => setForecast(response.data));
    }
  };
  return (
    <div className="body">
      <Navbar />
      <SearchBox onSelectCity={onSelectCity} />
      {data ? (
        <>
          <CurrentWeather
            name={data.name}
            main={data.main}
            weather={data.weather}
            wind={data.wind}
            clouds={data.clouds}
          />

          <div className="grid-item">
            <h3>Today's Forecast</h3>
          </div>
          {filteredItems.map((item) => (
            <ForecastGridItem
              key={item.dt}
              temp={item.main.temp}
              clouds={item.clouds.all}
              time={new Date(item.dt * 1000)}
            />
          ))}
          <div className="ribbon">
            <h3>Weekly Forecast</h3>
          </div>
          {weekFilteredItems.map((data) => (
            <WeeklyForecast
              key={data.dt}
              temp={data.main.temp}
              clouds={data.clouds.all}
              time={new Date(data.dt * 1000)}
              speed={data.wind.speed}
            />
          ))}
        </>
      ) : null}
    </div>
  );
}

export default App;
