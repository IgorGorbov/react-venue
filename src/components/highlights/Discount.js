import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Button from '../utils/Button';

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30,
  };

  componentDidUpdate() {
    setTimeout(() => this.percentage(), 30);
  }

  percentage = () => {
    const { discountStart, discountEnd } = this.state;
    if (discountStart < discountEnd) {
      this.setState({
        discountStart: discountStart + 1,
      });
    }
  };

  render() {
    const { discountStart } = this.state;
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.percentage()}>
            <div className="discount_percentage">
              <span>{discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>

          <div className="discount_description">
            <h3>Purchase tickets before 20th June</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              explicabo minima ut! Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Eaque maxime repudiandae veritatis.
            </p>

            <Button
              text="Purchase tickets"
              backgroundColor="#ffa800"
              color="#fff"
              href="http://google.com"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Discount;
