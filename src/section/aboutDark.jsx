import React from 'react';
import Skillbar from '../layout/skillbar';

import AOS from 'aos';
AOS.init();


const hero = () => {
	return(
		<div className="v-center">
		<div className="container">
			<div className="row align-items-center">
				<div className="col-md-6">
                    <img src="./img/misc/4.png" className="img-fluid" alt=""/>
                </div>
	            <div className="col-md-6">
	                <h2>About Me</h2>
	                <p>In quis amet ex veniam in irure est culpa veniam velit fugiat cupidatat duis anim commodo elit 
	                	in occaecat cupidatat eu et sunt commodo voluptate ullamco magna nulla amet. Lorem ipsum 
	                	officia veniam enim sit culpa velit proident enim ea officia aute non in mollit culpa anim 
	                	magna sit veniam irure eiusmod.
	                </p>
	                <div className="d-skills-bar">
	                  <div className="d-bar">
	                    <div className="d-skill">
	                        <div className="d-info">
	                          <span>Business Lawyer</span>
	                        </div>
	                        <Skillbar bgColor={"#50BEC2"} progress={90} />
	                    </div>

	                    <div className="d-skill">
	                        <div className="d-info">
	                          <span>Corporate Lawyer</span>
	                        </div>
	                        <Skillbar bgColor={"#50BEC2"} progress={70} />
	                    </div>

	                    <div className="d-skill">
	                        <div className="d-info">
	                          <span>Personal Lawyer</span>
	                        </div>
	                        <Skillbar bgColor={"#50BEC2"} progress={82} />
	                    </div>

	                    <div className="d-skill">
	                        <div className="d-info">
	                          <span>Family Lawyer</span>
	                        </div>
	                        <Skillbar bgColor={"#50BEC2"} progress={62} />
	                    </div>

	                    <div className="d-skill" data-value="90%" style={{width: "90%"}}>
	                        <div className="d-info">
	                          <span>Estate Lawyer</span>
	                        </div>
	                        <Skillbar bgColor={"#50BEC2"} progress={90} />
	                    </div>

	                    </div>
	                </div>
	            </div>  

			</div>
		</div>
		</div>
	);
}

export default hero;