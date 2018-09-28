import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TicketIcon from '../../resources/images/icons/ticket.png';

const CustomButton = ({ text, backgroundColor, color, href }) => (
  <Button
    href={href}
    variant="contained"
    size="small"
    style={{ background: backgroundColor, color }}
  >
    <img src={TicketIcon} className="iconImage" alt="icon" />
    {text}
  </Button>
);

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default CustomButton;
