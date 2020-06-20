import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchFxData } from '../actions';

const mapStateToProps = (state) => ({
  isLoading: state.application.isLoading || false,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ fetchFxData }, dispatch)
);

export default (InnerComponent) => (
  connect(mapStateToProps, mapDispatchToProps)((props) => (
    <InnerComponent
      {...props}
    />
  ))
);
