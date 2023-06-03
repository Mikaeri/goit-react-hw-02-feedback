import React from 'react';
import PropTypes from 'prop-types';

export class FeedbackButtons extends React.Component {
  handleButtonClick = type => {
    this.props.onFeedback(type);
  };
  render() {
    return (
      <div>
        <button onClick={() => this.handleButtonClick('good')}>Good</button>
        <button onClick={() => this.handleButtonClick('neutral')}>
          Neutral
        </button>
        <button onClick={() => this.handleButtonClick('bad')}>Bad</button>
      </div>
    );
  }
}

FeedbackButtons.propTypes = {
  onFeedback: PropTypes.func.isRequired,
};
