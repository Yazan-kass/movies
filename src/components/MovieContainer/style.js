import styled from "styled-components";
import { Flex } from "../../theme/global";

export const ParentDiv = styled(Flex)`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

export const MovieImgDiv = styled(Flex)`
  width: 30%;
  height: 100%;
  img {
    width: 100%;
    object-fit: cover;
  }
`;
export const MovieDetailsDiv = styled(Flex)`
  flex-direction: column;
  justify-content: space-around;
  width: 70%;
  height: 100%;
  background: #00000080;
  padding-left: 25px;
  > div {
    color: #fff;
    display: flex;
    flex-direction: column;
    height:75%;
    justify-content: space-around;
    h1,h2{
      margin: 1px;
    }
    p{
       
        text-align: justify;
        width: 95%;
    }
  }
  > div > div {
    width: 25%;
    justify-content: space-between;

    h5 {
      margin: 1px;
      width: 20%;
    }
  }
`;
