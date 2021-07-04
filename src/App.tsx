import React, { lazy, Suspense } from 'react';
import WeatherSkeletonCard from './components/WeatherCard/WeatherSkeletonCard';

const WeatherGrid = lazy(() => import('./components/WeatherGrid'));

function App(): React.ReactElement {
  return (
    <Suspense fallback={<WeatherSkeletonCard />}>
      <WeatherGrid />
    </Suspense>
  );
}

export default App;
