import styled from "styled-components";
import { Button } from "../home/styles";

export const ButtonContact = styled(Button)`
  width: 100%;
`;

export const ContactContainer = styled.div`
  padding: 0px 15vw;

  @media only screen and (max-width: 1366px) {
    padding: 0px 100px;
  }

  @media only screen and (max-width: 1166px) {
    padding: 0px 50px;
  }

  .contact {
    margin-top: 100px;
    position: relative;
    margin-bottom: 0px;

    display: flex;
    @media only screen and (max-width: 1000px) {
      flex-direction: column;
    }

    header {
      flex: 428;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      h1 {
        padding: 0px;
        margin: 0px;
        margin-bottom: 40px;
        font-size: 60px;
        font-weight: bold;
        font-family: "Rubik", sans-serif;
      }

      p {
        font-size: 18px;
        color: #292929;
        margin: 0px;
        @media only screen and (max-width: 1000px) {
          margin-bottom: 40px;
        }
      }
    }

    .spacer {
      flex: 100;
    }

    .rig {
      flex: 528;

      form {
        display: flex;
        flex-direction: column;
        gap: 36px;

        .soc {
          display: flex;
          flex-wrap: nowrap;
          width: 100%;

          gap: 36px;

          input {
            flex: 1;
            width: 100%;
          }
        }

        textarea,
        input {
          outline: none;

          -moz-box-sizing: border-box;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;

          width: 100%;

          padding: 20px;
          font-size: 18px;
          border: 1px solid #3a3c64;
          border-radius: 10px;

          resize: vertical;
        }
      }
    }

    .input {
      position: relative;

      input {
        max-width: 100%;
      }

      label {
        position: absolute;
        top: -20px;
        left: 10px;
        padding: 10px;
        background: white;
        font-size: 14px;
        font-family: "Rubik", sans-serif;
        letter-spacing: 2px;
        pointer-events: none;
      }
    }

    ::after {
      content: "";
      position: absolute;
      right: -15vw;
      @media only screen and (max-width: 1366px) {
        right: -100px;
      }

      @media only screen and (max-width: 1166px) {
        right: -50px;
      }

      @media only screen and (max-width: 1000px) {
        left: -50px;
      }

      bottom: -10%;
      top: 60%;
      z-index: -1;
      left: 0;
      background: #fdf2f4;
    }
  }

  .spcaer-lg {
    height: 100px;
  }

  .contact-soc-container {
    h2 {
      font-family: "Rubik", sans-serif;
      font-size: 22px;
    }

    .contact-soc {
      display: flex;
      @media only screen and (max-width: 1000px) {
        flex-direction: column;
        gap: 40px;
      }

      .left {
        flex: 428;
      }

      .spacer {
        flex: 100;
      }

      .spc {
        flex: 528;
        display: flex;
        gap: 60px;
      }
    }
  }
`;
