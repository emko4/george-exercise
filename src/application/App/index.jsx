import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Loader from '../../components/Loader';
import Header from '../../components/Header';
import ControlBar from '../../components/ControlBar';
import List from '../../components/List';

import hocConnect from './hocConnect';

import { LOADER_TYPE } from '../constants';

import './style.scss';

class App extends Component {

  componentDidMount() {
    const { fetchFxData } = this.props;

    fetchFxData();
  }

  render() {
    const { isLoading } = this.props;

    return (
      <div className="App">
        <Loader show={isLoading === LOADER_TYPE.WHOLE_PAGE} />
        <div className="App--frame">
          <Header />
          <ControlBar />
          <List />
        </div>
      </div>
    );
  };

}

App.propTypes = {
  isLoading: PropTypes.oneOf(Object.values(LOADER_TYPE)).isRequired,
  fetchFxData: PropTypes.func.isRequired,
};

export default hocConnect(App);
