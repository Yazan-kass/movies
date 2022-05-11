import { Flex } from "../../theme/global";
import { LeftBox, StyledCard, RightBox } from "./style";

function Card({ImgUrl, ActorName }) {
    return(
    <>
        <StyledCard>
          <Flex>
              <LeftBox>
                <img src={ImgUrl} alt=''/>
              </LeftBox>
              <RightBox>
                <p>{ActorName}</p>
              </RightBox>
          </Flex>
        </StyledCard>  
    </>);
    
}
export default Card;