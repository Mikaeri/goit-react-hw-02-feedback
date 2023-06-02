import React from 'react';

export class Statistics extends React.Component {
  render() {
    const { good, neutral, bad, totalFeedback, positivePercentage } =
      this.props;
    return (
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive feedback: {positivePercentage}</li>
      </ul>
    );
  }
}
