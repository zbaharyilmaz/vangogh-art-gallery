import Artwork from "../components/Artworks";
import "./Homepage.scss";

const Homepage = ({artwork}) => {
  return (
    <div className="home">
        <h1 className="header">Art Gallery</h1>
        <h3>Exploring Van Gogh's art</h3>
        <div className="area">
            {
            artwork.map((work)=>(
            <Artwork key={work.id} work={work}/>  
            ))
        }
        </div>
      
    </div>
  );
};

export default Homepage;