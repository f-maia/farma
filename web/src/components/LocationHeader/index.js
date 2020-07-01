import React from 'react';
import { InlineIcon } from '@iconify/react';
import MapMarkerAlt from '@iconify/icons-fa-solid/map-marker-alt';

import edit_icon from '~/assets/edit_icon.svg';

import { Container } from './styles';

function LocationHeader() {
  return (
    <Container>
      <span>
        Bem vindo(a), <strong>Joana!</strong>
      </span>
      <span>
        <InlineIcon icon={MapMarkerAlt} />
        Rua Santa Mônica, 155
        <img src={edit_icon} alt="edit icon" />
      </span>
    </Container>
  );
}

export default LocationHeader;
