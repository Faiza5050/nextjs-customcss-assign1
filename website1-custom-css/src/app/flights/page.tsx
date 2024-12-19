import Image from "next/image";
import React from "react";

const Flight = () => {
    return (
        <div>
            <div className="main-cont">
                <h1>Book your next trip <br /> in 3 easy steps</h1>
                <div className="flight">
                    <div className="card11">
                        <Image 
                            src="/img14.jpg" alt="image"
                            width={100}
                            height={100}
                        />
                        <div>
                            <h2>Choose Destination</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Urna, tortor tempus. </p>
                        </div>
                    </div>
                    
                    <div className="card11">
                        <Image 
                            src="/img15.jpg" alt="image"
                            width={100}
                            height={100}
                        />
                        <div>
                            <h2>Make Payment</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Urna, tortor tempus. </p>
                        </div>
                    </div>
                    
                    <div className="card11">
                        <Image 
                            src="/img16.jpg" alt="image"
                            width={100}
                            height={100}
                        />
                        <div>
                            <h2>Reach Airport <br /> on Selected Date</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Urna, tortor tempus. </p>
                        </div>
                    </div>
                    
                </div>
            </div>
                
        </div>
    )
}

export default Flight;
