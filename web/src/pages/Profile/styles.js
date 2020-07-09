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

    & > div {
      display: flex;
      align-items: center;
      justify-content: center;

      margin: ${stylesConstants.margins.margin_X_large} auto 5rem;

      button {
        padding: 1rem 2.5rem;
        border: none;
        background-color: ${stylesConstants.colors.light_grey};
        color: ${stylesConstants.colors.dark_blue};
        border-radius: 5px;
        font-size: 1.6rem;
        outline: none;
      }
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 22rem;
  padding: ${stylesConstants.paddings.paddin_X_large};

  box-shadow: 0 0.5rem 1.5rem #0000000f;

  margin-bottom: 2.5rem;

  img {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    margin-top: 1.5rem;

    svg {
      color: ${stylesConstants.colors.dark_blue};
      font-size: 1.6rem;
    }

    span {
      color: ${stylesConstants.colors.middle_grey};
      font-size: 0.8rem;
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

  * {
    padding: 0;
    margin: 0;
    font-size: 1.3rem;
    color: ${stylesConstants.colors.dark_blue};
    text-align: center;
    vertical-align: center;
  }
`;
