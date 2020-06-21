import React, { Component } from 'react';
import debounce from 'lodash/debounce';

export default (InnerComponent) => {
  class HocScrollPosition extends Component {

  handleScroll = debounce(() => {
    this.setState({
      scrollPosition: window.pageYOffset,
    });
  }, 2);

  constructor(props) {
    super(props);

    this.state = {
      scrollPosition: window.pageYOffset,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { scrollPosition } = this.state;

    return (
      <InnerComponent
        {...this.props}
        scrollPosition={scrollPosition}
      />
    );
  }

  }

  return HocScrollPosition;
};
