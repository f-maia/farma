import styled from 'styled-components';

import stylesConstants from '~/styles/constants';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 20px 75px rgba(0, 0, 0, 0.13);
  padding: 25px;

  width: 26rem;
  height: 18rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 3rem;

  button {
    font-size: 13px;
    color: #fff;
    border: 0;
    border-radius: 3px;
    background-color: #999;
    padding: 5px;
    width: 100px;

    &:first-child {
      background-color: ${stylesConstants.colors.dark_blue};
      margin-right: 5px;
    }
  }
`;
