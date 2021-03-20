import { motion } from "framer-motion";
import styled from "styled-components";

export const ItemStyle = styled(motion.div)`
  cursor: pointer;
  height: 477px;
  width: 517px;

  @media only screen and (max-width: 1366px) {
    width: 100%;
    height: 400px;
  }

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
        pointer-events: none;
        padding: 80px 0px 0px 80px;

        @media only screen and (max-width: 1366px) {
          padding: 40px 0px 0px 40px;
        }
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
        @media only screen and (max-width: 1366px) {
          padding-right: 40px;
          padding-top: 40px;
        }
        padding-right: 80px;
        padding-top: 80px;
      }
    }

    h3 {
      font-family: "Rubik", sans-serif;
      font-size: 34px;

      letter-spacing: 6px;

      @media only screen and (max-width: 1366px) {
        padding-bottom: 40px;
        padding-left: 40px;
      }

      padding-bottom: 80px;
      padding-left: 80px;
      margin: 0px;
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
`;

export const Button = styled(motion.button)`
  font-family: "Rubik", sans-serif;
  border-radius: 20px;
  border: none;
  outline: none;

  cursor: pointer;

  background: #3a3c64;
  padding: 20px 50px;
  width: 484px;

  color: white;
  font-size: 26px;
  letter-spacing: 4px;

  @media only screen and (max-width: 1366px) {
    width: 100%;
  }

  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.15);
`;
export const HomeContainer = styled.div`
  padding: 0px 100px;
  top: -60px;
  position: relative;

  @media only screen and (max-width: 1366px) {
    padding: 0px 30px;
  }

  .spacer-lg {
    height: 150px;

    @media only screen and (max-width: 1366px) {
      height: 100px;
    }
  }

  .button {
    font-family: "Rubik", sans-serif;
    border-radius: 20px;
    border: none;
    outline: none;

    cursor: pointer;

    background: #3a3c64;
    padding: 20px 50px;
    width: 484px;

    color: white;
    font-size: 26px;
    letter-spacing: 4px;

    @media only screen and (max-width: 1366px) {
      width: 100%;
    }

    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.15);
  }

  header {
    height: 90vh;
    display: flex;

    @media only screen and (max-width: 1366px) {
      flex-direction: column;
    }

    .left {
      flex: 161;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .h1-container {
        overflow: hidden;
        h1 {
          font-family: "Rubik", sans-serif;

          font-size: clamp(60px, 7.5vw, 42px);

          color: #3b3f40;
          padding: 0px;
          margin: 0px;
          margin-top: 100px;
          margin-bottom: 100px;

          @media only screen and (max-width: 1366px) {
            margin-bottom: 60px;
            margin-top: 120px;
          }
        }
      }

      .p-container {
        overflow: hidden;
        p {
          color: #393939;

          font-size: clamp(16px, 2.5vw, 22px);

          padding: 0px;
          margin: 0px;
          margin-bottom: 100px;

          @media only screen and (max-width: 1366px) {
            margin-bottom: 60px;
          }
        }
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
        @media only screen and (max-width: 1366px) {
          width: calc(100% + 30px);
          max-height: 500px;

          margin-top: 40px;
        }

        left: 0px;
        img {
          height: 95%;

          width: 100%;
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

    @media only screen and (max-width: 1366px) {
      flex-direction: column;
    }

    .line {
      @media only screen and (max-width: 1366px) {
        height: 0px;
        width: 0px;
      }
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
      height: auto;

      @media only screen and (max-width: 1366px) {
        margin-bottom: 60px;
      }

      .title-container {
        overflow: hidden;
        h2 {
          font-size: 44px;
          font-family: "Rubik", sans-serif;
          margin-bottom: 40px;
        }
      }

      .p-container {
        overflow: hidden;

        p {
          color: #393939;
          font-size: 20px;
          line-height: 30px;
          padding: 0px;
          margin: 0px;
          padding-right: 40px;
        }
      }

      ::before {
        content: "";
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: -40px;
        background: white;
        width: 40px;

        @media only screen and (max-width: 1366px) {
          display: none;
        }
      }
    }
    .spacer {
      flex: 53;
    }
    .rigth {
      flex: 216;
      .img-container {
        background: #c92d64;

        @media only screen and (max-width: 1366px) {
          height: 300px;
        }

        height: 500px;
        position: relative;

        margin-left: 10px;
        .img {
          background-image: url("https://www.live2d.com/wp/wp-content/themes/cubism_wpml/img/index-function-img_01.jpg");
          background-position: center;
          position: absolute;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
      }
    }
  }
  .contact {
    display: flex;

    @media only screen and (max-width: 1366px) {
      flex-direction: column;
    }

    @media only screen and (max-width: 1366px) {
      gap: 20px;
    }

    .item {
      height: 477px;
      width: 517px;

      @media only screen and (max-width: 1366px) {
        width: 100%;
        height: 400px;
      }

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

            @media only screen and (max-width: 1366px) {
              padding: 40px 0px 0px 40px;
            }
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
            @media only screen and (max-width: 1366px) {
              padding-right: 40px;
              padding-top: 40px;
            }
            padding-right: 80px;
            padding-top: 80px;
          }
        }

        h3 {
          font-family: "Rubik", sans-serif;
          font-size: 34px;

          letter-spacing: 6px;

          @media only screen and (max-width: 1366px) {
            padding-bottom: 40px;
            padding-left: 40px;
          }

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
    height: 600px;
    position: relative;
    /* overflow: hidden; */

    .banner-container {
      position: absolute;
      overflow: hidden;
      height: 100%;

      background: #fdf7f9;
      left: -100px;
      right: -100px;
      gap: 40px 30px;

      display: flex;
      flex-direction: column;
      flex-wrap: wrap;

      align-items: center;
      justify-content: center;

      /* left: -100px; */
      top: -100px;

      /* transform: scale(1.3); */
      margin: 100px 0px;

      img {
        margin-bottom: -30px;
        border-radius: 30px;

        height: 220px;
        object-fit: cover;
        width: 250px;

        min-width: 350px;
        transform: rotate(15deg);

        /* :nth-child(even) {
          transform: rotate(15deg);
        } */

        transition: all 0.2s;
        box-shadow: 0 14px 28px rgba(201, 45, 100, 0.15),
          0 10px 10px rgba(201, 45, 100, 0.15);

        :hover {
          transform: scale(1.2);
          z-index: 2;
          transition: all 0.2s;
          box-shadow: 0 14px 28px rgba(201, 45, 100, 0.25),
            0 10px 10px rgba(201, 45, 100, 0.25);
          border-radius: 10px;
        }
      }
      /* 
      img {
        position: absolute;
        object-fit: cover;
        height: 100%;
        width: 100%;

        left: 0px;
        right: 0px;
      } */
    }
  }
  .interested {
    display: flex;
    position: relative;

    @media only screen and (max-width: 1366px) {
      flex-direction: column;
    }

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
      @media only screen and (max-width: 1366px) {
        margin-bottom: 40px;
      }
    }
    .spacer {
      flex: 53;
    }
    .rigth {
      flex: 216;
      @media only screen and (max-width: 1366px) {
        margin-top: 40px;
      }
    }
  }
`;
