import React from 'react';
import WeatherCard from '../WeatherCard';

import './Styles.scss';

const WeatherGrid: React.FC = () => (
  <>
    <section className="grid--container">
      <div className="stack--main">
        <WeatherCard place="Hermosillo" />
        <WeatherCard place="Tijuana" />
      </div>
      <div className="stack--secondary">
        <WeatherCard place="Shanghai" />
        <WeatherCard place="Londres" />
        <WeatherCard place="Hofn" />
      </div>
    </section>
  </>
);

export default WeatherGrid;
