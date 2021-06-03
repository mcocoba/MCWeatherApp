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
        <WeatherCard place="Los Angeles" />
        <WeatherCard place="Londres" />
        <WeatherCard place="Cairo" />
      </div>
    </section>
  </>
);

export default WeatherGrid;
