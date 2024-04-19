export interface ForecastProps {
  temp: number;
  clouds: number;
  time: Date;
}
const ForecastGridItem = ({ temp, clouds, time }: ForecastProps) => {
  return (
    <div className="grid">
      <div className="city">
        <h3>{temp} °c</h3>
      </div>
      <div className="temp">
        <p>Rain {clouds}%</p>
      </div>
      <div className="temp">
        <h3>
          {time.getHours()}:{time.getMinutes()}
        </h3>
      </div>
    </div>
  );
};

export default ForecastGridItem;
