import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

import { Actions as AuthActions } from '~/store/ducks/auth';

import logo from '~/assets/logo.svg';

import Input from '~/components/Input';

import { Container, OptionsContainer } from './styles';
import Spinner from '~/components/Spinner';

function SignIn() {
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();

  const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  function handleSubmit(values) {
    const { email, password } = values;

    dispatch(AuthActions.signInRequest(email, password));
  }

  return (
    <Container>
      <img src={logo} alt="Busca MED" />

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {(formikBag) => (
          <Form>
            <Field
              as={Input}
              type="email"
              name="email"
              label="E-mail"
              placeholder="Digite seu e-mail"
              error={formikBag.errors.email}
            />

            <Field
              as={Input}
              type="password"
              name="password"
              label="Senha"
              placeholder="Digite sua senha"
              error={formikBag.errors.password}
            />

            <button type="submit">{loading ? <Spinner /> : 'Entrar'}</button>
          </Form>
        )}
      </Formik>

      <OptionsContainer>
        <p>
          Não tem conta?
          <Link to="/signup">Crie uma agora</Link>
        </p>
        <Link to="/help">Precisa de ajuda?</Link>
      </OptionsContainer>
    </Container>
  );
}

export default SignIn;
