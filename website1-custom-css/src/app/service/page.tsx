import Image from "next/image";
import React from "react";

const Service = () => {
    return (
        <div className="heading">
            
            <h1 className="main">We Offer Best Services</h1>
            <div className="weather">
                <Image src="/img6.jpg" alt="image"
                    width={150}
                    height={100}
                />
                <h3> Calculated Weather </h3>
                <p>Built Wicket longer admire do barton vanity itself do in it.</p>
            </div>
            
            <div className="weather1">
                <Image src="/plane.jpg" alt="image"
                    width={150}
                    height={150}
                />
                <h3> Best Flights </h3>
                <p>Engrossed listening. Park gate sell they west hard for the.</p>
            </div>

            <div className="weather2">
                <Image src="/img7.jpg" alt="image"
                    width={120}
                    height={100}
                />
                <h3> Local Events </h3>
                <p>Barton vanity itself do in it. Preferd to men it engrossed listening. </p>
            </div>

            <div className="weather3">
                <Image src="/img8.jpg" alt="image"
                    width={150}
                    height={100}
                />
                <h3> Customization </h3>
                <p>We deliver outsourced aviation services for military customers</p>
            </div>
            
        </div>
    )
}

export default Service;
