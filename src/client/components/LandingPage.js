import React from 'react';
import { connect } from 'react-redux';

const LandingPage = props => {
  return (
    <div>{ props.text }</div>
  );
};

function mapStateToProps() {
  return {
    text: 'LandingPage with Redux',
  };
}

// Connect props to component
export default connect(mapStateToProps)(LandingPage);
