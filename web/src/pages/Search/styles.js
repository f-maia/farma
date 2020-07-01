import styled from 'styled-components';

import stylesContainer from '~/styles/constants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
`;

export const Content = styled.div`
  padding: 3.5rem;
  padding-bottom: 0;

  height: 100%;

  form {
    display: flex;
    align-items: center;

    padding: 1rem 2rem;

    border-radius: 0.5rem;
    background-color: ${stylesContainer.colors.light_grey};
    width: 100%;

    height: 4rem;

    input {
      border: none;
      background-color: transparent;

      width: 100%;
      margin-right: 1rem;
    }

    svg {
      color: ${stylesContainer.colors.dark_grey};
      font-size: 2.5rem;
    }

    button {
      background: transparent;
      border: none;
    }
  }
`;

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100%;

  img {
    margin-bottom: 3.8rem;
  }

  h2 {
    font-size: 2rem;
    color: #d2d0d0;

    text-align: center;
  }
`;
