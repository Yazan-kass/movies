import { FlexContener} from "../../theme/global";
import { MoviesDiv } from "./style";



function Movies({Title, ...props }) {
    return(
   
    <MoviesDiv>
      <h1>{Title}</h1>
      <FlexContener>{props.children}</FlexContener>
    </MoviesDiv>
 
    );
}
export default Movies;