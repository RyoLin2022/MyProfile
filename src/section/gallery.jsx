import React from 'react';
import Masonry from "react-masonry-component";
import { createGlobalStyle } from 'styled-components';
import AOS from 'aos';
AOS.init();

const GlobalStyles = createGlobalStyle`
    body.hide{
          overflow-y: hidden; /* Hide vertical scrollbar */
          overflow-x: hidden; /* Hide horizontal scrollbar */
        }
`;

const Gallery = function () {

    return (
        <div className="container">
            <GlobalStyles />
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
                    <a href="https://twitter.com/RyoLinEth">
                        <div className="card-image-1">
                            <div className="d-text">
                                <h3>Twitter Promotion</h3>
                                <h5 className="d-tag">Twitter</h5>
                            </div>
                            <img src="./img/gallery/1.png" alt="gallery" />
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 image-element-class de_modal"
                    data-aos="fade-up"
                    data-aos-once="true"
                >
                    <a href="https://t.me/RyoLin">
                        <div className="card-image-1">
                            <div className="d-text">
                                <h3>Telegram Promotion</h3>
                                <h5 className="d-tag">Telegram</h5>
                            </div>
                            <img src="./img/gallery/telegram.png" alt="gallery" />
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 image-element-class de_modal"
                    data-aos="fade-up"
                    data-aos-once="true"
                >
                    <a href="https://busdvault.com">
                        <div className="card-image-1">
                            <div className="d-text">
                                <h3>DApp Construction</h3>
                                <h5 className="d-tag">BVault</h5>
                            </div>
                            <img src="./img/gallery/4.jpg" alt="gallery" />
                        </div>
                    </a>
                </div>
            </Masonry>
        </div>
    );
}

export default Gallery;