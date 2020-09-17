import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';

import { fetchSingers } from '../actions/singer';

const mapStateToProps = state => ({
  
});
const mapDispacthToProps = dispatch => ({
  fetchSingers: () => { dispatch(fetchSingers()); }
});
class Toggle extends Component  {
    componentDidMount() {
        this.props.fetchSingers();
      }
    render() {
        return (
    <div>
        <h1>Hello</h1>
    </div>)}
 
}


export default withRouter(connect(mapStateToProps, mapDispacthToProps)(Toggle));