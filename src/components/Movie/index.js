import {MovieDiv} from './style'
function Movie({ ImgUrl }) {
  return (
    <MovieDiv>
        <img src={ImgUrl} alt=''/>
    </MovieDiv>
  );
}

export default Movie;