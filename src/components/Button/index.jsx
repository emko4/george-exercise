import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './style.scss';

const Button = (props) => {
  const { icon, text, rotate, onClick } = props;

  return (
    <div
      className={`Button ${rotate ? 'rotate' : ''}`}
      type="button"
      role="button"
      tabIndex="0"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} />
      <div className="text">{ text }</div>
    </div>
  );
};

Button.propTypes = {
  icon: PropTypes.shape({
    prefix: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    icon: PropTypes.array.isRequired,
  }).isRequired,
  onClick: PropTypes.func,
  rotate: PropTypes.bool,
  text: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  rotate: false,
  text: '',
};

export default Button;

