/* eslint-disable camelcase */
export interface WeatherClouds {
  all: number;
}

export interface WeatherCoord {
  lon: number;
  lat: number;
}

export interface WeatherMain {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface WeatherSys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface WeatherData {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface WeatherWind {
  deg: number;
  speed: number;
}

export interface OpenWeatherDTO {
  base: string;
  clouds: WeatherClouds;
  cod: number;
  coord: WeatherCoord;
  dt: number;
  id: number;
  name: string;
  main: WeatherMain;
  sys: WeatherSys;
  timezone: number;
  visibility: number;
  weather: WeatherData[];
  wind: WeatherWind;
}
