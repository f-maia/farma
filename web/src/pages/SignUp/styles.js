import styled from 'styled-components';

import stylesConstants from '~/styles/constants';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: scroll;
  height: 100vh;

  form {
    margin-top: 2.5rem;
    width: 30rem;

    fieldset {
      border: none;

      & + fieldset {
        margin-top: 3.5rem;
      }

      legend {
        font-size: 2rem;
        color: ${stylesConstants.colors.dark_blue};
        margin-bottom: 2.5rem;
      }
    }

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
      margin-bottom: 5rem;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 19rem;
  padding: ${stylesConstants.paddings.paddin_X_large};

  box-shadow: 0 0.5rem 1.5rem #0000000f;

  margin-bottom: 2.5rem;

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 12rem;
    height: 12rem;
    background: #d2d0d0;
    border-radius: 50%;
    margin: 0;

    img {
      width: 12rem;
      height: 12rem;
      border-radius: 50%;
    }

    svg {
      color: ${stylesConstants.colors.dark_grey};
      font-size: 2.5rem;
    }

    span {
      color: ${stylesConstants.colors.middle_grey};
      font-size: 1rem;
      align-self: center;
    }

    input {
      display: none;
    }
  }
`;

export const Title = styled.h2`
  padding: 0;

  font-size: 2.6rem;
  color: ${stylesConstants.colors.dark_blue};
`;

export const Subtitle = styled.p`
  margin: 0;
  padding: 0;

  font-size: 1rem;
  color: #818181;

  text-align: center;
`;

export const SuccessMessage = styled.p`
  font-size: 1.3rem;
  padding: 0;
  margin: 0;
  line-height: 2rem;
  text-align: center;
  vertical-align: center;
  color: ${stylesConstants.colors.middle_grey};

  * {
    padding: 0;
    margin: 0;
    font-size: 1.3rem;
    color: ${stylesConstants.colors.dark_blue};
    text-align: center;
    vertical-align: center;
  }
`;
