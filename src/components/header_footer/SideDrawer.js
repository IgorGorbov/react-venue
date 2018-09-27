import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = ({ open, onClose }) => (
  <Drawer anchor="right" open={open} onClose={onClose}>
    <List component="nav">
      <ListItem button onClick={() => console.log('Event starts in')}>
        Event starts in
      </ListItem>
      <ListItem button onClick={() => console.log('Venue INFO')}>
        Venue INFO
      </ListItem>
      <ListItem button onClick={() => console.log('Highlights')}>
        Highlights
      </ListItem>
      <ListItem button onClick={() => console.log('Location')}>
        Location
      </ListItem>
    </List>
  </Drawer>
);

SideDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default SideDrawer;
