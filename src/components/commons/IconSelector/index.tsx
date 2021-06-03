/* eslint-disable max-len */
import React from 'react';

// import './Styles.scss';
import { ReactComponent as StrongRain } from '../../../assets/img/weather/rain.svg';
import { ReactComponent as ClearDay } from '../../../assets/img/weather/clear-day.svg';
import { ReactComponent as ClearNight } from '../../../assets/img/weather/clear-night.svg';
import { ReactComponent as Cloudy } from '../../../assets/img/weather/cloudy.svg';

type ButtonProps = {
  icon?: string;
};

const IconSelector: React.FC<ButtonProps> = ({ icon }) => {
  const handleIcon: any = () => {
    switch (icon) {
      case '01d':
        return <ClearDay />;
        break;
      case '01n':
        return <ClearNight />;
        break;
      case '02n':
        return <Cloudy />;
        break;
      default:
        return <StrongRain />;
    }
  };

  return <>{handleIcon()}</>;
};

export default IconSelector;
