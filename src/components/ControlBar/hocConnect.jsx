import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';

import { fetchFxData } from '../../application/actions';

const mapStateToProps = (state) => ({
  isLoading: state.application.isLoading,
  headerHeight: state.application.headerHeight,
  searchText: state.router.location.hash.replace(/^#/, ''),
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ push, fetchFxData }, dispatch)
);

export default (InnerComponent) => (
  connect(mapStateToProps, mapDispatchToProps)((props) => (
    <InnerComponent
      {...props}
    />
  ))
);
