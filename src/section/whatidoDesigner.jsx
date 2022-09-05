import React from 'react';
import AOS from 'aos';
AOS.init();

const whatido = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center"
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                    >
                    <h2>What I Do</h2>
                    <div className="space-border"></div>
                </div>
            </div>
            <div className="spacer-single"></div>
            <div className="row">
                <div className="col-lg-4"
                    data-aos="fade"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                    >
                    <div className="de_3d-box">
                        <div className="d-inner">
                            <span className="number">1</span>
                            <div className="text">
                                <h3>Branding</h3>
                                Lorem ipsum in duis dolor ex consequat ullamco voluptate mollit amet nostrud non amet dolore eiusmod eu aliquip pariatur.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4" 
                    data-aos="fade"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                    >
                    <div className="de_3d-box">
                        <div className="d-inner">
                            <span className="number">2</span>
                            <div className="text">
                                <h3>Trend Boards</h3>
                                Lorem ipsum in duis dolor ex consequat ullamco voluptate mollit amet nostrud non amet dolore eiusmod eu aliquip pariatur.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"
                    data-aos="fade"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                    >
                    <div className="de_3d-box">
                        <div className="d-inner">
                            <span className="number">3</span>
                            <div className="text">
                                <h3>Collection Design</h3>
                                Lorem ipsum in duis dolor ex consequat ullamco voluptate mollit amet nostrud non amet dolore eiusmod eu aliquip pariatur.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="spacer-single"></div>
                <div className="col-lg-4"
                    data-aos="fade"
                    data-aos-delay="600"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                    >
                    <div className="de_3d-box">
                        <div className="d-inner">
                            <span className="number">4</span>
                            <div className="text">
                                <h3>Textile Design</h3>
                                Lorem ipsum in duis dolor ex consequat ullamco voluptate mollit amet nostrud non amet dolore eiusmod eu aliquip pariatur.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"
                    data-aos="fade"
                    data-aos-delay="700"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                    >
                    <div className="de_3d-box">
                        <div className="d-inner">
                            <span className="number">5</span>
                            <div className="text">
                                <h3>Merchandising</h3>
                                Lorem ipsum in duis dolor ex consequat ullamco voluptate mollit amet nostrud non amet dolore eiusmod eu aliquip pariatur.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"
                    data-aos="fade"
                    data-aos-delay="800"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                    >
                    <div className="de_3d-box">
                        <div className="d-inner">
                            <span className="number">6</span>
                            <div className="text">
                                <h3>Catalog Layout</h3>
                                Lorem ipsum in duis dolor ex consequat ullamco voluptate mollit amet nostrud non amet dolore eiusmod eu aliquip pariatur.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default whatido;