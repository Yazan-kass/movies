import { Flex } from "../../theme/global";
import ProgressBar from "../ProgressBar";
import { MovieImgDiv, MovieDetailsDiv, ParentDiv } from "./style";

function MovieContainer({
  MovieImgUrl,
  Description,
  MovieName,
  SubTitle,
  DIRECTOR,
  Ratio,
}) {
  return (
    <ParentDiv>
      <MovieImgDiv>
        <img src={MovieImgUrl} alt=""></img>
      </MovieImgDiv>
      <MovieDetailsDiv>
        <div>
          <h1>{MovieName}</h1>
          <h3>{SubTitle}</h3>
          <p>{Description}</p>
          <h2>IMDB RATING</h2>
          <Flex>
            <ProgressBar Ratio={Ratio} />
            <h5>{Ratio / 10}</h5>
          </Flex>
          <h2>DIRECTOR</h2>
          <h4>{DIRECTOR}</h4>
        </div>
      </MovieDetailsDiv>
    </ParentDiv>
  );
}

export default MovieContainer;
