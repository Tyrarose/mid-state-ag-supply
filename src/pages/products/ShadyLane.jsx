import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import productsData from "../../data/shadylane.json";

import "../../styles/productsIndivPage.css";

function ShadyLane() {
	const products = productsData;
	const { productName } = useParams();
	const [isVisible, setIsVisible] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const selectedProduct = products.find(
		(product) => product.product_name === productName
	);

	return (
		<section className="container">
			<h1 className="title text-center">Our Product Range</h1>
			<p className="products-context text-center">
				Explore our diverse selection of high-quality products designed
				to meet various needs:
			</p>
			<nav className="breadcrumb sticky-top p-2">
				<Link to="/products" className="breadcrumb-item">
					Products
				</Link>
				<span className="breadcrumb-item active">
					{selectedProduct
						? selectedProduct.product_name
						: "Shady Lane"}
				</span>
			</nav>
			<div className="row">
				<h3 className="text-center fw-bold">
					DURABLE AG CURTAIN SYSTEMS
				</h3>

				<h6 className="text-center mt-3 mb-4">
					Low Maintenance Ag Curtains Designed for Functionality
				</h6>
				<p className="text-center mb-5">
					We design high-quality, weather-resistant ag curtain systems
					utilizing aluminum, stainless steel, and galvanized hardware
					components ensuring your systems function for years to come.
					To ensure a 100% top-quality product, we have the machinery
					and expertise to heat-weld all of our ag curtains right at
					our warehouse in Bird-in-Hand, PA. With our machines, we can
					fully customize your ag curtains to fit your needs! Contact
					us today!
				</p>
			</div>
			<div className="row">
				{products.map((product, index) => (
					<div className="col-md-4 mb-4" key={index}>
						<div className="card h-100">
							<img
								src={product.image}
								className="card-img-top"
								alt={product.product_name}
							/>
							<div className="card-body">
								<h5 className="card-title text-center fw-bold">
									{product.product_name}
								</h5>
								<p className="card-text text-center">
									{product.description}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
			{isVisible && (
				<button onClick={scrollToTop} className="scroll-to-top">
					<i className="fas fa-arrow-up"></i> Scroll to Top
				</button>
			)}
		</section>
	);
}

export default ShadyLane;
