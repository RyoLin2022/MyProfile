import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { settings } from './settingsnew';
import { createGlobalStyle } from 'styled-components';
import AOS from 'aos';
AOS.init();


const GlobalStyles = createGlobalStyle`
    body.hide{
          overflow-y: hidden; /* Hide vertical scrollbar */
          overflow-x: hidden; /* Hide horizontal scrollbar */
        }
`;

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return (
      <div {...props}></div>
    );
  }
}

const Blog= function() {
    /* lightbox1 */
    const [lighbx, setlighbx] = React.useState(false);
    const handleBtnClick = (): void => {
      setlighbx(!lighbx);
      var x = document.getElementsByTagName("BODY")[0];
      x.style.overflow = "hidden";
    };
    const handleBtnClickclose = (): void => {
      setlighbx(!lighbx);
      var x = document.getElementsByTagName("BODY")[0];
      x.style.overflow = "auto";
    };
	return(
		<div className="container">
            <GlobalStyles/>
            <div className="spacer-single"></div>
			<div className="row">
				<div className="col-md-12 text-center">
	                <h2>Recent Blog</h2>
	                <div className="space-border"></div>
	            </div>
			</div>
			<div className="row"
                data-aos="fade-up"
                data-aos-once="true"
                >
				<Slider {...settings}>
                <CustomSlide className='itm' index={1}>
                <div className="bloglist item">
                        <div className="post-content">
                            <div className="post-image">
                                <div className="de_modal" onClick={handleBtnClick}>
                                  <img alt="blogimg" src="./img/blog-lawyer/1.jpg" className="grayscale"/>
                                </div>
                            </div>
                            <div className="post-text">
                                <h4 className="de_modal" onClick={handleBtnClick}>The Lawyer European Awards shortlist</h4>
                                <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                            </div>
                        </div>
                    </div>
                </CustomSlide>

                <CustomSlide className='itm' index={2}>
                <div className="bloglist item">
                        <div className="post-content">
                            <div className="post-image">
                                <div className="de_modal" onClick={handleBtnClick}>
                                  <img alt="blogimg" src="./img/blog-lawyer/2.jpg" className="grayscale"/>
                                </div>
                            </div>
                            <div className="post-text">
                                <h4 className="de_modal" onClick={handleBtnClick}>Six firms that are setting the trend</h4>
                                <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                            </div>
                        </div>
                    </div>
                </CustomSlide>

                <CustomSlide className='itm' index={3}>
                <div className="bloglist item">
                        <div className="post-content">
                            <div className="post-image">
                                <div className="de_modal" onClick={handleBtnClick}>
                                  <img alt="blogimg" src="./img/blog-lawyer/3.jpg" className="grayscale"/>
                                </div>
                            </div>
                            <div className="post-text">
                                <h4 className="de_modal" onClick={handleBtnClick}>When it comes to law firm mergers</h4>
                                <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                            </div>
                        </div>
                    </div>
                </CustomSlide>

                <CustomSlide className='itm' index={4}>
                <div className="bloglist item">
                        <div className="post-content">
                            <div className="post-image">
                                <div className="de_modal" onClick={handleBtnClick}>
                                  <img alt="blogimg" src="./img/blog-lawyer/4.jpg" className="grayscale"/>
                                </div>
                            </div>
                            <div className="post-text" onClick={handleBtnClick}>
                                <h4 className="de_modal">How to Make the Most of Your CLE</h4>
                                <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                            </div>
                        </div>
                    </div>
                </CustomSlide>

              </Slider>
			</div>

			  {/* lightbox1 */}
	          {lighbx && ( 
	          <div className="LightboxGal">
	            <div className="closeGal">
	                <button className="button-close" onClick={handleBtnClickclose}></button>
	            </div>
	            <div className="v-center w-100">
	              <div className="mainLightbox container">
	                <div className="row">
	                    <div className="col-md-8 offset-md-2">
                            <div className="blog-read">

                                <img alt="blogimg" src="./img/blog/big.jpg" className="img-fullwidth rounded"/>

                                <div className="post-info">
                                    <span className="post-date">April 1, 2018</span>
                                    <span className="post-like">181</span>
                                    <span className="post-comment">5</span>
                                </div>

                                <h2>How to Make Better User Interface</h2>

                                <div className="post-text">
                                    <p>Quis sunt quis do laboris eiusmod in sint dolore sit pariatur consequat commodo aliqua nulla ad dolor aliquip incididunt voluptate est aliquip adipisicing ea cupidatat nostrud incididunt aliquip dolore. Sed minim nisi duis laborum est labore nisi amet elit adipisicing proident do consectetur dolor labore sit nisi ad proident esse ad velit nisi irure reprehenderit ut et dolor labore veniam quis.</p>

                                    <p>Sunt duis laboris ex et quis laborum laborum cillum mollit voluptate culpa consequat ex cupidatat dolor eiusmod proident proident cillum pariatur sint adipisicing in nostrud do dolore consectetur quis incididunt minim consectetur. Exercitation elit proident dolor est id eiusmod dolor dolor incididunt ad voluptate laboris cupidatat est est sint veniam sint officia sint incididunt est sit ut tempor commodo pariatur ut proident et do.</p>

                                    <p>Sed eu in ut sint dolor irure fugiat minim veniam sed ea proident ullamco occaecat irure ut velit eu ullamco fugiat cupidatat dolore fugiat. Lorem ipsum id non deserunt id consequat duis voluptate amet aliqua pariatur laboris officia pariatur veniam velit reprehenderit sint nostrud cupidatat magna eiusmod mollit exercitation pariatur nulla minim laboris dolore aliqua consectetur cillum duis aute consectetur.</p>
                                </div>

                            </div>

                            <div id="blog-comment">
                                <h4>Comments</h4>

                                <div className="spacer-half"></div>

                                <ol>
                                    <li>
                                        <div className="avatar">
                                            <img src="./img/blog/avatar-1.jpg" alt="blogimg"/></div>
                                        <div className="comment-info">
                                            <span className="c_name">Jovan Eadie</span>
                                            <span className="c_date id-color">15 January 2020</span>
                                            <span className="c_reply"><span >Reply</span></span>
                                            <div className="clearfix"></div>
                                        </div>

                                        <div className="comment">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
                                        
                                    </li>

                                    <li>
                                        <div className="avatar">
                                            <img src="./img/blog/avatar-2.jpg" alt="blogimg"/></div>
                                        <div className="comment-info">
                                            <span className="c_name">Ariana Haylock</span>
                                            <span className="c_date id-color">15 January 2020</span>
                                            <span className="c_reply"><span >Reply</span></span>
                                            <div className="clearfix"></div>
                                        </div>

                                        <div className="comment">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
                                        
                                    </li>

                                    <li>
                                        <div className="avatar">
                                            <img src="./img/blog/avatar-3.jpg" alt="blogimg"/></div>
                                        <div className="comment-info">
                                            <span className="c_name">Reginald Safi</span>
                                            <span className="c_date id-color">15 January 2020</span>
                                            <span className="c_reply"><span >Reply</span></span>
                                            <div className="clearfix"></div>
                                        </div>

                                        <div className="comment">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
                                        
                                    </li>
                                </ol>

                                <div className="spacer-single"></div>

                                <div id="comment-form-wrapper">
                                    <h4>Leave a Comment</h4>
                                    <div className="comment_form_holder">
                                        <form id="contact_form" name="form1" className="form-border" method="post" action="#">
                                            <label>Name</label>
                                            <input type="text" name="name" id="name" className="form-control"/>
                                            <label>Email <span className="req">*</span></label>
                                            <input type="text" name="email" id="email" className="form-control"/>
                                            <label>Message <span className="req">*</span></label>
                                            <textarea cols="10" rows="10" name="message" id="message" className="form-control">
                                            </textarea>
                                            <p id="btnsubmit">
                                            <input type="submit" id="send" value="Send" className="btn btn-main"/>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
	                </div>
	              </div>
	            </div>
	          </div>
	          )}

		</div>
	);
}

export default Blog;