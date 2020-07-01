import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';

import logo from '~/assets/logo.svg';

import Input from '~/components/Input';

import { Container, OptionsContainer } from './styles';

function SignIn() {
  return (
    <Container>
      <img src={logo} alt="Busca MED" />

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, actions) => {
          console.log(values);
          console.log(actions);
        }}
      >
        <Form>
          <Field
            as={Input}
            type="email"
            name="email"
            label="E-mail"
            placeholder="Digite seu e-mail"
          />

          <Field
            as={Input}
            type="password"
            name="password"
            label="Senha"
            placeholder="Digite sua senha"
          />

          <button type="submit">Entrar</button>
        </Form>
      </Formik>

      <OptionsContainer>
        <p>
          Não tem conta?<Link to="/signup">Crie uma agora</Link>
        </p>
        <Link to="/help">Precisa de ajuda?</Link>
      </OptionsContainer>
    </Container>
  );
}

export default SignIn;
