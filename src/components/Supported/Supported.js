import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
class Supported extends Component {
  componentDidMount(){
    console.log( 'Supported mounted' );
  
  } // end componentDidMount
 
  state = {
    selectedOption: null
  }

  onHandleChange (event) {
    // console.log('in onHandleChange Supported', event.target.value)
    // console.log('reduxState supported', this.props.reduxState);
    this.setState ({
      selectedOption: "Chosen"
    });
    this.props.dispatch({
      type: 'SET_SUPPORTED',
      payload: event.target.value
    })
  }
  nextQuestion = () => {

  if(
    this.state.selectedOption !=="Chosen"
  ){
    alert('You must select a score')
  } else {
    this.props.history.push('/comments')
  }
  
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
        <button onClick={this.nextQuestion}>Next</button>
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

export default connect(mapStateToProps)(withRouter(Supported));