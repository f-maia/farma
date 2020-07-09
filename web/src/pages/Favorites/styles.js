import styled from 'styled-components';

import stylesContainer from '~/styles/constants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
`;

export const Content = styled.div`
  padding: 0 2.5rem;

  height: 100%;
  width: 100%;

  overflow-y: auto;
`;

export const TitleContainer = styled.div`
  margin-top: -2.5rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    padding: 0;
    margin: 1rem auto 2rem;
  }
`;

export const PharmaciesContainer = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: ${stylesContainer.colors.middle_grey};
    font-size: 1rem;
    margin: 3rem 0;
  }
`;
