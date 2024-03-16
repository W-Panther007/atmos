import React from 'react';
import '../styles/info.css';
import Widgets from '../Widgets/Widget.jsx';

function Info() {
  const cityName = "London";

  return (
    <>
      <h1>WIDGETS</h1>
      <Widgets city={cityName} />
    </>
  );
}

export default Info;
