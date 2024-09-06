import React from "react";

import "../styles/Home.css";

function Home() {
	return (
		<div>
			<section className="home-gradient">
				<div className="home-gradient-content">
					<div className="row text-center">
						<div className="home col-6">
							<h2 className="home-title">OUR MISSION</h2>
							<div className="line"></div>
							<p className="content">
								Mid-State Ag Supply LLC is dedicated to
								improving farm productivity and animal comfort
								through expertly designed and installed
								ventilation systems, barn curtains, and fans.
								Our commitment to quality and service excellence
								ensures a superior environment for livestock and
								streamlined operations for farmers.
							</p>
						</div>
						<div className="col-6">
							<div className="overflow-wrapper">
								<div className="image-container">
									<img
										className="featured"
										src={
											process.env.PUBLIC_URL +
											"/images/tablet.png"
										}
										alt="tablet"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section2">
				<div className="row emergency-content">
					<img
						className="ophours"
						src={process.env.PUBLIC_URL + "/images/24-7.png"}
						alt="24/7"
					/>
					<div className="col-lg-4 emergency">
						<h1 className="emergency-title">EMERGENCY</h1>
						<h2 className="emergency-subtitle">SERVICE</h2>
					</div>
				</div>
				<div className="row ">
					<div className="col-lg-6">
						<div className="contact-info">
							<div className="col-lg-6 col-md-12">
								<div className="contact-item">
									<i className="fa-solid fa-clock box"></i>
									<div className="contact-text">
										<h6>
											<strong>Business Hours</strong>
										</h6>
										<p>Monday to Friday</p>
										<p>8:00 am - 5:00 pm</p>
									</div>
								</div>

								<div className="contact-item">
									<i className="fa-solid fa-phone-volume box"></i>
									<h6>
										<strong>715 - 255 - 2355</strong>
									</h6>
								</div>
							</div>
							<div className="col-lg-7 col-md-12">
								<div className="contact-item">
									<i className="fa-solid fa-envelope box"></i>
									<h6>
										<strong>
											glenn.midstateagsupply@gmail.com
										</strong>
									</h6>
								</div>
								<div className="contact-item">
									<i className="fa-solid fa-location-dot box"></i>
									<h6>
										<strong>
											N12580 Owen Ave, Owen WI 54460
										</strong>
									</h6>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-6">
						<div className="col-lg-12 logo-section">
							<img
								src={
									process.env.PUBLIC_URL +
									"/images/seneca.png"
								}
								alt="Seneca"
							/>
							<img
								src={
									process.env.PUBLIC_URL +
									"/images/double-l.png"
								}
								alt="Double L"
							/>
							<img
								src={
									process.env.PUBLIC_URL +
									"/images/shady-lane.png"
								}
								alt="Shady Lane"
							/>
							<img
								src={
									process.env.PUBLIC_URL +
									"/images/skov-secc.png"
								}
								alt="Skov-Secc"
							/>
							<img
								src={
									process.env.PUBLIC_URL +
									"/images/auto-vent.png"
								}
								alt="AutoVent"
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Home;
