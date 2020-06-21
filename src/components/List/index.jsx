import React, { Component } from 'react';
import PropTypes from 'prop-types';

import hocConnect from './hocConnect';

import './style.scss';

// eslint-disable-next-line react/prefer-stateless-function
class List extends Component {
  render() {
    const { data } = this.props;
    const items = data.map(({ currency }) => (
      <div key={currency}>{currency}</div>
    ));

    return (
      <div className="List">
        { items }
      </div>
    );
  }
}

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    currency: PropTypes.string.isRequired,
  })).isRequired,
};

export default hocConnect(List);
