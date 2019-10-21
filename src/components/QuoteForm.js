import React from 'react';
import './QuoteForm.css'
const MAX_LENGTH = 31;

class QuoteForm extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      character : " "
    }
  }

  handleChange = (event) => {
    if (event.target.value.length > MAX_LENGTH) {
      return;
    }
    this.setState({character : event.target.value})
  }


  render() {

    const maximumReached = this.state.character.length >= MAX_LENGTH;
    const numRemaining = MAX_LENGTH - this.state.character.length;
    return (
      <form
        className="QuoteForm"
      >
        <label htmlFor="character">Character:</label>
        <input
          className={maximumReached ? "length-maximum-reach" : "length-ok"}
          id="name"
          name="character"
          value={this.state.character}
          type="text"
          onChange={this.handleChange}
        />
         <small className="remaining-characters">
          {numRemaining} remaining characters
        </small>
        <p>
          You typed: <strong>{this.state.character}</strong>
        </p>
      </form>
     
    );
  }
}

export default QuoteForm;