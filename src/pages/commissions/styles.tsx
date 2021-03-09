import styled from "styled-components";

export const CommissionsContainer = styled.div`
  padding: 40px 10vw;

  @media only screen and (max-width: 1366px) {
    padding: 40px 50px;
  }

  header {
    min-height: 70vh;
    display: flex;

    @media only screen and (max-width: 916px) {
      flex-direction: column;
    }
    /* align-items: center;
    justify-content: center; */
  }

  .exemple {
    flex: 3;
    /* background: #ff6464; */

    display: flex;
    align-items: flex-end;
    justify-content: center;

    img {
      max-width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .desc {
    @media only screen and (max-width: 1366px) {
      flex: 1;
    }
    @media only screen and (max-width: 916px) {
      margin-top: 40px;
      margin-bottom: 0px;
    }
    flex: 2;
    /* background: #f7ffd7; */

    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      color: #000000;
      font-size: 40px;
      flex-direction: column;
      padding-left: 22px;
    }

    p {
      font-size: 20px;
      border-left: 2px solid #3a3c64;
      padding-left: 20px;
      color: #3b3f40;
    }
  }

  .info {
    position: relative;
    ::after {
      content: "";
      position: absolute;
      top: 25%;
      bottom: 0;
      @media only screen and (max-width: 1366px) {
        left: 75%;
      }
      @media only screen and (max-width: 916px) {
        width: 0px;
      }

      left: 60%;

      width: 1px;
      background: #3a3c64;
    }
    width: 100%;

    h2 {
      padding: 0px;
      margin: 0px;

      font-weight: bold;

      ::after {
        letter-spacing: 0px;
        content: "base price";
        font-size: 22px;
        font-weight: lighter;
        padding-left: 20px;
      }
    }
    .price {
      margin-bottom: 40px;
      font-size: clamp(60px, 8vw, 100px);
      letter-spacing: 15px;
    }

    .item {
      position: relative;
      display: flex;
      padding: 40px 0px;

      @media only screen and (max-width: 916px) {
        flex-direction: column;
        .porc {
          padding: 0px;
          padding-top: 20px;
        }
      }
    }

    .porc {
      /* border-left: 2px solid #3a3c64; */
      @media only screen and (max-width: 1366px) {
        flex: 1;
      }
      @media only screen and (max-width: 916px) {
        justify-content: flex-start;
      }

      flex: 2;
      padding: 0px;
      display: flex;
      align-items: center;
      justify-content: center;

      h4 {
        font-size: 50px;

        padding: 0px;
        margin: 0px;
        letter-spacing: 5px;
        font-weight: 400;
      }
    }
    .item:nth-child(odd) {
      ::after {
        content: "";
        z-index: -1;
        position: absolute;
        left: -15vw;
        top: 0;
        right: 0px;
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
    height: 70px;
  }

  .actions {
    @media only screen and (max-width: 916px) {
      display: none;
    }

    height: 100px;
    display: flex;
    .action {
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
      font-size: 30px;

      b {
        margin-right: 10px;
      }
    }

    @media only screen and (max-width: 1366px) {
      .separator {
        display: none;
      }
    }
    .separator {
      flex: 2;
    }
  }
`;
