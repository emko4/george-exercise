import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchDollar, faSync } from '@fortawesome/free-solid-svg-icons'

import Button from '../Button';

import hocConnect from './hocConnect';
import hocScrollPosition from '../commonHOC/hocScrollPosition';

import { LOADER_TYPE } from '../../application/constants';

import './style.scss';

class ControlBar extends Component {

  onChangeSearch = (event) => {
    const { push } = this.props;

    const searchText = event.target.value || '';

    push(`#${searchText}`);
  };

  onReloadClick = () => {
    const { fetchFxData } = this.props;

    fetchFxData(true, LOADER_TYPE.OTHER);
  };

  render() {
    const { searchText, isLoading, scrollPosition, headerHeight } = this.props;

    return (
      <div
        className="ControlBar"
        style={{
          position: (scrollPosition >= headerHeight) ? 'fixed' : 'static',
        }}
      >
        <FontAwesomeIcon icon={faSearchDollar} />
        <input
          className="searchInput"
          value={searchText}
          onChange={this.onChangeSearch}
          placeholder="Type currency"
        />
        <Button
          icon={faSync}
          text="Reload"
          rotate={isLoading === LOADER_TYPE.OTHER}
          onClick={this.onReloadClick}
        />
      </div>
    );
  }
}

ControlBar.propTypes = {
  fetchFxData: PropTypes.func.isRequired,
  headerHeight: PropTypes.number.isRequired,
  isLoading: PropTypes.oneOf(Object.values(LOADER_TYPE)).isRequired,
  scrollPosition: PropTypes.number.isRequired,
  searchText: PropTypes.string.isRequired,
  push: PropTypes.func.isRequired,
};

export default hocScrollPosition(hocConnect(ControlBar));
