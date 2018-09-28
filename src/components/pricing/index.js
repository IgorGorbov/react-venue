import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import Button from '../utils/Button';

class Pricing extends Component {
  state = {
    countBoxes: 3,
    prices: [100, 150, 250],
    positions: ['Balcony', 'Medium', 'Start'],
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque cum dolores harum modi tenetur.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque cum dolores harum modi tenetur.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque cum dolores harum modi tenetur.',
    ],
    links: ['http://google.com', 'http://google.com', 'http://google.com'],
    delay: [500, 0, 500],
  };

  showBoxes = () => {
    const {
      countBoxes,
      prices,
      positions,
      description,
      links,
      delay,
    } = this.state;
    const boxes = [];
    for (let i = 0; i < countBoxes; i += 1) {
      boxes.push(
        <Zoom key={prices[i]} delay={delay[i]}>
          <div className="pricing_item">
            <div className="pricing_inner_wrapper">
              <div className="pricing_title">
                <span>$ {prices[i]}</span>
                <span>$ {positions[i]}</span>
              </div>
              <div className="pricing_description">{description[i]}</div>
              <div className="pricing_buttons">
                <Button
                  text="Purchase"
                  backgroundColor="#ffa800"
                  color="#fff"
                  href={links[i]}
                />
              </div>
            </div>
          </div>
          ,
        </Zoom>,
      );
    }
    return boxes;
  };

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
