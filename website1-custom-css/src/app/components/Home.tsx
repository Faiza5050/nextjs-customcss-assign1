import React from "react";
import Image from "next/image";

const Home = () => {
    return (
        <div className="main-container">
            
            
            <p className="text">Best Destinations around the world</p>
            <h1 className="head">Travel, enjoy <br /> and live a new <br /> and full life</h1>
            <div className="p1">
                <p>Built Wicket longer admire do barton vanity itself do in it.
                    Preferred to sportsmen it engrossed listening. Park gate
                    sell they west hard for the.
                </p>
            </div>

            <section className="hero" style={{backgroundImage: "url(traveller1.jpg)"}}>
                <Image src="/plane.jpg" alt="plane"
                    width={50}
                    height={100}
                    className="plane"
                />
                <Image src="/plane.jpg" alt="plane"
                    width={50}
                    height={100}
                    className="plane2"
                />
            </section>

            <div className="container">
                <button className="btn">Find out more</button>
                <Image className="play" src="/play.jpg" alt="play button"
                    width={50}
                    height={100}
                />
                <h3 className="demo">Play Demo</h3>
            </div>
        </div>   
    )
}

export default Home;
