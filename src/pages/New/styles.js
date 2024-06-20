import styled from "styled-components";

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
    overflow-y: auto;
  }

   main::-webkit-scrollbar {
    width: 8px;
  }

   main::-webkit-scrollbar-thumb {
    background: orange;
    border-radius: 3px;
  }
`;

export const Form = styled.form`
  max-width: 1137px;
  margin: 40px auto;

  > header {
    a {
      color: ${({theme}) => theme.COLORS.ORANGE};
    }

    h1 {
      margin: 24px 0 40px;
    }
  }

  .tags {
    display: flex;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;
  }

  .col-2 {
    display: flex;
    align-items: center;
    gap: 40px;

    button:nth-child(1) {
      background-color: black;
      color: orange;
    }
  }

`;