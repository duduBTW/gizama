import styled from "styled-components";

export const NavContainer = styled.div`
  position: relative;
  z-index: 10;
  height: 48px;
  max-width: 75vw;
  background: #3a3c64;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;

  @media only screen and (max-width: 1366px) {
    max-width: 100vw;
  }

  .title {
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 2px;
    padding-left: 30px;

    font-family: "Rubik", sans-serif;
  }

  .item {
    font-size: 14px;

    display: flex;
    align-items: center;
    margin-right: 20px;
    height: 100%;

    .link {
      cursor: pointer;
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0px 20px;
      color: white;
      text-decoration: none;
      position: relative;
      overflow: hidden;

      .hoverEffect {
        position: absolute;
        height: 5px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        background: #c92d93;
      }
    }
  }
`;
