import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Carousel from './Carousel';

const Featured = () => (
  <div className={{ position: 'relative' }}>
    <div className="artist_name">
      <div className="wrapper">Ariana Grande</div>
    </div>
    <Carousel />
  </div>
);

Featured.propTypes = {};

export default Featured;
