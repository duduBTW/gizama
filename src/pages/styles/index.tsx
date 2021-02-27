import styled from "styled-components";

export const PortfolioContainer = styled.div`
  position: relative;

  .header {
    height: 120px;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0px 25vw;
    overflow: hidden;
    margin-bottom: 60px;
  }

  .background1 {
    background: #fdf7f9;
    height: 107px;
    width: 70vw;
    position: fixed;
    top: 0px;
    z-index: -99;
  }
  .background2 {
    background: #fdf7f9;
    height: 107px;
    width: 70vw;
    right: 0;
    position: fixed;
    top: 50vh;
    transform: translateY(-50%);
    z-index: -99;
  }
  .background3 {
    background: #fdf7f9;
    height: 107px;
    width: 70vw;
    position: fixed;
    bottom: 0;
    z-index: -99;
  }

  .container-content {
    display: grid;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: 382px 382px;

    @media only screen and (max-width: 980px) {
      grid-template-columns: 382px;
    }

    gap: 100px;
    margin: 0px 25vw;

    .port-item {
      height: 382px;
      background: #c92d64;
      position: relative;
      cursor: pointer;
      pointer-events: none;

      img {
        position: absolute;
        width: 100%;
        height: 100%;

        object-fit: cover;
        pointer-events: painted;
      }
    }
  }

  // Dividers
  .divider-port {
    position: absolute;
    top: 120px;
    left: 20vw;
    right: 0;
    height: 1px;
    background: #3a3c64;
  }

  .divider-content-first {
    position: absolute;
    top: 120px;
    left: 20vw;
    height: 700px;
    width: 1px;
    background: #3a3c64;
  }

  .divider-content-second {
    position: absolute;
    top: 0px;
    left: 19vw;
    height: 700px;
    width: 1px;
    background: #3a3c64;
  }
`;
