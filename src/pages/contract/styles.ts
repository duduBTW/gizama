import styled from "styled-components";

export const ContractContainer = styled.div`
  .progress {
    height: 100px;
    width: 25px;
    position: fixed;
    top: 90px;
    right: 6vw;
    background: #fdf7f9;

    @media only screen and (max-width: 1180px) {
      transform: rotate(90deg);
      z-index: 10;
      width: 5px;
      right: 60px;
      top: 10px;
    }

    .subtitle {
      @media only screen and (max-width: 1180px) {
        display: none;
      }
    }
  }
`;
