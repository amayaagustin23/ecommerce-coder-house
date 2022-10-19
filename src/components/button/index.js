/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  type, text, onClick
}) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <div>
      <button className="button-container" type={type} onClick={handleClick}>{text}</button>
    </div>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  onClick: () => {},
  text: ''
};
export default Button;
