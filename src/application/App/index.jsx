import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Loader from '../../components/Loader';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';

import hocConnect from './hocConnect';

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
        <Loader show={isLoading} />
        <Header />
        <SearchBar />
      </div>
    );
  };

}

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  fetchFxData: PropTypes.func.isRequired,
};

export default hocConnect(App);
