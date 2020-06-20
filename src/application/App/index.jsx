import React, {Component} from 'react';

import Loader from '../../components/Loader';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';

import './style.scss';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }

  componentDidMount() {
    console.log('fetch data');
  }

  render() {
    return (
      <div className="App">
        <Loader show={true} />
        <Header />
        <SearchBar />
      </div>
    );
  };

}

export default App;
