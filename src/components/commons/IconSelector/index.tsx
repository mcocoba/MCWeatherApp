/* eslint-disable max-len */
import React from 'react';

import './Styles.scss';

import { ReactComponent as NA } from '../../../assets/img/weather/not-available.svg';
import { ReactComponent as Rain } from '../../../assets/img/weather/rain.svg';
import { ReactComponent as Cloudy } from '../../../assets/img/weather/cloudy.svg';
import { ReactComponent as ClearDay } from '../../../assets/img/weather/clear-day.svg';
import { ReactComponent as ClearNight } from '../../../assets/img/weather/clear-night.svg';
import { ReactComponent as FewCloudsDay } from '../../../assets/img/weather/partly-cloudy-day.svg';
import { ReactComponent as FewCloudsNight } from '../../../assets/img/weather/partly-cloudy-night.svg';
import { ReactComponent as OvercastDay } from '../../../assets/img/weather/overcast-day.svg';
import { ReactComponent as OvercastNight } from '../../../assets/img/weather/overcast-night.svg';

import { ReactComponent as LightRainDay } from '../../../assets/img/weather/partly-cloudy-day-drizzle.svg';
import { ReactComponent as LightRainNight } from '../../../assets/img/weather/partly-cloudy-night-drizzle.svg';

import { ReactComponent as ThunderstormsDay } from '../../../assets/img/weather/thunderstorms-day.svg';
import { ReactComponent as ThunderstormsNight } from '../../../assets/img/weather/thunderstorms-night.svg';

import { ReactComponent as Haze } from '../../../assets/img/weather/haze.svg';

type ButtonProps = {
  icon?: string | undefined;
};

const IconSelector: React.FC<ButtonProps> = ({ icon }) => {
  const handleIcon: any = () => {
    switch (icon) {
      case '01d':
        return <ClearDay className="detail--icon" />;
        break;
      case '01n':
        return <ClearNight className="detail--icon" />;
        break;
      case '02d':
        return <FewCloudsDay className="detail--icon" />;
        break;
      case '02n':
        return <FewCloudsNight className="detail--icon" />;
        break;
      case '03d':
        return <Cloudy className="detail--icon" />;
        break;
      case '03n':
        return <Cloudy className="detail--icon" />;
        break;
      case '04d':
        return <OvercastDay className="detail--icon" />;
        break;
      case '04n':
        return <OvercastNight className="detail--icon" />;
        break;
      case '09d':
        return <LightRainDay className="detail--icon" />;
        break;
      case '09n':
        return <LightRainNight className="detail--icon" />;
        break;
      case '10d':
        return <Rain className="detail--icon" />;
        break;
      case '10n':
        return <Rain className="detail--icon" />;
        break;
      case '11d':
        return <ThunderstormsDay className="detail--icon" />;
        break;
      case '11n':
        return <ThunderstormsNight className="detail--icon" />;
        break;
      case '12n':
        return <Rain className="detail--icon" />;
        break;
      case '50d':
        return <Haze className="detail--icon" />;
        break;
      case '50n':
        return <Haze className="detail--icon" />;
        break;

      default:
        return <NA className="detail--icon" />;
    }
  };

  return <>{handleIcon()}</>;
};

export default IconSelector;
