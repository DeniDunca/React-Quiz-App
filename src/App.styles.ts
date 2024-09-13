import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/taci.png";

export const GlobalStyle = createGlobalStyle`
    html {
    height: 100%;

    }

    body{
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flax
        justify-content: center;
    }
    
    *{
        box-sizing: border-box;
        font-family: "SUSE", system-ui;
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #000;
    font-size: 2rem;
    margin: 0;
  }

  .start,
  .next {
    cursor: pointer;
    background: #ffcc91;
    border: 2px solid #d38558;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`;
