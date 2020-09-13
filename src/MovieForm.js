import React, { Component } from "react";
import { PropTypes } from "prop-types";

export default class MovieForm extends Component {
  state = {
    text: '',
  };

  render() {
    const { submitForm } = this.props;
    const { text } = this.state;

    return (
      <form data-testid="movie-form" onSubmit={() => submitForm({ text })}>
        {/* creating a controlled component */}
        <label htmlFor="text">
          Text
          <input
            type="text"
            id="text"
            onChange={e => this.setState({ text: e.target.value })}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

MovieForm.propTypes = {
  submitForm: PropTypes.func.isRequired,
};
