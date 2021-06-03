/* eslint-disable max-len */
import React, { useEffect, useState, useCallback } from 'react';

import Button from '../commons/Button';

import { ReactComponent as StrongRain } from '../../assets/img/weather/rain.svg';
import { ReactComponent as Wind } from '../../assets/img/weather/wind.svg';
import { ReactComponent as Humidity } from '../../assets/img/weather/humidity.svg';
import { ReactComponent as Sunrise } from '../../assets/img/weather/sunrise.svg';

import './Styles.scss';

import t from '../../utils/api';

import { OpenWeatherDTO } from '../../utils/types';

type CardProps = {
  place: string;
};

const WeatherCard: React.FC<CardProps> = ({ place }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [weather, setWeather] = useState<OpenWeatherDTO>([]);

  const fetchWeatherData = useCallback(() => {
    t.get(`weather?q=${place}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`)
      .then((res) => {
        console.log(res.data);
        setWeather(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  }, [place]);

  useEffect(() => {
    fetchWeatherData();
  }, [fetchWeatherData]);

  return (
    <>
      <section className="container">
        <div className="header">
          <span className="header--location">
            <Button text={weather.name} />
          </span>
          <span className="header--time">18:42</span>
        </div>
        <div className="icon">
          <StrongRain className="icon--svg" />
        </div>
        <div className="status">Strong Rain</div>
        <div className="detail--container">
          <div className="detail--wind">
            <Wind className="detail--icon" />
            <span>11 km/h</span>
          </div>
          <div className="detail--humidity">
            <Humidity className="detail--icon" />
            <span>85%</span>
          </div>
          <div className="detail--sunrise">
            <Sunrise className="detail--icon icon" />
            <span>6:00am</span>
          </div>
          <div className="detail--degrees">8°</div>
        </div>
      </section>
    </>
  );
};

export default WeatherCard;
