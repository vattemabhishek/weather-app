interface WeeklyForecastProps {
  temp: number;
  clouds: number;
  time: Date;
  speed: number;
}
const WeeklyForecast = ({ temp, clouds, time, speed }: WeeklyForecastProps) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <div className="box1">
      <h4 className="day">{days[time.getDay()]}</h4>

      <div className="temp1">
        <h3>{temp}°c</h3>
      </div>
      <div className="temp1">
        <h3> {clouds}%</h3>
      </div>
      <div className="temp1">
        <h3>{speed}m/s</h3>
      </div>
    </div>
  );
};

export default WeeklyForecast;
