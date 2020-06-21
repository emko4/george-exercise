import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Switch  from 'react-switch';
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

  onSwitchClick = (value) => {
    const { setUseRequest } = this.props;

    setUseRequest(value);
  };

  onReloadClick = () => {
    const { fetchFxData } = this.props;

    fetchFxData(true, LOADER_TYPE.OTHER);
  };

  render() {
    const { searchText, isLoading, scrollPosition, headerHeight, useRequest } = this.props;

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
        <div className="useRequest">
          <Switch
            checked={useRequest}
            onChange={this.onSwitchClick}
            width={80}
            height={24}
            onColor="#0e6eb8"
            checkedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  paddingLeft: "30px",
                }}
              >
                API
              </div>
            }
            uncheckedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  paddingRight: "27px",
                }}
              >
                JSON
              </div>
            }
          />
        </div>
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
  setUseRequest: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
  useRequest: PropTypes.bool.isRequired,
};

export default hocScrollPosition(hocConnect(ControlBar));
