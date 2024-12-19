import Image from "next/image";
import React from "react";

const About = () => {
    return (
        <div className="travel">
            <h1>What People Say <br /> About Us.</h1>

            <div className="img">
                <Image 
                    src="/img5.jpg" alt="image"
                    width={150}
                    height={150}
                />
            </div>
            <div className="para">
                <p>“On the Windows talking painted pasture yet its </p> 
                <p>express parties use. Sure last upon he same as</p>
                <p>knew next. Of believed or diverted no.”</p>
            </div>
            
            <div className="card">
                <div>
                    <Image
                        src="/img9.jpg" alt="logo"
                        width={100}
                        height={70}
                    />
                </div>
                <div>
                    <Image
                        src="/img10.jpg" alt="logo"
                        width={100}
                        height={70}
                    />
                </div>
                <div>
                    <Image
                        src="/img11.jpg" alt="logo"
                        width={100}
                        height={70}
                    />
                </div>
                <div className="card1">
                    <Image
                        src="/img12.jpg" alt="logo"
                        width={100}
                        height={30}
                    />
                </div>
                <div className="card1">
                    <Image
                        src="/img13.jpg" alt="logo"
                        width={100}
                        height={30}
                    />
                </div>
            </div>
                
        </div>

    )
}

export default About;
