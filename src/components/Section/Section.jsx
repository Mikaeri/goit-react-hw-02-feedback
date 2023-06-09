import React from 'react';
import PropTypes from 'prop-types';

export class Section extends React.Component {
  render() {
    const { title, children } = this.props;

    return (
      <div>
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
