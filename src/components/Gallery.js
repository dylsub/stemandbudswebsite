
import "./Gallery.css"
import one from "../static/1.png";
import two from "../static/2.jpg";
import three from "../static/3.webp";
import four from "../static/4.png";
import five from "../static/5.jpg";
import six from "../static/6.jpg";
import seven from "../static/7.jpg";
import eight from "../static/8.jpg";

function Gallery() {
    return <div className="gallery">
        <div className="gallery__row">
            <div><img src={one}></img></div>
            <div><img src={two}></img></div>
            <div><img src={three}></img></div>
            <div><img src={four}></img></div>
        </div>
        <div className="gallery__row">
            <div><img src={five}></img></div>
            <div><img src={six}></img></div>
            <div><img src={seven}></img></div>
            <div><img src={eight}></img></div>
        </div>
    </div>
}

export default Gallery;