import styled from 'styled-components';

import stylesConstants from '~/styles/constants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;

  margin: 0 auto;

  height: 100%;

  width: 30rem;

  img {
    margin-bottom: 3.5rem;

    width: 15rem;
    height: 25rem;
  }

  form {
    width: 100%;

    button {
      width: 100%;
      padding: ${stylesConstants.paddings.paddin_middle};
      border: none;
      background-color: ${stylesConstants.colors.dark_blue};
      color: white;
      border-radius: 5px;
      margin-top: ${stylesConstants.margins.margin_X_large};
      font-size: 2rem;
      outline: none;
      color: white;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-flow: column;
  margin: ${stylesConstants.margins.margin_X_large} 0;

  label {
    color: ${stylesConstants.colors.middle_grey};
    text-align: left;
  }

  input {
    padding: ${stylesConstants.paddings.padding_little} 0;
    margin: ${stylesConstants.margins.margin_little} 0;

    border: none;
    border-bottom: 2px solid ${stylesConstants.colors.middle_grey};
    outline: none;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 6.6rem;
  width: 100%;

  p {
    color: #9c9c9c;

    a {
      margin-left: 3px;
    }
  }

  a {
    color: ${stylesConstants.colors.dark_blue};
  }
`;
