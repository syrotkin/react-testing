import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class MovieForm extends Component {
  state = {
    text: '',
  };

  render() {
    const { submitForm } = this.props;
    const { text } = this.state;

    return (
      <div>
        <form
          data-testid="movie-form"
          onSubmit={() => submitForm({
            text,
          })}
        >
          <input type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}


MovieForm.propTypes = {
  submitForm: PropTypes.func.isRequired,
};
