import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
// import {connect} from 'react-redux';
// import axios from 'axios'

class Success extends Component {
  componentDidMount(){
    console.log( 'Success mounted' );   
  } // end componentDidMount

commentClear = () => {
console.log('in onClick');
  this.props.dispatch({
      type: 'SET_COMMENTS',
      payload: ' '
    })
  }

  render() {
    return (
      <div>
        <h1>Thank You!</h1>
        <Link to='/'>
            <button onClick={this.commentClear}>Leave New Feedback</button>
        </Link>
      </div>
    ); // end return
  } // end render
} // end class

const mapStateToProps = (reduxState) => {
  return {
    reduxState
  };

}

export default connect(mapStateToProps)(Success);