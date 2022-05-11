import { InnerContener } from "../../theme/global";
import { HeroBox, HeroPragraph, HeroTitel } from "./style";

function Hero({titel,describtion}) {
    return(
        <HeroBox>
            <InnerContener>
                <HeroTitel>{titel}</HeroTitel>
                <HeroPragraph>{describtion}</HeroPragraph> 
            </InnerContener>
        </HeroBox>
    );
}
export default Hero;