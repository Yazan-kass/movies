import { InnerContener } from "../../theme/global";
import { MovieName } from "../OtherNav/style";
import { TitelSection } from "./style";

function OtherNav({text}) {
    return(
        <MovieName>
            <InnerContener>
                <TitelSection>Back \ {text}</TitelSection> 
            </InnerContener>
        </MovieName>
    );
}
export default OtherNav;