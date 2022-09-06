import React from 'react';
import { Parallax } from "react-parallax";
import AOS from 'aos';
AOS.init();


const image1 ="./img/background/12.jpg";

const Mblockquote = () => {
    return(
        <div  className="section bg-top bg-bottom py-0"
            >
          <Parallax className="pb-5" bgImage={image1} strength={300}>  
          <div className="py-5 position-relative"
            data-aos="fade"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-10 offset-md-1">
                            <div className="spacer-double"></div>
                            <blockquote className="q-big">
                                <i className="d-big icon_quotations"></i>
                                When I thought I couldn’t go on, I forced myself to keep going. My success is based on persistence, not luck.
                                <span className="d-quote-by">Ryo Lin</span>
                            </blockquote>
                            <div className="spacer-double"></div>
                            <div className="spacer-double"></div>
                            <div className="spacer-single"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
        </div>
    );
}

export default Mblockquote;