import styled from "styled-components";

const main = "#3A3C64";

export const ModaolContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);

  .modal {
    width: 80vw;

    height: 80vh;

    @media only screen and (max-width: 1566px) {
      width: 95vw;
    }

    @media only screen and (max-width: 1000px) {
      height: 60vh;
    }

    display: flex;
    flex-direction: column;
    position: relative;

    .imag {
      position: absolute;
      bottom: 30px;
      top: 5%;
      left: 10%;
      right: 30%;
      @media only screen and (max-width: 1000px) {
        right: 0%;
      }

      @media only screen and (max-width: 1200px) {
        left: 0%;
      }
    }

    .imageFull {
      position: absolute;
      bottom: 0px;
      top: -5%;
      left: 60%;
      right: 0%;
      @media only screen and (max-width: 1000px) {
        display: none;
      }
    }

    .header {
      flex: 525;
      overflow: hidden;
      display: flex;

      .begin {
        flex: 32;
        background: ${main};
      }

      .middle {
        border-left: 1px solid white;
        flex: 1247;
        background: ${main};
        position: relative;

        .close {
          position: absolute;
          right: 0px;

          width: 100px;
          height: 100px;
          /* background: red; */
          z-index: 10;
          border-left: 1px solid white;

          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;

          img {
            width: 25%;

            pointer-events: none;
          }
        }

        /* border-bottom: 1px solid white; */
        .line {
          position: absolute;
          height: 1px;
          left: 0;
          right: 0;
          top: 100px;
          background: white;
        }
      }

      .end {
        margin-top: 100px;
        background: white;
        flex: 20;
      }
    }

    .empty {
      flex: 182;
      overflow: hidden;

      display: flex;

      .begin {
        flex: 32;
        border-right: 3px solid ${main};
      }

      .middle {
        margin-left: 60px;
        flex: 1247;
        background: white;
        margin-bottom: 60px;
      }

      .end {
        overflow: hidden;
        flex: 20;
        background: white;
        margin-bottom: 60px;
      }
    }

    .footer {
      z-index: 2;
      flex: 59;

      display: flex;

      .begin {
        flex: 32;
        background: ${main};
      }

      .middle {
        flex: 1247;
        background: ${main};
      }

      .end {
        flex: 20;
      }
    }
  }
`;
