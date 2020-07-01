import styled, { css } from 'styled-components';

import stylesConstants from '~/styles/constants';

export const Container = styled.div`
  position: fixed;
  overflow: hidden;
  bottom: 0;

  height: 7rem;

  width: 100%;
  padding: 10px 0px;
  box-shadow: 0px -10px 15px #f4f4f4;

  ul {
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export const Item = styled.li`
  a {
    font-size: 3.2rem;
    display: block;
    color: ${stylesConstants.colors.dark_blue};
  }

  button {
    font-size: 3.2rem;
    display: block;
    color: ${stylesConstants.colors.dark_blue};
    border: none;
    background: transparent;
  }

  &:hover {
    transform: scale(1.3);
    color: ${stylesConstants.colors.magenta_pink};
    transition: ${stylesConstants.animations.icon_transition};

    a {
      color: ${stylesConstants.colors.magenta_pink};
    }

    button {
      color: ${stylesConstants.colors.magenta_pink};
    }
  }

  ${(props) =>
    props.selected &&
    css`
      a {
        color: ${stylesConstants.colors.magenta_pink};
      }

      button {
        color: ${stylesConstants.colors.magenta_pink};
      }
    `}
`;
