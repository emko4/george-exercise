import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  data: state.application.fxData,
  searchText: state.router.location.hash.replace(/^#/, ''),
});

export default (InnerComponent) => (
  connect(mapStateToProps)((props) => (
    <InnerComponent
      {...props}
    />
  ))
);
