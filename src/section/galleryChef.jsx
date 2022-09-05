import React from 'react';
import Masonry from "react-masonry-component";
import ModalImage from "react-modal-image";
import { createGlobalStyle } from 'styled-components';
import AOS from 'aos';
AOS.init();

const GlobalStyles = createGlobalStyle`
    body.hide{
          overflow-y: hidden; /* Hide vertical scrollbar */
          overflow-x: hidden; /* Hide horizontal scrollbar */
        }
`;

const Gallery= function() {
   
    return(
            <div className="container">

            <GlobalStyles/>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2>Portfolio</h2>
                        <div className="space-border"></div>
                    </div>
                </div>
                 <Masonry
                    className={"row my-gallery-class"} elementType={"div"}>
                    <div className="col-lg-4 image-element-class de_modal de_modal" 
                        data-aos="fade-up"
                        data-aos-once="true"
                        >
                        <div className="card-image-1">
                            <div className="d-text">
                                <h3>Sea Food</h3>  
                            </div>
                            <img className="initimages" src="./img/gallery-food/1.jpg" alt="gallery"/>
                            <ModalImage className="images"
                              small={"./img/gallery-food/1.jpg"}
                              large={"./img/gallery-food/1.jpg"}
                            ></ModalImage>
                        </div>
                    </div>
                    <div className="col-lg-4 image-element-class de_modal" 
                        data-aos="fade-up"
                        data-aos-once="true"
                        > 
                        <div className="card-image-1">
                            <div className="d-text">
                                <h3>Pizza</h3>
                            </div>
                            <img className="initimages" src="./img/gallery-food/2.jpg" alt="gallery"/>
                            <ModalImage className="images"
                              small={"./img/gallery-food/2.jpg"}
                              large={"./img/gallery-food/2.jpg"}
                            />
                        </div>
                    </div>
                    <div className="col-lg-4 image-element-class de_modal" 
                        data-aos="fade-up"
                        data-aos-once="true"
                        >
                        <div className="card-image-1">
                            <div className="d-text">
                                <h3>Pasta</h3>
                            </div>
                            <img className="initimages" src="./img/gallery-food/3.jpg" alt="gallery"/>
                            <ModalImage className="images"
                              small={"./img/gallery-food/3.jpg"}
                              large={"./img/gallery-food/3.jpg"}
                            />
                        </div>
                    </div>
                    <div className="col-lg-4 image-element-class de_modal" 
                        data-aos="fade-up"
                        data-aos-once="true"
                        >
                        <div className="card-image-1">
                            <div className="d-text">
                                <h3>Nachos</h3>
                            </div>
                            <img className="initimages" src="./img/gallery-food/4.jpg" alt="gallery"/>
                            <ModalImage className="images"
                              small={"./img/gallery-food/4.jpg"}
                              large={"./img/gallery-food/4.jpg"}
                            />
                        </div>
                    </div>
                    <div className="col-lg-4 image-element-class de_modal" 
                        data-aos="fade-up"
                        data-aos-once="true"
                        >
                        <div className="card-image-1">
                            <div className="d-text">
                                <h3>Steak</h3>
                            </div>
                            <img className="initimages" src="./img/gallery-food/5.jpg" alt="gallery"/>
                            <ModalImage className="images"
                              small={"./img/gallery-food/5.jpg"}
                              large={"./img/gallery-food/5.jpg"}
                            />
                        </div>
                    </div>
                    <div className="col-lg-4 image-element-class de_modal" 
                        data-aos="fade-up"
                        data-aos-once="true"
                        >
                        <div className="card-image-1">
                            <div className="d-text">
                                <h3>Noodle</h3>
                            </div>
                            <img className="initimages" src="./img/gallery-food/6.jpg" alt="gallery"/>
                            <ModalImage className="images"
                              small={"./img/gallery-food/6.jpg"}
                              large={"./img/gallery-food/6.jpg"}
                            />
                        </div>
                    </div>
                  </Masonry>

                

      </div>
    );
}

export default Gallery;