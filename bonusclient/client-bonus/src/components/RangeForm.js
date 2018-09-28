import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class RangeForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      /* submit the request here, then render the result to id result-of-game */

      let fizzbuzzrequesturl = 
      "https://us-central1-sage-yeti-217606.cloudfunctions.net/fizzBuzz?max_range="
      + this.state.value;

      axios.get(fizzbuzzrequesturl)
      .then(response => {
        const gameresult = response.data;
        document.getElementById("result-of-game").value = gameresult;
        // Yes, this can be improved in next version, but works fine for now...
      })
      .catch(function (error) {
        // handle error
        alert('FizzBuzz request error: ' + error);
        console.log(error);
      })

      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Range:
            <input type="number" class="input-range" 
                   value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Play" class="play-button" />
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <RangeForm />,
    document.getElementById('root')
  );

  export default RangeForm;