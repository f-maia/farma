import React from 'react';
import { useSelector } from 'react-redux';
import { InlineIcon } from '@iconify/react';
import MapMarkerAlt from '@iconify/icons-fa-solid/map-marker-alt';

import edit_icon from '~/assets/edit_icon.svg';

import { Container } from './styles';

function LocationHeader() {
  const user = useSelector((state) => state.auth.user);

  return (
    <Container>
      <span>
        Bem vindo(a), <strong>{user.name}</strong>
      </span>
      <span>
        <InlineIcon icon={MapMarkerAlt} />
        {user.street}, {user.building_number}
        <img src={edit_icon} alt="edit icon" />
      </span>
    </Container>
  );
}

export default LocationHeader;
