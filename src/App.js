import React from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueInfo from './components/venueInfo';
import Highlights from './components/highlights';

const App = () => (
  <div className="App" style={{ height: '1500px', backgroundColor: 'grey' }}>
    <Header />
    <Featured />
    <VenueInfo />
    <Highlights />
  </div>
);

export default App;
