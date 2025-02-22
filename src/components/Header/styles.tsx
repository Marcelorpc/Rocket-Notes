import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 10.5em;
  width: 100%;

  border-bottom-width: 0.1em;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme}) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;

  padding: 0 8em;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 5.6em;
    height: 5.6em;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 1.6em;
    line-height: 2.4em;

    span {
      font-size: 1.4em;
      color: ${({ theme}) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 1.8em;
      color: ${({ theme}) => theme.COLORS.WHITE};
    }
  }
`;