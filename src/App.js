import React, { Component } from 'react';
//switch to commonJS

class App extends Component {

  makeSuggestion(event) {
    event.preventDefault();
    let item = this.refs.description.value;
    // remove counter when wire up to db -->
    let counter = this.state.counter;
    //console.log(this.refs);
    console.log(counter)
    let suggestion = {
      item,
      // bad --> just for testing
      counter
    };
    counter += 1;

    let suggestions = this.state.suggestions;

    suggestions.push(suggestion);

    this.setState({
      suggestions: suggestions,
      counter: counter
    });

    this.refs.suggestionForm.reset(); 
  }

  getSuggestion(event) {
    event.preventDefault();
  }

  constructor() {
    super();
    this.makeSuggestion = this.makeSuggestion.bind(this); // can use ^App^ or ^this^ here
    // this.getSuggestion = this.getSuggestion.bind(this);
    this.state = {
      suggestions: [],
      title: 'React Suggestinator',
      //don't add counter to state --> just for testing purposes
      counter: 0
    }
  }

  render() {
    //let title = this.state.title;
    let suggestions = this.state.suggestions;

    return(
      <div className ="App">
        <h1>{this.state.title}</h1>
        <form ref="suggestionForm">
          <div>
            <input type="text" ref="description" placeholder="what's good, b?" />
            <button onClick ={this.makeSuggestion}> Make Suggestion </button>
          </div>
        </form>
        <ol>
          {suggestions.map((sug => <li key={sug.counter}>{sug.description}</li>))}
        </ol>
      </div> 
    );
  }
}
 
export default App;
