import React, { lazy, Suspense } from 'react';
import WeatherSkeletonCard from './components/WeatherCard/WeatherSkeletonCard';

const WeatherGrid = lazy(() => import('./components/WeatherGrid'));
const Credits = lazy(() => import('./components/Credits'));

function App(): React.ReactElement {
  return (
    <Suspense fallback={<WeatherSkeletonCard />}>
      <WeatherGrid />
      <Credits />
    </Suspense>
  );
}

export default App;
