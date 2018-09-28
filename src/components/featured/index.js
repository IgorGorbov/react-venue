import React from 'react';

import TimeUntil from './TimeUntil';
import Carousel from './Carousel';

const Featured = () => (
  <div className={{ position: 'relative' }}>
    <div className="artist_name">
      <div className="wrapper">Ariana Grande</div>
    </div>
    <Carousel />
    <TimeUntil />
  </div>
);

export default Featured;
