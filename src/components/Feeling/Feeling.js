import React, { Component } from 'react';
import {connect} from 'react-redux';
//import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
class Feeling extends Component {
  componentDidMount(){
    console.log( 'Feeling mounted' );
  
   //this.setDisabled()   
  } // end componentDidMount


state = {
  selectedOption: null
}



onHandleChange (event) {
  this.setState ({
    selectedOption: "Chosen"
  })
this.props.dispatch({
    type: 'SET_FEELING',
    payload: event.target.value
  })
}

nextQuestion = () => {

if(
  this.state.selectedOption !=="Chosen"
){
  alert('You must select a score')
} else {
  this.props.history.push('/understanding')
}

}

  render() {
    //console.log('reduxState', this.props.reduxState)
    return (
      <div>
        <h1>How are you feeling today?</h1>
        <h4>You must give a score to proceed to the next question</h4>
        <select onChange={(event) => this.onHandleChange(event)} value={this.props.feeling} name="feeling?">
            <option>Choose a score</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
       

       <button onClick={this.nextQuestion}>Next</button>
      </div>
    ); // end return
  } // end render
} // end class


const mapStateToProps = (reduxState) => {
  return {
    reduxState
  };

}


export default connect(mapStateToProps)(withRouter(Feeling));