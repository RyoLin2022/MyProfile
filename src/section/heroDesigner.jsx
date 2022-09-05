import React from 'react';
import Typed from "react-typed";
import AOS from 'aos';

AOS.init({
  offset: 200,
  duration: 800,
  easing: 'ease-in-out-sine',
  delay: 200,
  mirror: true
});

const hero = () => {
    return(
        <div className="v-center">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img src="./img/misc/7.png" className="img-fluid" alt="imghero"/>
                    </div>
                    <div className="col-md-6">
                        <h6 className="color"
                            data-aos="fade-up"
                            data-aos-delay="0"
                            data-aos-duration="1000"
                            data-aos-easing="ease"
                            data-aos-once="true"
                            >Welcome to My Website
                        </h6>
                        <div className="spacer-20"></div>
                        <div className="h1_big">Hi, I'm <span className="color">Alexandra Quinn</span></div>
                        <div className="h1_big"
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration="1000"
                            data-aos-easing="ease"
                            data-aos-once="true"
                            >
                            <Typed
                                strings={["a Fashion Designer. ", "a Model." ]}
                                typeSpeed={60}
                                backSpeed={50}
                                loop
                              />
                        </div>
                        <ul className="list_location"
                            data-aos="fade-up"
                            data-aos-delay="600"
                            data-aos-duration="1000"
                            data-aos-easing="ease"
                            data-aos-once="true"
                            >
                            <li><span>France</span>Bodin, Chauveau</li>
                            <li><span>USA</span>Louisiana, Bayerfurt</li>
                            <li><span>German</span>Hamburg, Dortmund</li>
                        </ul>
                    </div>

                    
                </div>
            </div>
        </div>
    );
}

export default hero;