import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { InlineIcon } from '@iconify/react';
import CloseCircleFullIcon from '@iconify/icons-jam/close-circle-f';

import api from '~/services/api';

import LocationHeader from '~/components/LocationHeader';
import BottomNavbar from '~/components/BottomNavbar';
import PharmacyItem from '~/components/PharmacyItem';

import Wrapper from '~/styles/Wrapper';

import mapImage from '~/assets/ilustracao_mapa.svg';

import { Container, Content, Background, PharmaciesContainer } from './styles';

function Search() {
  const [pharmacies, setPharmacies] = useState([
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

  async function handleSubmit({ search }) {
    const response = await api.get('/users/pharmacy', {
      params: {
        q: search,
      },
    });

    setPharmacies(response.data);
  }

  function submitOnEnterPress(e, formik) {
    e.preventDefault();
    if (e.key === 'Enter') {
      formik.submitForm();
    }
  }

  function renderContent() {
    if (pharmacies.length === 0) {
      return (
        <Background>
          <img src={mapImage} alt="mapa com marcadores" />
          <h2>Encontre as farmácias mais próximas a você</h2>
        </Background>
      );
    }

    const pharmaciesComponents = pharmacies.map((pharmacy) => (
      <PharmacyItem key={pharmacy.id} data={pharmacy} />
    ));

    return (
      <PharmaciesContainer>
        <span>Farmácias próximas a você</span>
        {pharmaciesComponents}
      </PharmaciesContainer>
    );
  }

  return (
    <>
      <Wrapper>
        <Container>
          <LocationHeader />
          <Content>
            <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
              {(formikBag) => (
                <Form>
                  <Field
                    name="search"
                    autoComplete="off"
                    onKeyUp={(event) => submitOnEnterPress(event, formikBag)}
                    placeholder="Buscar medicamentos"
                  />

                  <button type="reset">
                    <InlineIcon icon={CloseCircleFullIcon} />
                  </button>
                </Form>
              )}
            </Formik>

            {renderContent()}
          </Content>
        </Container>
      </Wrapper>
      <BottomNavbar />
    </>
  );
}

export default Search;
