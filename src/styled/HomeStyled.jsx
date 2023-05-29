import styled from "styled-components";

export const HomeContent = styled.div`
  width: 890px;
  height: 626px;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }

  & > .name,
  & > .course,
  & > .date {
    position: fixed;
  }
  & > .name {
    font-size: 25px;
    top: calc(626px / 2.3);
    left: calc(890px / 10);
    color: #07a53d;
  }
  & > .course {
    font-size: 20px;
    top: calc(626px / 1.65);
    left: calc(890px / 10);
  }
  & > .date {
    color: grey;
    font-size: 20px;
    top: calc(626px / 1.46);
    left: calc(890px / 10);
  }
`;

export const HomeBtn = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  scale: 2;
`;
