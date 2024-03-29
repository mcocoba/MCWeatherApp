/* eslint-disable max-len */
import React, { useEffect, useState, useCallback } from 'react';
import { AxiosResponse } from 'axios';
import { DateTime } from 'luxon';

import './Styles.scss';

import { ReactComponent as Wind } from '../../assets/img/weather/wind.svg';
import { ReactComponent as Humidity } from '../../assets/img/weather/humidity.svg';
import { ReactComponent as Sunrise } from '../../assets/img/weather/sunrise.svg';

import Button from '../commons/Button';
import IconSelector from '../commons/IconSelector';

import t from '../../utils/api';

import { OpenWeatherDTO } from '../../utils/types';
import WeatherSkeletonCard from './WeatherSkeletonCard';

type CardProps = {
  place: string;
};

const WeatherCard: React.FC<CardProps> = ({ place }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [weather, setWeather] = useState<OpenWeatherDTO>();
  const [localTime, setLocalTime] = useState<string>('00:00');
  const [sunrise, setSunrise] = useState<string>('00:00');

  const fetchWeatherData = useCallback(() => {
    t.get<OpenWeatherDTO>(
      `weather?q=${place}&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`,
    ).then((res: AxiosResponse<OpenWeatherDTO>) => {
      setWeather(res.data);
      setIsLoading(false);
    });
  }, [place]);

  useEffect(() => {
    setTimeout(() => {
      fetchWeatherData();
    }, 1000);
    setInterval(() => {
      fetchWeatherData();
    }, process.env.REACT_APP_FETCH_WEATHER_INTERVAL_MILLIS as unknown as number);
  }, [fetchWeatherData]);

  useEffect(() => {
    const sysTime = weather?.dt as number;
    const sunTime = weather?.sys.sunrise as number;
    if (sysTime) {
      const lastMeasureTime = DateTime.fromSeconds(sysTime).toFormat('HH:mm');
      const sunriseTime = DateTime.fromSeconds(sunTime).toFormat('HH:mm');
      setLocalTime(lastMeasureTime);
      setSunrise(sunriseTime);
    }
  }, [weather]);

  return (
    <>
      {isLoading ? (
        <WeatherSkeletonCard />
      ) : (
        <section className="container">
          <div className="header">
            <span className="header--location">
              <Button text={weather?.name} />
            </span>
            <span className="header--time">{`${localTime}`}</span>
          </div>
          <div className="icon">
            <IconSelector icon={weather?.weather[0].icon} />
          </div>
          <div className="status">{weather?.weather[0].description}</div>
          <div className="detail--container">
            <div className="detail--wind">
              <Wind className="detail--icon" />
              <span>
                {`${Math.round(weather?.wind.speed as number)} mts/h`}
              </span>
            </div>
            <div className="detail--humidity">
              <Humidity className="detail--icon" />
              <span>{`${weather?.main.humidity} %`}</span>
            </div>
            <div className="detail--sunrise">
              <Sunrise className="detail--icon icon" />
              <span>{`${sunrise}`}</span>
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
