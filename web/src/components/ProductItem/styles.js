import styled from 'styled-components';

import stylesConstants from '~/styles/constants';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  height: 12rem;
  width: 100%;

  border: 0.1rem solid #dfdfdf;
  border-radius: 0.5rem;

  padding: 1.6rem 0.8rem;

  & + div {
    margin-top: 2.5rem;
  }

  img {
    align-self: center;
    margin: auto 0.8rem auto 0;

    max-width: 12rem;
  }

  &:last-child {
    margin-bottom: 2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.3rem;
    color: ${stylesConstants.colors.dark_grey};
  }

  p {
    padding: 0;
    width: 100%;
    color: ${stylesConstants.colors.middle_grey};
    font-size: 1rem;
    line-height: 1.6rem;

    text-align: left;
  }

  button {
    padding: 0.5rem;
    background: ${stylesConstants.colors.light_grey};
    color: ${stylesConstants.colors.dark_blue};
    font-size: 1rem;
    border: none;
    border-radius: 0.2rem;
    margin-left: auto;
  }
`;
