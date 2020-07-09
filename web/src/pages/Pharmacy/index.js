import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { InlineIcon, Icon } from '@iconify/react';

import CloseCircleFullIcon from '@iconify/icons-jam/close-circle-f';
import ArrowLeftIcon from '@iconify/icons-jam/arrow-left';
import MapMarkerAltIcon from '@iconify/icons-fa-solid/map-marker-alt';
import MapIcon from '@iconify/icons-jam/map';
import MotorcycleIcon from '@iconify/icons-fa-solid/motorcycle';
import DocumentIcon from '@iconify/icons-jam/document';
import CoinIcon from '@iconify/icons-jam/coin';
import HeartIcon from '@iconify/icons-jam/heart';
import HeartFullIcon from '@iconify/icons-jam/heart-f';

import api from '~/services/api';

import BottomNavbar from '~/components/BottomNavbar';
import ProductItem from '~/components/ProductItem';

import Wrapper from '~/styles/Wrapper';

import { Container, Header, Info, Services, ProductsContainer } from './styles';

function Pharmacy() {
  const [products, setProducts] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  async function handleSubmit({ search }) {
    console.log(search);
  }

  function submitOnEnterPress(e, formik) {
    e.preventDefault();
    if (e.key === 'Enter') {
      formik.submitForm();
    }
  }

  return (
    <>
      <Wrapper>
        <Container>
          <Header>
            <div>
              <span>voltar</span>
              <Icon icon={ArrowLeftIcon} />
            </div>
            <img
              src="https://images.unsplash.com/photo-1576602976047-174e57a47881?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
              alt="pharmacy"
            />
          </Header>

          <Info>
            <div>
              <InlineIcon icon={MapMarkerAltIcon} />
              <span>Distância</span>
              <strong>1,3Km</strong>
            </div>
            <div>
              <InlineIcon icon={MapIcon} />
              <span>Ver no mapa</span>
            </div>
          </Info>

          <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
            {(formikBag) => (
              <Form>
                <div>
                  <Field
                    name="search"
                    autoComplete="off"
                    onKeyUp={(event) => submitOnEnterPress(event, formikBag)}
                    placeholder="Buscar medicamentos"
                  />

                  <button type="reset">
                    <InlineIcon icon={CloseCircleFullIcon} />
                  </button>
                </div>
              </Form>
            )}
          </Formik>

          <Services>
            <span>Serviços disponíveis</span>

            <div>
              <div>
                <div>
                  <span>Delivery</span>
                  <Icon icon={MotorcycleIcon} />
                </div>
                <div>
                  <span>Retirar com receita</span>
                  <Icon icon={DocumentIcon} />
                </div>
                <div>
                  <span>Pagamento online</span>
                  <Icon icon={CoinIcon} />
                </div>
              </div>
              <Icon icon={HeartIcon} />
            </div>
          </Services>

          <ProductsContainer>
            {products.map((product) => (
              <ProductItem key={product} data={product} />
            ))}
          </ProductsContainer>
        </Container>
      </Wrapper>
      <BottomNavbar />
    </>
  );
}

export default Pharmacy;
