import React from 'react';

export class Notification extends React.Component {
  render() {
    const { message } = this.props;

    return <p>{message}</p>;
  }
}
