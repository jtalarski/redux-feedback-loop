import React, { Component } from 'react';
import {connect} from 'react-redux';
//import {Link} from 'react-router-dom'

class Review extends Component {
  componentDidMount(){
    console.log( 'Review mounted' );   
  } // end componentDidMount

  render() {
    return (
      <div>
        <h1>Review Your Feedback</h1>
        <p>Feelings:  {this.props.reduxState.feelingReducer.feeling}</p>
        <p>Understanding: {this.props.reduxState.understandingReducer.understanding}</p>
        <p>Support: {this.props.reduxState.supportReducer.support}</p>
        <p>Comments: {this.props.reduxState.commentsReducer.comments}</p>
      </div>
    ); // end return
  } // end render
} // end class

const mapStateToProps = (reduxState) => {
  return {
    reduxState
  };
}
export default connect(mapStateToProps)(Review);