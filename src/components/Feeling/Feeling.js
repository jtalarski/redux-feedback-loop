import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

class Feeling extends Component {
  componentDidMount(){
    console.log( 'Feeling mounted' ); 
     
  } // end componentDidMount



onHandleChange (event) {
  //console.log('in onHandleChange Feeling', event.target.value);
  //console.log('reduxState feeling', this.props.reduxState);
  this.props.dispatch({
    type: 'SET_FEELING',
    payload: event.target.value
  })
 
}



  render() {
    //console.log('reduxState', this.props.reduxState)
    return (
      <div>
        <h1>How are you feeling today?</h1>
        <select onChange={(event) => this.onHandleChange(event)} name="feeling?">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
       
       <Link to="/understanding"><button>Next</button></Link>
      </div>
    ); // end return
  } // end render
} // end class


const mapStateToProps = (reduxState) => {
  return {
    reduxState
  };

}


export default connect(mapStateToProps)(Feeling);