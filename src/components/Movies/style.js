import styled from "styled-components";
import { InnerContener } from "../../theme/global";

export const MoviesDiv = styled(InnerContener)`
  flex-direction: column;
  justify-content: space-between;
  /* height: 580px; */
  align-items: flex-start;
  h1 {
    font-family: sans-serif;
    color: #000;
    word-spacing:4px
    
  }
  > div {
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 20px;
  }
  > div > div {
    width: 24%;
    margin-bottom: 10px;
  }
  margin-bottom: 50px;
`;