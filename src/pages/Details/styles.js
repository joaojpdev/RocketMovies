import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
      grid-area: content;
      padding: 64px 0;
      overflow-y: scroll;
    }

    main::-webkit-scrollbar {
      width: 12px;
      height: 5px;
    }

    main::-webkit-scrollbar-thumb {
      background: orange;
      border-radius: 3px;
    }
`;

export const Content = styled.div`
  max-width: 1122px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  padding-bottom: 150px;

  a {
    color: ${({theme}) => theme.COLORS.ORANGE};
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .title {
    
    section {
      margin: 24px 0;
      
      display: flex;
      align-items: center;
      gap: 20px;

      h1 {
        font-size: 36px;
        font-weight: 500;
      }

      svg {
        color: ${({theme}) => theme.COLORS.ORANGE};
        margin-right: 2px;
      }
    }
    
    span {
      display: flex;
      align-items: center;
      gap: 5px;

      img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
      }

      svg {
        margin-left: 5px;
        color: ${({theme}) => theme.COLORS.ORANGE};
      }
      
    }

  }

  .tags {
    margin: 24px 0;
  }

  > p {
    font-size: 16px;
    text-align: justify;
  }

`;