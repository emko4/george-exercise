import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';

import { fetchFxData, setUseRequest } from '../../application/actions';

const mapStateToProps = (state) => ({
  isLoading: state.application.isLoading,
  headerHeight: state.application.headerHeight,
  useRequest: state.application.useRequest,
  searchText: state.router.location.hash.replace(/^#/, ''),
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ push, fetchFxData, setUseRequest }, dispatch)
);

export default (InnerComponent) => (
  connect(mapStateToProps, mapDispatchToProps)((props) => (
    <InnerComponent
      {...props}
    />
  ))
);
