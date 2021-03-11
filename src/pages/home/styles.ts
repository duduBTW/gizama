import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 0px 100px;
  top: -60px;
  position: relative;

  .spacer-lg {
    height: 200px;
  }

  .button {
    font-family: "Rubik", sans-serif;
    border-radius: 20px;
    border: none;
    outline: none;

    background: #3a3c64;
    padding: 20px 50px;
    width: 484px;

    color: white;
    font-size: 26px;
    letter-spacing: 4px;
  }

  header {
    height: 90vh;
    display: flex;
    .left {
      flex: 161;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h1 {
        font-family: "Rubik", sans-serif;
        font-size: 86px;
        color: #3b3f40;
        padding: 0px;
        margin: 0px;
        margin-top: 60px;
        margin-bottom: 120px;
      }

      p {
        color: #393939;
        font-size: 22px;
        padding: 0px;
        margin: 0px;
        margin-bottom: 120px;
      }
    }
    .spacer {
      flex: 53;
    }
    .rigth {
      z-index: -1;
      flex: 216;

      .imgcontainer {
        position: relative;

        right: -100px;
        height: 100%;
        width: calc(100% + 100px);
        left: 0px;
        img {
          height: 95%;
          max-width: 100%;
          object-fit: cover;
        }
        ::after {
          content: "";
          position: absolute;
          bottom: 0px;
          right: 0%;
          left: 20%;
          height: 5%;
          width: 80%;
          background: #c92d64;
        }
      }
    }
  }

  .info {
    display: flex;
    position: relative;

    ::before {
      content: "";
      height: 1px;
      background: #3a3c64;
      z-index: -1;
      position: absolute;
      top: 50%;
      right: -100px;
      left: -100px;
    }
    .left {
      background: white;
      flex: 161;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h2 {
        font-size: 44px;
        font-family: "Rubik", sans-serif;
        margin-bottom: 40px;
      }

      p {
        color: #393939;
        font-size: 22px;
        padding: 0px;
        margin: 0px;
      }

      ::before {
        content: "";
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: -40px;
        background: white;
        width: 40px;
      }
    }
    .spacer {
      flex: 53;
    }
    .rigth {
      flex: 216;
      .img-container {
        background: #c92d64;
        height: 500px;

        margin-left: 10px;
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }
  .contact {
    display: flex;

    .item {
      height: 477px;
      width: 517px;
      margin-left: 10px;

      /* background: pink; */
      border: 1px solid #3a3c64;

      .content {
        border: 1px solid #3a3c64;

        height: 100%;
        width: 100%;
        background: #fdf7f9;

        /* padding: 80px; */

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .head {
          display: flex;
          justify-content: space-between;

          label {
            padding: 80px 0px 0px 80px;

            display: flex;
            font-size: 20px;
            font-weight: 300;
            text-align: center;
            flex-direction: column;

            gap: 6px;
            span {
            }
          }

          .icon {
            padding-right: 80px;
            padding-top: 80px;
          }
        }

        h3 {
          font-family: "Rubik", sans-serif;
          font-size: 34px;

          letter-spacing: 6px;

          padding-bottom: 80px;
          padding-left: 80px;
          margin: 0px;
        }
      }
    }

    .left {
      flex: 161;
    }
    .spacer {
      flex: 53;
    }
    .rigth {
      flex: 216;
    }
  }

  .banner {
    display: flex;
    .banner-container {
      position: relative;
      width: 100%;
      height: 80vh;

      img {
        position: absolute;
        object-fit: cover;
        height: 100%;
        width: 100%;

        left: 0px;
        right: 0px;
      }
    }
  }
  .interested {
    display: flex;
    position: relative;

    ::before {
      content: "";
      height: 1px;
      background: #3a3c64;
      z-index: -1;
      position: absolute;
      top: 50%;
      right: -100px;
      left: -100px;
    }
    .left {
      flex: 161;

      background: white;

      display: flex;
      align-items: center;
      justify-content: center;

      .title {
        h4 {
          font-size: 54px;
          font-family: "Rubik", sans-serif;
          padding: 0px;
          margin: 0px;
        }
      }
    }
    .spacer {
      flex: 53;
    }
    .rigth {
      flex: 216;
    }
  }
`;
