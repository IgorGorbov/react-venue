import React from 'react';
import Zoom from 'react-reveal/Zoom';

import iconCalendar from '../../resources/images/icons/calendar.png';
import iconLocation from '../../resources/images/icons/location.png';

const VenueNfo = () => (
  <div className="bck_black">
    <div className="center_wrapper">
      <div className="vn_wrapper">
        <Zoom duration={500}>
          <div className="vn_item">
            <div className="vn_outer">
              <div className="vn_inner">
                <div className="vn_icon_square bck_red" />
                <div
                  className="vn_icon"
                  style={{
                    background: `url(${iconCalendar})`,
                  }}
                />
                <div className="vn_title">Event Date & Time</div>
                <div className="vn_desc">16 December 2018 @10.00 pm</div>
              </div>
            </div>
          </div>
        </Zoom>

        <Zoom duration={500} delay={500}>
          <div className="vn_item">
            <div className="vn_outer">
              <div className="vn_inner">
                <div className="vn_icon_square bck_yellow" />
                <div
                  className="vn_icon"
                  style={{
                    background: `url(${iconLocation})`,
                  }}
                />
                <div className="vn_title">Event Location</div>
                <div className="vn_desc">345 Speer Street Oakland, CA 9835</div>
              </div>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  </div>
);

export default VenueNfo;