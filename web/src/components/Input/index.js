import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Input({
  name,
  label,
  type,
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
    </Container>
  );
}

Input.defaultProps = {
  type: 'text',
  autoCapitalize: 'off',
  autoComplete: 'off',
  customStyles: '',
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  autoComplete: PropTypes.string,
  autoCapitalize: PropTypes.string,
  customStyles: PropTypes.string,
  rest: PropTypes.object,
};

export default Input;
