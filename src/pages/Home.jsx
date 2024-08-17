import React from "react";

import "../styles/Home.css";

function Home() {
	return (
		<container className="container-fluid">
			<section className="section1-home-gradient">
				<div className="row">
					<div className="col-lg-6">
						<div className="text-center">
							<h2 className="title">OUR MISSION</h2>
						</div>
						<div className="line"></div>
						<p className="content text-white font-malgun text-center">
							Mid-State Ag Supply LLC is dedicated to improving
							farm productivity and animal comfort through
							expertly designed and installed ventilation systems,
							barn curtains, and fans. Our commitment to quality
							and service excellence ensures a superior
							environment for livestock and streamlined operations
							for farmers.
						</p>
					</div>
					<div className="col-lg-6">
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
			</section>
			<section className="section2">
				<div className="row emergency">
					<div className="col-lg-1">
						<img
							className="ophours"
							src={process.env.PUBLIC_URL + "/images/24-7.png"}
							alt="24/7"
						/>
					</div>
					<div className="col-lg-4 emergency-service-content">
						<h1 className="emergency-title">EMERGENCY</h1>
						<h2 className="service-title">SERVICE</h2>
					</div>
				</div>
				<div className="footer-container">
					<div className="col-lg-6 contact-info">
						<div className="col-lg-6">
							<div className="contact-item">
								<i className="fa-solid fa-clock box"></i>
								<div>
									<h6>Business Hours</h6>
									<p>Monday to Friday</p>
									<p>8:00 am - 5:00 pm</p>
								</div>
							</div>
							<div className="contact-item">
								<i className="fa-solid fa-phone-volume box"></i>
								<h6>715 - 255 - 2355</h6>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="contact-item">
								<i className="fa-solid fa-envelope box"></i>
								<h6>glenn.midstateagsupply@gmail.com</h6>
							</div>
							<br />
							<div className="contact-item">
								<i className="fa-solid fa-location-dot box"></i>
								<h6>N12580 Owen Ave, Owen WI 54460</h6>
							</div>
						</div>
					</div>
					<div className="col-l-6 logo-section">
						<img
							src={process.env.PUBLIC_URL + "/images/seneca.png"}
							alt="Seneca"
						/>
						<img
							src={
								process.env.PUBLIC_URL + "/images/double-l.png"
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
								process.env.PUBLIC_URL + "/images/skov-secc.png"
							}
							alt="Skov-Secc"
						/>
						<img
							src={
								process.env.PUBLIC_URL + "/images/auto-vent.png"
							}
							alt="AutoVent"
						/>
					</div>
				</div>
			</section>
		</container>
	);
}

export default Home;
