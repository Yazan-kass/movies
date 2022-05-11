import styled from "styled-components";
import { Flex } from "../../theme/global";
export const HeroDiv = styled(Flex)`
  width: 100%;
  height: 500px;
  background-repeat: no-repeat;
  background-image: url("https://www.wantedinrome.com/i/preview/storage/uploads/2021/12/italy-luca-animation-golden-globe-nomination-award.jpg");
  background-size: cover;
  background-size: 100% 110%;
  opacity: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 50px;
  :after {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }

  > div {
    height: 80%;
    z-index: 1;
  }
  div > div {
  }
  font-family: "Abel", sans-serif;
  letter-spacing: 1px;
`;
