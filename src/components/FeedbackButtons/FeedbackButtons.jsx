import React from 'react';
import PropTypes from 'prop-types';

export class FeedbackButtons extends React.Component {
  handleButtonClick = type => {
    this.props.onFeedback(type);
  };
  render() {
    return (
      <div>
        {this.props.options.map(option => (
          <button key={option} onClick={() => this.handleButtonClick(option)}>
            {option}
          </button>
        ))}
      </div>
    );
  }
}

FeedbackButtons.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFeedback: PropTypes.func.isRequired,
};
