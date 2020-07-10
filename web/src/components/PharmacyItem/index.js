import React from 'react';
import Icon, { InlineIcon } from '@iconify/react';
import HeartIcon from '@iconify/icons-jam/heart';
import HeartFullIcon from '@iconify/icons-jam/heart-f';
import PhoneAltIcon from '@iconify/icons-fa-solid/phone-alt';
import MotorcycleIcon from '@iconify/icons-fa-solid/motorcycle';

import { Container, Content } from './styles';

function PharmacyItem({ data }) {
  if (data) {
    // placeholder
    data = {
      avatar:
        'https://images.unsplash.com/photo-1576602976047-174e57a47881?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      cnpj: '11199911199',
      description:
        'Medicamentos, produtos para saúde, alergia, para seu bebê, idosos, suplementos.',
      id: 'a1aa4fc4-1891-4a5c-a4ec-e466d0253cbb',
      user: {
        active_account: true,
        address_details: 'sobrado azul',
        building_number: '999',
        city: 'Florianopolis',
        email: 'john_doe_1592870510@pharmacy.com',
        id: 'a1aa4fc4-1891-4a5c-a4ec-e466d0253cbb',
        name: 'Super Farma',
        street: 'Rua XyZ',
        tel: '1111999999999',
        type_account: 'pharmacy',
        uf: 'SC',
        zip_code: '1199199',
      },
    };
  }
  const fav = Math.random() > 0.499999;

  return (
    <Container to={`/pharmacy/${data.id}`}>
      <img src={data.avatar} alt="Pharmacy" />
      <Content favorite={fav}>
        <h3>{data.user.name}</h3>
        <p>{data.description}</p>
        <ul>
          <li>
            <InlineIcon icon={MotorcycleIcon} />
          </li>
          <li>1,3Km</li>
          <li>
            <InlineIcon icon={PhoneAltIcon} />
          </li>
        </ul>
      </Content>
      <Icon icon={fav ? HeartFullIcon : HeartIcon} />
    </Container>
  );
}

export default PharmacyItem;
