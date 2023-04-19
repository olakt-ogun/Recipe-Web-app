import CustomImage from "./CustomImage"
import { Link, useLocation } from "react-router-dom"

export default function HeroScetion(){
    const images = [
        "/img/gallery/img_1.jpg",
        "/img/gallery/img_2.jpg",
        "/img/gallery/img_3.jpg",
        "/img/gallery/img_4.jpg",
        "/img/gallery/img_5.jpg",
        "/img/gallery/img_6.jpg",
        "/img/gallery/img_7.jpg",
        "/img/gallery/img_8.jpg",
        "/img/gallery/img_9.jpg",
        
    ]

    return(
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">What Are We About</h1>
                <p className="info">RecipeHub is a place where you can please your soul and tummy with delicious food recipes of all cuisine and our services are absolutely free. So start exploring now!!!</p>
                <Link to="/recipes" ><button className="btn">Explore now</button></Link>
            </div>
            <div className="col gallery">
                {images.map((src, index) =>(
                    <CustomImage key={index} imgSrc={src} pt={"90%"} />
                ))}
                
            </div>
        </div>
    )
}