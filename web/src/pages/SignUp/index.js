import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Icon } from '@iconify/react';
import CameraFullIcon from '@iconify/icons-jam/camera-f';

import Input from '~/components/Input';

import { Container, Header, Title, Subtitle } from './styles';

function SignUp() {
  const [avatarFile, setAvatarFile] = useState(new FormData());

  function renderImageButton() {
    const { file } = avatarFile;

    if (file) {
      return <img src={URL.createObjectURL(file)} alt="preview avatar" />;
    }

    return (
      <>
        <Icon icon={CameraFullIcon} />
        <span>Carregar foto</span>
      </>
    );
  }

  return (
    <Container>
      <Header>
        <label htmlFor="avatar">
          {renderImageButton()}

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

      <Title>Cadastro</Title>
      <Subtitle>Bem vindo ao cadastro BuscaMED.</Subtitle>

      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          name: '',
          tel: '',
          cpf: '',
          street: '',
          address_details: '',
          building_number: '',
          uf: '',
          city: '',
          zip_code: '',
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          console.log(actions);
          console.log(avatarFile);
        }}
      >
        <Form>
          <fieldset>
            <legend>Dados de acesso</legend>
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
            <Field
              as={Input}
              type="password"
              name="confirmPassword"
              label="Confirme sua senha"
              placeholder="Digite sua senha novamente"
            />
          </fieldset>

          <fieldset>
            <legend>Informações pessoais</legend>
            <Field
              as={Input}
              name="name"
              label="Nome completo"
              placeholder="John Doe"
            />
            <Field
              as={Input}
              type="tel"
              name="tel"
              label="Telefone para contato"
              placeholder="(99)99999-9999"
            />
            <Field
              as={Input}
              name="cpf"
              label="CPF"
              placeholder="999.999.999-99"
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
            />
            <Field
              as={Input}
              name="zip_code"
              label="CEP"
              placeholder="Ex: 99999-999"
            />
            <Field
              as={Input}
              name="street"
              label="Rua"
              placeholder="Ex: Rua São Paulo"
            />
            <Field
              as={Input}
              name="address_details"
              label="Complemento"
              placeholder="Ex: Sobrado"
            />
            <Field
              as={Input}
              type="number"
              name="building_number"
              label="Numero"
              placeholder="Ex: 503"
            />
          </fieldset>

          <button type="submit">Cadastrar</button>
        </Form>
      </Formik>
    </Container>
  );
}

export default SignUp;
