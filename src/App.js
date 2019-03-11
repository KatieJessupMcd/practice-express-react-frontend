import React, { Component } from 'react';
import './App.css';
// IMPORT components and API call file
// import JokesApi from "./JokesApi";
// import JokeList from "./JokeList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // set state
    }
    // bind functions 
    // this.getRandomJokes = this.getRandomJokes.bind(this);
  }

  // componentDidMount - make any calls you need
  async componentDidMount() {
    await this.getRandomJokes();
  }

  // async getRandomJokes() {
  //   const jokeRequests = [
  //     JokesApi.getTopJokes(),
  //     JokesApi.getWorstJokes(),
  //     JokesApi.getRandomJokes()
  //   ];
  //   const [ topJokes, bottomJokes, randomJokes ] = await Promise.all(jokeRequests);
  //   this.setState({ topJokes, bottomJokes, randomJokes });
  // }

  render() {
    // DECONSTRUCT whatever you need from state
    // const { topJokes, bottomJokes, randomJokes } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
        <div>
          {/* children components here */}
        </div>
      </div>
    );
  }
}

export default App;
