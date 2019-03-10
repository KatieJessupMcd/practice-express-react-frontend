import React, { Component } from "react";
import PropTypes from "prop-types";

class JokeList extends Component {
  render() {
    const { jokes } = this.props;
    return (
      <div>
        {jokes.map(j => (
          <p key={j.id}>
            {j.joke} (Number of votes: {j.votes})
          </p>
        ))}
      </div>
    );
  }
}

JokeList.propTypes = {
  jokes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      joke: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired
    })
  ).isRequired
};

JokeList.defaultProps = {
  jokes: []
};

export default JokeList;