import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
class Supported extends Component {
  componentDidMount(){
    console.log( 'Supported mounted' );   
  } // end componentDidMount

  onHandleChange (event) {
    // console.log('in onHandleChange Supported', event.target.value)
    // console.log('reduxState supported', this.props.reduxState);
    this.props.dispatch({
      type: 'SET_SUPPORTED',
      payload: event.target.value
    });
    document.getElementById("nextBtn").disabled = false;
  }
  
  
  render() {
    return (
      <div>
        <h1>How well are you being supported</h1>
        <h4>You must give a score to proceed to the next question</h4>
        <select onChange={(event) => this.onHandleChange(event)} name="supported?">
            <option>Choose a score</option>
            <option value="">Select Score</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <Link to="/comments"><button id="nextBtn" disabled>Next</button></Link>
        <br></br>
        <Link to="/understanding"><button >Back</button></Link>
      </div>
    ); // end return
  } // end render
} // end class

const mapStateToProps = (reduxState) => {
  return {
    reduxState
  };

}

export default connect(mapStateToProps)(Supported);