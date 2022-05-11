import { FlexContener } from "../../theme/global";
import { HeroDiv } from "./style";

function HeroDetail({ ...props}) {
  return (
    <HeroDiv>
      <FlexContener>
        {props.children}
      </FlexContener>
    </HeroDiv>
  );
}

export default HeroDetail;
