import Card from "../../components/Card";
import NavBar from "../../components/Navbar";
import OtherNav from "../../components/OtherNav";
import img1 from "../../assets/imge1.jpg";
import img2 from "../../assets/img2.jpg";
import Movies from "../../components/Movies";
import HeroDetail from "../../components/HeroDetail";
import MovieContainer from "../../components/MovieContainer";


function Details(params) {
  return(
      <>
      <NavBar/>
      <OtherNav text={"Movie Name"}/>
      <HeroDetail>
        <MovieContainer
          MovieImgUrl={img2}
          MovieName={"Movie Name"}
          SubTitle={"Polt"}
          Description={`Luca and his friend Alberto experience an unforgettable summer on the Italian Riviera, But all the fun threatened by a deeply-held secret: tho are sea monsters from another world just below the water's surface.`}
          Ratio={"82"}
          DIRECTOR={"Enrico Casarosa"}
        ></MovieContainer>
      </HeroDetail>
      <Movies Title={'Actor'}>
            <Card ImgUrl={img1} ActorName={"Actor Name"}/>
            <Card ImgUrl={img1} ActorName={"Actor Name"}/>
            <Card ImgUrl={img1} ActorName={"Actor Name"}/>
            <Card ImgUrl={img1} ActorName={"Actor Name"}/>
            <Card ImgUrl={img1} ActorName={"Actor Name"}/>
         </Movies>
      
      </>
  );  
}
export default Details;