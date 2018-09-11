import React from 'react';

const Messgae = (props) => {
  return (
    <div className="message">
      <h4>{this.props.author}</h4>
      <p>{this.props.content}</p>
      <p><em>{this.props.created_at}</em></p>
    </div>
  );
};
