import styled from 'styled-components';

import stylesConstants from '~/styles/constants';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  label {
    font-size: 1.6rem;
    color: ${stylesConstants.colors.dark_grey};
  }

  input {
    color: ${stylesConstants.colors.dark_grey};

    padding: ${stylesConstants.paddings.paddin_little};
    margin: 0;

    border: none;
    border-bottom: 1px solid #d2d0d0;

    &::placeholder {
      color: ${stylesConstants.colors.middle_grey};
    }
  }

  & + div {
    margin-top: 3rem;
  }

  ${(props) => props.customStyles}
`;
