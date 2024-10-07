import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import productsData from "../../data/seccochimneys.json";

function SeccoChimneys() {
	const products = productsData;
	const { productName } = useParams(); // Get productName from URL
	const [isVisible, setIsVisible] = useState(false); // State to track visibility of the scroll button

	// Handle scroll events to show/hide button
	const handleScroll = () => {
		if (window.scrollY > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	// Scroll to top function
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	// Set up event listener for scroll
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	// Find the product that matches the productName parameter
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
			{/* Breadcrumb Navigation */}
			<nav className="breadcrumb sticky-top p-2">
				<Link to="/products" className="breadcrumb-item">
					Products
				</Link>
				<span className="breadcrumb-item active">
					{selectedProduct
						? selectedProduct.product_name
						: "Secco Chimneys"}
				</span>
			</nav>

			<div className="row">
				<img
					src="/images/products/SeccoChimneys/product2-1.png"
					className="card-img-top"
					alt="Secco Chimney Hero Image"
				/>
				<h3 className="text-center fw-bold mt-4">
					Chimneys & Roof Vent
				</h3>
				<h4 className="text-center fw-bold mb-4">
					Versatile, sturdy, and insulating!
				</h4>
				<p className="text-center">
					SKOV-SECCO offers multiple variants and sizes of chimneys
					for livestock houses. All of them are insulated and light.
				</p>
				<p className="text-center mb-5">
					All plastic products manufactured by SKOV-SECCO are made of
					sturdy and non-corrosive UV-treated High-Density
					Polyethylene (H.D.P.E.) plastic. 
				</p>
			</div>
			<div className="row">
				{products.map((product, index) => (
					<div className="col-md-4 mb-4 " key={index}>
						<div className="card h-100">
							<img
								src={product.image}
								className="card-img-top"
								alt={product.product_name}
							/>
							<div className="card-body">
								<h5 className="card-title fw-bold">
									{product.product_name}
								</h5>
								<ul className="card-text ">
									{product.descriptions.map(
										(description, descIndex) => (
											<li key={descIndex}>
												{description}
											</li>
										)
									)}
								</ul>
							</div>
						</div>
					</div>
				))}
			</div>
			{/* Scroll to Top Button */}
			{isVisible && (
				<button className="scroll-to-top" onClick={scrollToTop}>
					Scroll to Top
				</button>
			)}
		</section>
	);
}

export default SeccoChimneys;
