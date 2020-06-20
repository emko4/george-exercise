import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';

const mapStateToProps = (state) => ({
  searchText: state.router.location.hash.replace(/^#/, ''),
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ push }, dispatch)
);

export default (InnerComponent) => (
  connect(mapStateToProps, mapDispatchToProps)((props) => (
    <InnerComponent
      {...props}
    />
  ))
);
