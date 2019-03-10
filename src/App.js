import React, { Component } from 'react';
import './App.css';
import JokesApi from "./JokesApi";
import JokeList from "./JokeList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topJokes: [],
      bottomJokes: [],
      randomJokes: []
    }
    this.getRandomJokes = this.getRandomJokes.bind(this);
  }

  async componentDidMount() {
    await this.getRandomJokes();
  }

  async getRandomJokes() {
    const jokeRequests = [
      JokesApi.getTopJokes(),
      JokesApi.getWorstJokes(),
      JokesApi.getRandomJokes()
    ];
    const [ topJokes, bottomJokes, randomJokes ] = await Promise.all(jokeRequests);
    this.setState({ topJokes, bottomJokes, randomJokes });
  }

  render() {
    const { topJokes, bottomJokes, randomJokes } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          Cheesy Jokez 🧀
        </header>
        <div>
          <h1>Top Jokes</h1>
          <JokeList jokes={topJokes} />
        </div>
        <div>
          <h1>Top Jokes</h1>
          <JokeList jokes={bottomJokes} />
        </div>
        <div>
          <h1>Random Jokes</h1>
          <button onClick={this.getRandomJokes} >Get Random Jokes</button>
          <JokeList jokes={randomJokes} />
        </div>
      </div>
    );
  }
}

export default App;
