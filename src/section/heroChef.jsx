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
                    <div className="col-md-8">
                        <h6 className="color"
                            data-aos="fade-up"
                            data-aos-delay="0"
                            data-aos-duration="1000"
                            data-aos-easing="ease"
                            data-aos-once="true"
                            >I Am Jerrold Huemmer
                        </h6>
                        <div className="spacer-20"></div>
                        <div className="h1_big"
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration="1000"
                            data-aos-easing="ease"
                            data-aos-once="true"
                            >
                            <Typed
                                strings={["Senior Chef ", "Barista" , "Traveller"]}
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

                    <div className="col-md-4">
                        <div className="float-end">
                            <div className="de_count text-center" >
                                <h3 className="id-color">15</h3>
                                <span>Years Experience</span>
                            </div>
                            <div className="de_count text-center" >
                                <h3 className="id-color">32</h3>
                                <span>Awards Winning</span>
                            </div>
                             <div className="de_count text-center">
                                <h3 className="id-color">75</h3>
                                <span>Recipes Created</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default hero;