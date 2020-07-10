import React, { useState } from 'react';

import api from '~/services/api';

import LocationHeader from '~/components/LocationHeader';
import BottomNavbar from '~/components/BottomNavbar';
import PharmacyItem from '~/components/PharmacyItem';

import Wrapper from '~/styles/Wrapper';

import logo from '~/assets/logo_small.svg';

import {
  Container,
  Content,
  TitleContainer,
  PharmaciesContainer,
} from './styles';

function Favorites() {
  const [favorites, setFavorites] = useState([
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
  ]);

  return (
    <>
      <Wrapper>
        <Container>
          <LocationHeader />
          <TitleContainer>
            <img src={logo} alt="Busca Med" />
            <h2>Favoritos</h2>
          </TitleContainer>
          <Content>
            <PharmaciesContainer>
              {favorites.map((pharmacy) => (
                <PharmacyItem key={pharmacy.id} data={pharmacy} />
              ))}
            </PharmaciesContainer>
          </Content>
        </Container>
      </Wrapper>
      <BottomNavbar />
    </>
  );
}

export default Favorites;
