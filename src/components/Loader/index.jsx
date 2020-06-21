import React from 'react';
import PropTypes from 'prop-types';

import loader from '../../assets/loader.svg';

import './style.scss';

const Loader = (props) => {
  const { show } = props;

  if (!show) return null;

  return (
    <div className="Loader">
      <img src={loader} alt="Loading..." />
    </div>
  );
};

Loader.propTypes = {
  show: PropTypes.bool,
};

Loader.defaultProps = {
  show: false,
};

export default Loader;
