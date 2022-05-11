import styled from 'styled-components';

export const StyledCard = styled.div`
    width: 23%;
    height: 150px;
    > div{
        justify-content: start;
        align-items: center;
        height: 100%;
        width: 100%;
    }
`;
export const LeftBox = styled.div`
    width: 40%;
    height: 100%;
    > img{
        width: 100%;
        height: 100%;
    }
    
`;
export const RightBox = styled.div`
    width: 60%;
    height: 100%;
    background-color: #383838;
    > p{
        color: white;
        margin-top: 15px;
        margin-left: 10px;
        font-size: 15px;
        font-family: sans-serif;
        font-weight: bold;
        letter-spacing: 1px;
    }
`;