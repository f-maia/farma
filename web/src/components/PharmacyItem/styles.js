import styled from 'styled-components';
import { Link } from 'react-router-dom';

import stylesConstants from '~/styles/constants';

export const Container = styled(Link)`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  height: 16rem;
  width: 100%;

  border: 0.1rem solid #dfdfdf;
  border-radius: 0.5rem;

  padding: 1.6rem 0.8rem;

  & + a {
    margin-top: 2.5rem;
  }

  img {
    align-self: center;
    margin: auto 0.8rem auto 0;

    max-width: 10rem;
  }

  & > svg {
    color: ${stylesConstants.colors.magenta_pink};
    font-size: 2rem;
    margin-left: 0.8rem;
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
  max-width: 13rem;
  height: 100%;

  & > * {
    width: 100%;
    padding: 0;
  }

  h3 {
    color: ${stylesConstants.colors.dark_blue};
    font-size: 1.6rem;
    text-align: left;

    padding-bottom: 0.35rem;
    border-bottom: 0.1rem solid #dfdfdf;
    margin-bottom: 0.35rem;
  }

  p {
    color: ${stylesConstants.colors.middle_grey};
    font-size: 1rem;
    line-height: 1.6rem;

    text-align: left;
  }

  ul {
    display: flex;
    align-items: center;
    flex-direction: row;
    list-style: none;

    li {
      color: ${(props) =>
        props.favorite
          ? stylesConstants.colors.magenta_pink
          : stylesConstants.colors.dark_blue};
      font-size: 1rem;

      & + li {
        margin-left: 2.3rem;
      }
    }
  }
`;
