import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const Container = styled.header`
  grid-area: header;
  height: 120px;
  width: 100%;
  padding: 30px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${ ({theme}) => theme.COLORS.BACKGROUND_700};

  > section {
    display: flex;
    align-items: center;
    gap: 30px;
    margin: 0 auto;
    max-width: 1120px;

    h1 {
      color: ${({theme}) => theme.COLORS.ORANGE};
      font-size: 24px;
    }
  }

`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > div {
    margin-right: 10px;

    display: flex;
    flex-direction: column;
    line-height: 24px;

    strong {
      font-size: 18px;
      color: ${({theme}) => theme.COLORS.WHITE};
      width: 96px;
    }

    a {
      color: gray;
      text-align: right;
    }
  }

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }
`;


