import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Measure from 'react-measure';
import debounce from 'lodash/debounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins } from '@fortawesome/free-solid-svg-icons'

import hocConnect from './hocConnect';

import './style.scss';

class Header extends Component {

  onResize = debounce((contentRect) => {
    const { headerHeight, setHeaderHeight } = this.props;
    const { height } = contentRect.bounds;

    if (headerHeight !== height) setHeaderHeight(height);
  }, 25);

  render() {
    return (
      <Measure
        onResize={this.onResize}
        bounds
      >
        {({ measureRef }) => (
          <header
            ref={measureRef}
            className="Header"
          >
            <FontAwesomeIcon icon={faCoins}/>
            <span className="title">George FE Test</span>
          </header>
        )}
      </Measure>
    );
  }
}

Header.propTypes = {
  headerHeight: PropTypes.number.isRequired,
  setHeaderHeight: PropTypes.func.isRequired,
};

export default hocConnect(Header);
