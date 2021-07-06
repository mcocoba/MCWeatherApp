import React from 'react';

import './Styles.scss';

const Credits: React.FC = () => (
  <>
    <div className="footer">
      <span>
        Made with ❤️ by
        <a href="https://manuelcocoba.com" target="_blank" rel="noreferrer">
          Manuel Cocoba
        </a>
      </span>
      <span>
        Design by:
        <a
          href="https://dribbble.com/shots/14282395-UI-Weather-Widgets"
          target="_blank"
          rel="noreferrer"
        >
          Simon Lürwer
        </a>
      </span>
      <span>
        Icons by:
        <a
          href="https://basmilius.github.io/weather-icons/"
          target="_blank"
          rel="noreferrer"
        >
          Bas Milius
        </a>
      </span>
    </div>
  </>
);

export default Credits;
