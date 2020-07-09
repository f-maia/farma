import styled from 'styled-components';

import stylesContainer from '~/styles/constants';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;

  & > * {
    width: 100%;
    margin-bottom: 2rem;
    padding: 0 2.5rem;
  }

  form {
    div {
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
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  height: 12rem;
  padding: 2.5rem;

  box-shadow: 0 0.5rem 1.5rem #0000000f;

  div {
    display: flex;
    flex-direction: column;
    font-size: 1rem;

    span {
      color: ${stylesContainer.colors.dark_grey};
    }

    svg {
      font-size: 2.6rem;
      color: black;
    }
  }

  img {
    max-height: 7rem;
    max-width: 24rem;
    margin: 0 auto;
    left: -2.6rem;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.6rem;
    color: ${stylesContainer.colors.dark_grey};

    strong {
      margin-left: 1.6rem;
    }

    svg {
      font-size: 2rem;
      margin-right: 0.8rem;
      color: ${stylesContainer.colors.magenta_pink};
    }
  }
`;

export const Services = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  span {
    font-size: 1.3rem;
    color: ${stylesContainer.colors.dark_blue};

    margin-bottom: 2rem;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      width: min-content;

      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: max-content;
        max-width: 10rem;

        span {
          font-size: 1rem;
          color: ${stylesContainer.colors.middle_grey};
          margin-bottom: 0.8rem;
        }

        svg {
          color: ${stylesContainer.colors.dark_blue};
          font-size: 1.8rem;
        }

        & + div {
          margin-left: 1.5rem;
        }
      }
    }

    svg {
      color: ${stylesContainer.colors.magenta_pink};
      font-size: 3rem;
    }
  }
`;

export const ProductsContainer = styled.div`
  margin-top: 2rem;
  height: 100%;
`;
