import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Understanding extends Component {
  componentDidMount(){
    console.log( 'Understanding mounted' );
    
  } // end componentDidMount
  
  onHandleChange (event) {
    // console.log('in onHandleChange Understanding', event.target.value)
    // console.log('reduxState Understanding', this.props.reduxState);
    this.props.dispatch({
      type: 'SET_UNDERSTANDING',
      payload: event.target.value
    })
  }


  render() {
    return (
      <div>
          <h1>How well are you understanding the content?</h1>
        <select onChange={(event) => this.onHandleChange(event)} name="content?">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <Link to="/supported"><button>Next</button></Link>
      </div>
    ); // end return
  } // end render
} // end class

const mapStateToProps = (reduxState) => {
  return {
    reduxState
  };

}

export default connect(mapStateToProps)(Understanding);