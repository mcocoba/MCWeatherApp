import React from 'react';

// eslint-disable-next-line max-len
import { ReactComponent as StrongRain } from '../../assets/img/source_icons_heavy-rain.svg';
import { ReactComponent as Wind } from '../../assets/img/source_icons_wind.svg';
import { ReactComponent as Sunlight } from '../../assets/img/source_icons_sun-light.svg';
import { ReactComponent as Droplet } from '../../assets/img/source_icons_droplet.svg';

import './styles.css';

type CardProps = {
  place: string;
};

const WeatherCard: React.FC<CardProps> = ({ place }) => (
  <>
    <section className="container">
      <div className="header">
        <span className="header--location">{place}</span>
        <span className="header--time">18:42</span>
      </div>
      <div className="icon">
        <StrongRain className="icon--svg" />
      </div>
      <div className="status">Strong Rain</div>
      <div className="detail--container">
        <div className="detail--wind">
          <Wind />
          11 km/h
        </div>
        <div className="detail--humidity">
          <Droplet />
          85%
        </div>
        <div className="detail--sunrise">
          <Sunlight />
          6:00am
        </div>
        <div className="detail--degrees">8°</div>
      </div>
    </section>
  </>
);

export default WeatherCard;
