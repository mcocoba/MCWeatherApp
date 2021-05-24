import React from 'react';
import WeatherGrid from './components/WeatherGrid';

// StyledComponent
import WeatherApp from './styles.js';

function App(): React.ReactElement {
  return (
    <WeatherApp>
      <WeatherGrid />
    </WeatherApp>
  );
}

export default App;
