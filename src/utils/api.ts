import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_OPEN_WEATHER_URL,
  responseType: 'json',
});
