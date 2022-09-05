import React from 'react';
import { Parallax } from "react-parallax";
import CountUp from "react-countup";
import AOS from 'aos';
AOS.init();

const image1 ="./img/background/l7.jpg";

const Mblockquote = () => {
    return(
        <div className="section bg-top bg-bottom py-0">
          <Parallax className="py-5" bgImage={image1} strength={300}>  
          <div className="py-5 position-relative">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="de_count text-center">
                                <h3 className="timer"
                                  data-aos="fade"
                              data-aos-delay="0"
                              data-aos-duration="1000"
                              data-aos-easing="ease"
                              data-aos-once="true"
                                  >
                                    <CountUp
                                      start={0}
                                      end={8240}
                                      duration={10}
                                      useEasing={true}
                                      separator=","
                                    />
                                </h3>
                                <span className="small">Hours of Works</span>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="de_count text-center">
                                <h3 className="timer"
                                  data-aos="fade"
                              data-aos-delay="200"
                              data-aos-duration="1000"
                              data-aos-easing="ease"
                              data-aos-once="true"
                                  ><CountUp
                                      start={0}
                                      end={315}
                                      duration={10}
                                      useEasing={true}
                                      separator=","
                                    /></h3>
                                <span className="small">Projects Done</span>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="de_count text-center">
                                <h3 className="timer"
                                  data-aos="fade"
                              data-aos-delay="400"
                              data-aos-duration="1000"
                              data-aos-easing="ease"
                              data-aos-once="true"
                                  ><CountUp
                                      start={0}
                                      end={250}
                                      duration={10}
                                      useEasing={true}
                                      separator=","
                                    /></h3>
                                <span className="small">Satisfied Customers</span>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="de_count text-center">
                                <h3 className="timer"
                                  data-aos="fade"
                              data-aos-delay="600"
                              data-aos-duration="1000"
                              data-aos-easing="ease"
                              data-aos-once="true"
                                  ><CountUp
                                      start={0}
                                      end={32}
                                      duration={10}
                                      useEasing={true}
                                      separator=","
                                    /></h3>
                                <span className="small">Awards Winning</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
        </div>
    );
}

export default Mblockquote;