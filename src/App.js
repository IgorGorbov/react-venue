import React from 'react';
import { Element } from 'react-scroll';
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueInfo from './components/venueInfo';
import Highlights from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';

import './resources/styles.css';

const App = () => (
  <div className="App" style={{ height: '1500px', backgroundColor: 'grey' }}>
    <Element name="Event starts in">
      <Header />
    </Element>
    <Featured />
    <Element name="Venue INFO">
      <VenueInfo />
    </Element>
    <Element name="Highlights">
      <Highlights />
    </Element>
    <Element name="Pricing">
      <Pricing />
    </Element>
    <Element name="Location">
      <Location />
    </Element>

    <Footer />
  </div>
);

export default App;
