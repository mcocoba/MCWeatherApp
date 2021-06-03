/* eslint-disable max-len */
import React, { useEffect, useState, useCallback } from 'react';
import { AxiosError, AxiosResponse } from 'axios';
import { DateTime } from 'luxon';

import './Styles.scss';
// import { ReactComponent as StrongRain } from '../../assets/img/weather/rain.svg';
import { ReactComponent as Wind } from '../../assets/img/weather/wind.svg';
import { ReactComponent as Humidity } from '../../assets/img/weather/humidity.svg';
import { ReactComponent as Sunrise } from '../../assets/img/weather/sunrise.svg';

import Button from '../commons/Button';
import IconSelector from '../commons/IconSelector';

import t from '../../utils/api';

import { OpenWeatherDTO } from '../../utils/types';

type CardProps = {
  place: string;
};

const WeatherCard: React.FC<CardProps> = ({ place }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [weather, setWeather] = useState<OpenWeatherDTO>();

  const fetchWeatherData = useCallback(() => {
    t.get<OpenWeatherDTO>(
      `weather?q=${place}&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`,
    )
      .then((res: AxiosResponse<OpenWeatherDTO>) => {
        setWeather(res.data);
        setIsLoading(false);
      })
      .catch((error: AxiosError) => {
        // console.log(error);
      });
  }, [place]);

  useEffect(() => {
    fetchWeatherData();
  }, [fetchWeatherData]);

  return (
    <>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <section className="container">
          <div className="header">
            <span className="header--location">
              <Button text={weather?.name} />
            </span>
            <span className="header--time">
              {`${DateTime.fromSeconds(weather?.dt as number).toFormat(
                'HH:MM',
              )}`}
            </span>
          </div>
          <div className="icon">
            <IconSelector icon={weather?.weather[0].icon} />
          </div>
          <div className="status">{weather?.weather[0].main}</div>
          <div className="detail--container">
            <div className="detail--wind">
              <Wind className="detail--icon" />
              <span>11 km/h</span>
            </div>
            <div className="detail--humidity">
              <Humidity className="detail--icon" />
              <span>{`${weather?.main.humidity} %`}</span>
            </div>
            <div className="detail--sunrise">
              <Sunrise className="detail--icon icon" />
              <span>6:00 am</span>
            </div>
            <div className="detail--degrees">
              {`${Math.round(weather?.main.temp as number)}°`}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default WeatherCard;
