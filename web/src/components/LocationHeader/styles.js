import styled from 'styled-components';

import stylesConstants from '~/styles/constants';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 14rem;
  padding: ${stylesConstants.paddings.paddin_X_large};

  box-shadow: 0 0.5rem 1.5rem #0000000f;

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    & + span {
      margin-top: 0.8rem;
    }

    strong {
      margin-left: 3px;
    }

    svg {
      color: ${stylesConstants.colors.magenta_pink};

      margin-right: 0.8rem;
    }

    img {
      margin-left: 0.8rem;
    }
  }
`;
