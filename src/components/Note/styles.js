import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};

  border: none;
  border-radius: 10px;

  padding: 32px;
  margin-bottom: 24px;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({theme}) => theme.COLORS.WHITE};
  }

  .rating {
    color: orange;
    margin: 8px 0 15px;
    text-align: left;
  }

  > p {
    font-size: 16px;
    color: gray;
    max-width: 1057px;
    text-align: justify;
    color: ${({theme}) => theme.COLORS.GRAY_100};
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }
`;

