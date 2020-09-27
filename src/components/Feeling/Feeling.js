import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

class Feeling extends Component {
  componentDidMount(){
    console.log( 'Feeling mounted' );
   //this.setDisabled()   
  } // end componentDidMount


// setDisabled = () => {
//   document.getElementById("myBtn").disabled = true;
// }


onHandleChange (event) {
  
this.props.dispatch({
    type: 'SET_FEELING',
    payload: event.target.value
  });
  document.getElementById("nextBtn").disabled = false;
}



  render() {
    //console.log('reduxState', this.props.reduxState)
    return (
      <div>
        <h1>How are you feeling today?</h1>
        <h4>You must give a score to proceed to the next question</h4>
        <select onChange={(event) => this.onHandleChange(event)} value={this.props.feeling} name="feeling?" required>
            <option>Choose a score</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
       

       <Link to="/understanding"><button id="nextBtn" disabled >Next</button></Link>
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