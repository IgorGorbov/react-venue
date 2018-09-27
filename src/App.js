import React from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured';

const App = () => (
  <div className="App" style={{ height: '1500px', backgroundColor: 'grey' }}>
    <Header />
    <Featured />
  </div>
);

export default App;
