import React, { Component } from 'react';
import PropTypes from 'prop-types';

import hocConnect from './hocConnect';

import './style.scss';

class SearchBar extends Component {

  onChangeSearch = (event) => {
    const { push } = this.props;

    const searchText = event.target.value || '';

    push(`#${searchText}`);
  };

  render() {
    const { searchText } = this.props;

    return (
      <div className="SearchBar">
        <div>Search</div>
        <input
          value={searchText}
          onChange={this.onChangeSearch}
          placeholder="Type currency"
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  push: PropTypes.func.isRequired,
};

export default hocConnect(SearchBar);
