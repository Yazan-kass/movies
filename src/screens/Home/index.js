import Hero from '../../components/Hero';
import Movie from '../../components/Movie';
import NavBar from '../../components/Navbar';
import img1 from "../../assets/imge1.jpg";
import Movies from '../../components/Movies';
import Button from '../../components/Button';
function Home() {
    return(
        <>
        <NavBar/>
        <Hero titel={"Luci"} describtion={"On the Italian Riviera, an unlikely but strong friendship grows."}/>
        <Movies Title={'Popular Movies'}>
            <Movie ImgUrl={img1}/>
            <Movie ImgUrl={img1}/>
            <Movie ImgUrl={img1}/>
            <Movie ImgUrl={img1}/>
            <Movie ImgUrl={img1}/>
            <Movie ImgUrl={img1}/>
            <Movie ImgUrl={img1}/>
            <Movie ImgUrl={img1}/>
         </Movies>
         <Button Text={'Load more...'}/>
      </> 
    );
}
export default Home;