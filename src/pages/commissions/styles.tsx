import styled from "styled-components";

export const CommissionsContainer = styled.div`
  padding: 40px 10vw;
  position: relative;

  @media only screen and (max-width: 1366px) {
    padding: 40px 50px;
  }
  .background1 {
    background: #fffafa;
    height: 227px;
    width: 70vw;
    position: absolute;
    top: 0px;
    z-index: -99;
  }

  header {
    min-height: 70vh;
    display: flex;
    position: relative;

    @media only screen and (max-width: 916px) {
      flex-direction: column;
    }

    .background3 {
      @media only screen and (max-width: 916px) {
        display: none;
      }

      background: #fffafa;
      height: 127px;
      width: 80vw;
      position: absolute;
      bottom: 0px;
      right: -100px;
      z-index: -99;
    }

    .exemple {
      position: relative;
      /* overflow: hidden; */
      flex: 3;
      /* background: #ff6464; */

      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      @media only screen and (max-width: 916px) {
        /* background: red; */
        height: 100px;
        width: auto;
      }

      ::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 1px;
        background: #3a3c64;
        z-index: -100;
      }

      .img {
        max-width: 100%;
        height: 100%;
        object-fit: cover;

        @media only screen and (max-width: 916px) {
          height: 100px;
          width: 100px;
        }
      }

      ::after {
        content: "";
        position: absolute;
        background: #fdf2f4;
        height: 60px;

        /* width: 100vw; */
        /* max-width: 100vw; */
        left: 0px;
        right: 0px;
        /* top: 30px; */
        bottom: -30px;
        @media only screen and (max-width: 916px) {
          height: 40px;
          bottom: -20px;
        }
        @media only screen and (max-width: 1366px) {
          left: -50px;
        }
        left: -10vw;
        z-index: 3;
      }
    }
    /* align-items: center;
    justify-content: center; */
  }

  .desc {
    @media only screen and (max-width: 1366px) {
      flex: 1;
    }
    @media only screen and (max-width: 916px) {
      margin-top: 80px;
      margin-bottom: 0px;
    }
    flex: 1.5;
    /* background: #f7ffd7; */

    display: flex;
    align-items: center;
    justify-content: center;
    .titleContainer {
      h1 {
        color: #292929;
        font-size: 36px;
        flex-direction: column;
        font-weight: bold;
        font-family: "Rubik", sans-serif;
        margin: 0px;
      }
      overflow: hidden;
    }

    .pContainer {
      p {
        font-size: 18px;
        border-left: 2px solid #3a3c64;
        padding: 0px 20px;
        color: #3b3f40;
      }
      overflow: hidden;
    }
  }

  .info {
    position: relative;
    .item-container {
      position: relative;
    }
    .item-container::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      /* @media only screen and (max-width: 1366px) {
        left: 75%;
      } */
      @media only screen and (max-width: 916px) {
        width: 0px;
      }

      left: 0;

      width: 1px;
      background: #3a3c64;
      z-index: 10;
    }
    width: 100%;

    h2 {
      padding: 0px;
      margin: 0px;

      font-weight: bold;
      border-bottom: 1px solid black;

      @media only screen and (max-width: 916px) {
        border-bottom: none;
      }

      /* ::after {
        letter-spacing: 0px;
        content: "base price";
        font-size: 22px;
        font-weight: lighter;
        padding-left: 20px;
      } */
    }
    .price {
      font-family: "Rubik", sans-serif;
      padding-bottom: 30px;
      padding-top: 30px;
      font-size: clamp(55px, 7.5vw, 65px);
      letter-spacing: 5px;

      display: flex;
      align-items: center;
      justify-content: space-between;
      background: white;
      z-index: 2;

      @media only screen and (max-width: 916px) {
        flex-direction: column;
        gap: 20px;
        align-items: flex-start;
        padding-left: 40px;
      }
    }

    .item {
      position: relative;
      display: flex;
      padding: 40px 40px;

      @media only screen and (max-width: 916px) {
        flex-direction: column;
        .porc {
          padding: 0px;
          padding-top: 40px;
        }
      }
    }

    .porc {
      font-family: "Rubik", sans-serif;
      /* border-left: 2px solid #3a3c64; */
      @media only screen and (max-width: 1366px) {
        flex: 1;
      }
      @media only screen and (max-width: 916px) {
        justify-content: flex-start;
      }

      flex: 1.5;
      padding: 0px;
      display: flex;
      align-items: center;
      justify-content: center;

      h4 {
        font-size: 44px;

        padding: 0px;
        margin: 0px;
        letter-spacing: 5px;
        font-weight: 400;
      }
    }

    .item:nth-child(even) {
      // here
      ::after {
        content: "";
        z-index: -1;
        position: absolute;
        left: -15vw;
        top: 0;
        /* right: 32.5%; */
        right: 0%;
        bottom: 0px;
        background: #fffafa;
      }

      ul {
        li {
          font-weight: 600;
        }
      }
    }
    ul {
      flex: 3;
      padding: 0px 40px 0px 0px;

      display: flex;
      flex-direction: column;
      gap: 20px;
      margin: 0px;

      li {
        list-style: none;
        color: #3b3f40;
        font-size: 16px;
      }
    }
  }

  .spacer-lg {
    height: 60px;

    @media only screen and (max-width: 916px) {
      height: 50px;
    }
  }

  .actions {
    @media only screen and (max-width: 916px) {
      display: none;
    }

    height: 100px;
    display: flex;
    .action {
      cursor: pointer;

      flex: 3;
      background: #3a3c64;
      margin-right: 20px;
      height: 100%;
      position: relative;
      ::after {
        content: "";
        z-index: -1;
        background: #c92d64;
        position: absolute;

        top: 10px;
        bottom: -10px;
        left: 10px;
        right: -10px;
      }

      display: flex;
      align-items: center;
      justify-content: center;

      color: white;
      font-size: 26px;

      b {
        letter-spacing: 2px;
        margin-right: 10px;
      }
    }

    @media only screen and (max-width: 1366px) {
      .separator {
        display: none;
      }
    }
    .separator {
      flex: 1.5;
    }
  }
`;
