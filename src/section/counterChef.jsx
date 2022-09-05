import React from 'react';
import { Parallax } from "react-parallax";
import CountUp from "react-countup";
import { createGlobalStyle } from 'styled-components';
import AOS from 'aos';
AOS.init();

const image1 ="./img/background/13.jpg";

const GlobalStyles = createGlobalStyle`
    .de_count h3 span{
      font-size: 32px;
      color: white;
    }
`;


const Mblockquote = () => {
    return(
        <div className="section bg-top bg-bottom py-0">
           <GlobalStyles/>
          <Parallax className="py-5" bgImage={image1} strength={300}>  
          <div className="py-5 position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
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
                                      end={75}
                                      duration={10}
                                      useEasing={true}
                                      separator=","
                                    />
                                </h3>
                                <span>Recipes Created</span>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="de_count text-center">
                                <h3 className="timer"
                                  data-aos="fade"
                              data-aos-delay="200"
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
                                <span>Awards Winning</span>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="de_count text-center">
                                <h3 className="timer"
                                  data-aos="fade"
                              data-aos-delay="400"
                              data-aos-duration="1000"
                              data-aos-easing="ease"
                              data-aos-once="true"
                                  ><CountUp
                                      start={0}
                                      end={15}
                                      duration={10}
                                      useEasing={true}
                                      separator=","
                                    /></h3>
                                <span>Years of Experiences</span>
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