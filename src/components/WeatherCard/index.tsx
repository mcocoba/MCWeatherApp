import React from 'react';

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
      <div className="icon">R</div>
      <div className="status">Strong Rain</div>
      <div className="detail--container">
        <div className="detail--wind">11 km/h</div>
        <div className="detail--humidity">85%</div>
        <div className="detail--sunrise">6:00am</div>
        <div className="detail--degrees">8°</div>
      </div>
    </section>
  </>
);

export default WeatherCard;
