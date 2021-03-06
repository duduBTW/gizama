import styled from "styled-components";
interface pointerModal {
  pointerEvents: "none" | "auto";
}

export const PortfolioContainer = styled.div`
  position: relative;

  //@ts-ignore
  pointer-events: ${(props: pointerModal) => props.pointerEvents};

  h1 {
    font-family: "Rubik", sans-serif;
    font-size: 42px;
  }

  .header {
    height: 120px;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0px 25vw;
    @media only screen and (max-width: 980px) {
      padding: 10px 40px;
    }
    overflow: hidden;
  }

  .background1 {
    opacity: 0.5;
    background: #fff7f9;
    height: 107px;
    width: 70vw;
    position: fixed;
    top: 0px;
    z-index: -99;
  }
  .background2 {
    opacity: 0.5;
    background: #fff7f9;
    height: 107px;
    width: 70vw;
    right: 0;
    position: fixed;
    top: 50vh;
    transform: translateY(-50%);
    z-index: -99;
  }
  .background3 {
    opacity: 0.5;
    background: #fff7f9;
    height: 107px;
    width: 70vw;
    position: fixed;
    bottom: 0;
    z-index: -99;
  }

  .container-content {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;
    /* grid-template-columns: 382px 382px; */

    @media only screen and (max-width: 980px) {
      margin: 40px;
    }

    gap: 100px;

    margin: 60px 25vw;

    .port-item {
      flex-grow: 1;
      min-width: 382px;
      height: 382px;
      background: #c92d64;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;

      cursor: pointer;
      pointer-events: none;

      img {
        position: absolute;
        width: 100%;
        height: 100%;

        object-fit: cover;
        pointer-events: painted;
      }

      .hover {
        display: flex;
        align-items: center;
        justify-content: center;

        margin: auto;
        position: absolute;
        opacity: 0.6;
        width: 100%;
        height: 100%;
        background: rgba(201, 45, 100, 0.9);
        z-index: 3;

        color: white;
        font-size: 32px;
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

    @media only screen and (max-width: 980px) {
      left: 20px;
    }
  }

  .divider-content-first {
    position: absolute;
    top: 120px;
    top: 120px;
    left: 20vw;
    height: 700px;
    width: 1px;
    background: #3a3c64;

    @media only screen and (max-width: 980px) {
      left: 20px;
    }
  }

  .divider-content-second {
    position: absolute;
    top: 0px;
    left: 19vw;
    height: 700px;
    width: 1px;
    background: #3a3c64;

    @media only screen and (max-width: 980px) {
      left: 10px;
    }
  }
`;
