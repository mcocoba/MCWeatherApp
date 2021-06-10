/* eslint-disable max-len */
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import './Styles.scss';

const WeatherSkeletonCard: React.FC = () => (
  <>
    <SkeletonTheme color="#202020" highlightColor="#444">
      <section className="container">
        <div className="header">
          <span className="header--location">
            <Skeleton duration={2} height={30} width={130} />
          </span>
          <span className="header--time">
            <Skeleton duration={2} height={30} width={65} />
          </span>
        </div>
        <div className="icon">
          <Skeleton duration={2} circle height={140} width={140} />
        </div>
        <div className="status">
          <Skeleton duration={2} height={30} width={100} />
        </div>
        <div className="detail--container">
          <Skeleton duration={2} height={30} width={100} />
          <Skeleton duration={2} height={30} width={100} />
          <Skeleton duration={2} height={30} width={100} />

          <div className="detail--degrees__skeleton">
            <Skeleton duration={2} height={98} width={120} />
          </div>
        </div>
      </section>
    </SkeletonTheme>
  </>
);

export default WeatherSkeletonCard;
