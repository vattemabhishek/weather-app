export interface ForecastApiResponse {
    cod: number;
    message: number;
    cnt: number;
    list: {
      dt: number;
      main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        sea_level: number;
        grnd_level: number;
        humidity: number;
        temp_kf: number;
      };
      weather: [
        {
          id: number;
          main: string;
          description: string;
          icon: string;
        }
      ];
      clouds: {
        all: number;
      };
      wind: {
        speed: number;
        deg: number;
        gust: number;
      };
      visibility: number;
      pop: number;
      sys: {
        pod: string;
      };
      dt_txt: string;
    }[]
}
export interface WeatherApiResponse {
    coord: { lon: number; lat: number };
    weather: { id: number; main: string; description: string; icon: string }[];
    base: String;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
      sea_level: number;
      grnd_level: number;
    };
    visiblity: number;
    wind: { speed: number; deg: number; gust: number };
    clouds: {
      all: number;
    };
    dt: number;
    sys: {
      country: string;
      sunrise: number;
      sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
  }
  export type CityApiResponse =
    
      
          {
              id: number;
              wikiDataId: string;
              type: string,
              city:string,
              name:string,
              country: string,
              countryCode:string,
              region:string,
              regionCode: number,
              regionWdId: string,
              latitude: number,
              longitude: number,
              population: number
          }[]
          
  
    
  