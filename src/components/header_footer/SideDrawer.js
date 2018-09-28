import React from 'react';
import PropTypes from 'prop-types';
import { scroller } from 'react-scroll';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = ({ open, onClose }) => {
  const scrollToElement = element => {
    scroller.scrollTo(element, {
      duration: 1400,
      delay: 70,
      smooth: true,
      offset: -140,
    });
    onClose();
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <List component="nav">
        <ListItem button onClick={() => scrollToElement('Event starts in')}>
          Event starts in
        </ListItem>
        <ListItem button onClick={() => scrollToElement('Venue INFO')}>
          Venue INFO
        </ListItem>
        <ListItem button onClick={() => scrollToElement('Highlights')}>
          Highlights
        </ListItem>
        <ListItem button onClick={() => scrollToElement('Pricing')}>
          Pricing
        </ListItem>
        <ListItem button onClick={() => scrollToElement('Location')}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

SideDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default SideDrawer;
