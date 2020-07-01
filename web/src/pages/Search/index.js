import React from 'react';
import { Formik, Form, Field } from 'formik';
import { InlineIcon } from '@iconify/react';
import CloseCircleFullIcon from '@iconify/icons-jam/close-circle-f';

import LocationHeader from '~/components/LocationHeader';
import BottomNavbar from '~/components/BottomNavbar';

import Wrapper from '~/styles/Wrapper';

import mapImage from '~/assets/ilustracao_mapa.svg';

import { Container, Content, Background } from './styles';

function Search() {
  return (
    <>
      <Wrapper>
        <Container>
          <LocationHeader />
          <Content>
            <Formik
              initialValues={{ search: '' }}
              onSubmit={(values, actions) => {
                console.log(values);
                console.log(actions);
              }}
            >
              <Form>
                <Field
                  type="search"
                  name="search"
                  placeholder="Buscar medicamentos"
                />
                <button type="submit">
                  <InlineIcon icon={CloseCircleFullIcon} />
                </button>
              </Form>
            </Formik>

            <Background>
              <img src={mapImage} alt="mapa com marcadores" />
              <h2>Encontre as farmácias mais próximas a você</h2>
            </Background>
          </Content>
        </Container>
      </Wrapper>
      <BottomNavbar />
    </>
  );
}

export default Search;
