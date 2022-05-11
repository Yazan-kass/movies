import styled from 'styled-components';

export const HeroBox = styled.div`
    display: flex;
    width: 100%;
    height: 450px;
    position: relative;
    background-image: url("https://www.wantedinrome.com/i/preview/storage/uploads/2021/12/italy-luca-animation-golden-globe-nomination-award.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 100% 110%;
    :after {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }
    > div{
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: flex-start;
  }
  div div {
    display: flex;
    flex-direction: column;
  }
`;
export const HeroTitel = styled.h3`
    font-size: 20px;
    font-weight: bold;
    font-family: sans-serif;
    color: #fff;
    justify-content:end;
    z-index: 1;

`;


export const HeroPragraph = styled.p`
    width: 50%;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    font-family: sans-serif;
    justify-content:end;
    z-index: 1;
`;