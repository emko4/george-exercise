import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setHeaderHeight } from '../../application/actions';

const mapStateToProps = (state) => ({
  headerHeight: state.application.headerHeight,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ setHeaderHeight }, dispatch)
);

export default (InnerComponent) => (
  connect(mapStateToProps, mapDispatchToProps)((props) => (
    <InnerComponent
      {...props}
    />
  ))
);
