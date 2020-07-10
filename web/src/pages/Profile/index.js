import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Icon } from '@iconify/react';
import CameraFullIcon from '@iconify/icons-jam/camera-f';
import * as yup from 'yup';

import api from '~/services/api';

import Input from '~/components/Input';
import Spinner from '~/components/Spinner';

import { Container, Header, Title } from './styles';
import history from '~/services/history';

function Profile() {
  const [loading, setLoading] = useState(false);
  const [avatarFile, setAvatarFile] = useState(new FormData());

  const validationSchema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match'),
    name: yup.string().required(),
    tel: yup.string().required(),
    cpf: yup.string().required(),
    street: yup.string().required(),
    address_details: yup.string(),
    building_number: yup.number().integer().positive().required(),
    uf: yup.string().length(2).required(),
    city: yup.string().required(),
    zip_code: yup.string().required(),
  });

  function renderAvatar() {
    const { file } = avatarFile;

    if (file) {
      return <img src={URL.createObjectURL(file)} alt="preview avatar" />;
    }

    return (
      <img
        src="https://images.unsplash.com/photo-1576602976047-174e57a47881?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
        alt="preview avatar"
      />
    );
  }

  async function handleSubmit(values) {
    setLoading(true);
    const { confirmPassword, ...userData } = values;

    if (confirmPassword !== userData.password) {
      console.log(confirmPassword, userData.password);
    }

    try {
      console.log(values);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Header>
        {renderAvatar()}

        <label htmlFor="avatar">
          <Icon icon={CameraFullIcon} />
          <span>Mudar foto</span>
          <input
            type="file"
            id="avatar"
            accept="image/*"
            onChange={(e) => {
              setAvatarFile({
                ...avatarFile,
                file: e.target.files[0],
              });
            }}
          />
        </label>
      </Header>

      <Title>Meu Perfil</Title>

      <Formik
        initialValues={{
          email: `${Date.now()}@x.com`,
          password: '',
          confirmPassword: '',
          name: 'a',
          tel: 'a',
          cpf: 'a',
          street: 'a',
          address_details: 'a',
          building_number: '1',
          uf: 'as',
          city: 'a',
          zip_code: 'a',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {(formikBag) => (
          <Form>
            <fieldset>
              <legend>Dados de acesso</legend>
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
                placeholder="Digite sua nova senha"
                error={formikBag.errors.password}
              />
              <Field
                as={Input}
                type="password"
                name="confirmPassword"
                label="Confirme sua senha"
                placeholder="Digite sua nova senha novamente"
                error={formikBag.errors.confirmPassword}
              />
            </fieldset>

            <fieldset>
              <legend>Informações pessoais</legend>
              <Field
                as={Input}
                name="name"
                label="Nome completo"
                placeholder="John Doe"
                error={formikBag.errors.name}
              />
              <Field
                as={Input}
                type="tel"
                name="tel"
                label="Telefone para contato"
                placeholder="(99)99999-9999"
                error={formikBag.errors.tel}
              />
              <Field
                as={Input}
                name="cpf"
                label="CPF"
                placeholder="999.999.999-99"
                error={formikBag.errors.cpf}
              />
            </fieldset>

            <fieldset>
              <legend>Endereço</legend>
              <Field as={Input} name="uf" label="Estado" placeholder="Ex: SP" />
              <Field
                as={Input}
                name="city"
                label="Cidade"
                placeholder="Ex: São Paulo"
                error={formikBag.errors.city}
              />
              <Field
                as={Input}
                name="zip_code"
                label="CEP"
                placeholder="Ex: 99999-999"
                error={formikBag.errors.zip_code}
              />
              <Field
                as={Input}
                name="street"
                label="Rua"
                placeholder="Ex: Rua São Paulo"
                error={formikBag.errors.street}
              />
              <Field
                as={Input}
                name="address_details"
                label="Complemento"
                placeholder="Ex: Sobrado"
                error={formikBag.errors.address_details}
              />
              <Field
                as={Input}
                type="number"
                name="building_number"
                label="Numero"
                placeholder="Ex: 503"
                error={formikBag.errors.building_number}
              />
            </fieldset>

            <div>
              <button type="submit" disabled={loading}>
                {loading ? <Spinner /> : 'Salvar alterações'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default Profile;
