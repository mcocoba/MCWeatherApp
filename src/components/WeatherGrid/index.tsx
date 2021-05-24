import React from 'react';
import WeatherCard from '../WeatherCard';

import './styles.css';

const WeatherGrid: React.FC = () => (
  <>
    <section className="grid--container">
      <WeatherCard place="hermosillo" />
      <WeatherCard place="Münster" />
      <WeatherCard place="cdmx" />
      <WeatherCard place="londres" />
      <WeatherCard place="berlin" />
      <WeatherCard place="cairo" />
    </section>
  </>
);

export default WeatherGrid;
