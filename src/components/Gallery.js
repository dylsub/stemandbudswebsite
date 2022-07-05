
import "./Gallery.css"
import one from "../static/1.png";
import two from "../static/2.png";
import three from "../static/3.png";
import four from "../static/4.png";
import five from "../static/5.png";
import six from "../static/6.png";
import seven from "../static/7.png";
import eight from "../static/8.png";
import paperbordertop from "../static/paperbordertop.png";

function Gallery() {
    return <div className="gallery">
        <img className="border__top" src={paperbordertop}></img>
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
        <img className="border__bottom" src={paperbordertop}></img>
    </div>
}

export default Gallery;