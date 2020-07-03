import React from 'react';
import PropTypes from 'prop-types';
import { confirmAlert } from 'react-confirm-alert';

import { Container, ButtonContainer } from './styles';

export default function alert(text, options) {
  return confirmAlert({
    message: text,
    buttons: options,
    customUI: function UI({ message: Message, buttons, onClose }) {
      UI.propTypes = {
        message: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
          .isRequired,
        buttons: PropTypes.arrayOf(PropTypes.object).isRequired,
        onClose: PropTypes.func.isRequired,
      };

      return (
        <Container className="custom-ui">
          <Message />
          <ButtonContainer>
            {buttons.map(({ label, onClick }) => (
              <button
                key={label}
                type="button"
                onClick={() => {
                  if (onClick) {
                    onClick();
                  }
                  onClose();
                }}
              >
                {label}
              </button>
            ))}
          </ButtonContainer>
        </Container>
      );
    },
  });
}
