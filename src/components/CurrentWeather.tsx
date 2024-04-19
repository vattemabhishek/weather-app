import { WeatherApiResponse } from "../types/types";
interface Props {
  name: string;
  main: WeatherApiResponse["main"];
  weather: WeatherApiResponse["weather"];
  wind: WeatherApiResponse["wind"];
  clouds: { all: number };
}
const CurrentWeather = ({ name, main, weather, wind, clouds }: Props) => {
  const date = new Date();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <>
      <div className="grid">
        <div className="grid-item">
          <h3>Current weather</h3>
        </div>
        {/* {data ? ( */}
        <div className="box">
          <div className="city">
            <h3>{name}</h3>
            <h5>
              {date.getDate()} {months[date.getMonth()]}
            </h5>
          </div>
          <div className="temp">
            <h3> {Math.round(main.temp)} °c</h3>
            <h5>{weather[0].description} </h5>
          </div>
        </div>
      </div>
      <div className="grid">
        <div className="grid-item">
          <h3>Air Conditions</h3>
        </div>

        <div className="box">
          <div className="city">
            <p>Feels like</p>
            <p>{Math.round(main.feels_like)} °c</p>
          </div>
          <div className="temp">
            <p> Wind</p>
            <p>{wind.speed} m/s</p>
          </div>
          <div className="temp">
            <p> Clouds</p>
            <p>{clouds.all} %</p>
          </div>
          <div className="temp">
            <p> Humidity</p>
            <p>{main.humidity} %</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
