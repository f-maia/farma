import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Input({
  type,
  name,
  label,
  error,
  autoCapitalize,
  autoComplete,
  customStyles,
  ...rest
}) {
  return (
    <Container customStyle={customStyles}>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        autoComplete={autoComplete}
        autoCapitalize={autoCapitalize}
        {...rest}
      />
      {!!error && <span>{error}</span>}
    </Container>
  );
}

Input.defaultProps = {
  type: 'text',
  error: '',
  autoCapitalize: 'off',
  autoComplete: 'off',
  customStyles: '',
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  autoComplete: PropTypes.string,
  autoCapitalize: PropTypes.string,
  customStyles: PropTypes.string,
  rest: PropTypes.object,
};

export default Input;
