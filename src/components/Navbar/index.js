import { FlexContener } from "../../theme/global";
import { Heder, TitelHeader } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
    return(
        <Heder>
            <FlexContener>
                <FontAwesomeIcon icon={faFilm} size="2x" color="white"/>
                <TitelHeader>React<span>Movies</span></TitelHeader>
            </FlexContener>
        </Heder>
    );

}
export default NavBar;