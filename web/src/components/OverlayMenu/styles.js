import styled from 'styled-components';

import stylesConstants from '~/styles/constants';

export const Container = styled.div`
  z-index: 9;

  position: fixed;
  top: 0;

  display: flex;
  justify-content: flex-end;

  width: 100vw;
  height: 100%;

  background-color: #00000045;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-color: white;

  padding: 3.8rem;

  width: 90%;
  max-width: 30rem;

  h2 {
    margin-top: 3rem;

    color: ${stylesConstants.colors.dark_grey};
  }

  ul {
    list-style: none;
    font-size: 1.8rem;
    display: flex;
    flex-direction: column;

    align-items: flex-start;
    justify-content: flex-start;

    li {
      & + li {
        margin-top: 4rem;
      }

      a {
        padding: 0;
        margin: 0;

        color: ${stylesConstants.colors.dark_grey};

        svg {
          color: ${stylesConstants.colors.dark_blue};
          margin-right: 0.8rem;
        }
      }
    }
  }

  div {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    button {
      border: none;
      background: none;
      font-size: 4rem;

      display: flex;
      align-items: center;
      justify-content: center;

      color: ${stylesConstants.colors.dark_grey};
    }
  }
`;
