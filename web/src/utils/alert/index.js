import React from 'react';
import PropTypes from 'prop-types';
import { confirmAlert } from 'react-confirm-alert';

import { Container, ButtonContainer } from './styles';

export default function alert({ Message, options }) {
  return confirmAlert({
    buttons: options,
    childrenElement: () => <div>children</div>,
    customUI: function UI({ buttons, onClose }) {
      UI.propTypes = {
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
