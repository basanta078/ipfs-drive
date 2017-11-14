import React from 'react';
import PropTypes from 'prop-types';
import FileManager from './FileManager';
import { goTo } from '../actions/ipfsActions';
import { connect } from 'react-redux';

class IPFSRouteDataLoader extends React.Component {
  componentDidMount () {
    this.props.goTo(this.props.location.pathname.split('/').slice(2));
  }

  render () {
    return <FileManager />;
  }
}

IPFSRouteDataLoader.propTypes = {
  match: PropTypes.object,
  goTo: PropTypes.func
};

function mapDispatchToProps(dispatch){
  return {
    goTo: path => dispatch(goTo(path)),
  };
}

export default connect(
  null,
  mapDispatchToProps
)(IPFSRouteDataLoader);