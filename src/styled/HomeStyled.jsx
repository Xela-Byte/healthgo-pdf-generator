import styled from "styled-components";

export const HomeContent = styled.div`
  width: 100%;
  min-width: 960px;
  height: 100vh;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  & > .name,
  & > .course {
    position: fixed;
  }
  & > .name {
    font-size: 5vh;
    top: 41vh;
    left: 20vw;
    color: #07a53d;
  }
  & > .course {
    font-size: 4vh;
    top: 59vh;
    left: 20vw;
  }
`;

export const HomeBtn = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  scale: 2;
`;
