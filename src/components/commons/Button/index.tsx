import React from 'react';

import './Styles.scss';

type ButtonProps = {
  text: string;
};

const Button: React.FC<ButtonProps> = ({ text }) => (
  <>
    <section className="container--btn">
      <span>{text}</span>
    </section>
  </>
);

export default Button;
