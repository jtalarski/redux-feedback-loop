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
    })
  }
  
  
  render() {
    return (
      <div>
        <h1>How well are you being supported</h1>
        <select onChange={(event) => this.onHandleChange(event)} name="supported?">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <Link to="/comments"><button>Next</button></Link>
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