import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: 
    "header"
    "content";
    
    main::-webkit-scrollbar {
      width: 8px;
    }

    main::-webkit-scrollbar-thumb {
      background: orange;
      border-radius: 3px;
    }

    > main {
      grid-area: content;
      padding: 64px 0;
      overflow-y: scroll;

      max-width: 1140px;
      margin: 0 auto;

      .top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 45px 0;

        h1 {
          font-size: 32px;
          font-weight: 400;
        }

        button {
          width: 207px;
        }
      }
    }

`;

export const NewNote = styled(Link)`
  max-width: 207px;
  background-color: ${({theme}) => theme.COLORS.ORANGE};
  color: ${({theme}) => theme.COLORS.BACKGRUOUND_900};

  height: 56px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 14px 32px;
`;