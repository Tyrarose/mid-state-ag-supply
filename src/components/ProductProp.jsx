import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; // Import Link for breadcrumb links
import productsImages from "../data/products.json"; // Adjust the path as necessary
import "../styles/ProductProp.css";

function ProductProp() {
	const { productName } = useParams(); // Get productName from URL
	const images = productsImages[productName];
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
				<span className="breadcrumb-item active">{productName}</span>
			</nav>

			<h1 className="mt-3 text-center product-name">{productName}</h1>
			<div className="row">
				{images ? (
					images.map((image, index) => (
						<img
							key={index}
							src={process.env.PUBLIC_URL + image} // Use the correct image path
							alt={`${productName} ${index + 1}`}
							className="img-fluid" // Added for responsive image display
						/>
					))
				) : (
					<p>No images available for this product.</p>
				)}
			</div>
			{/* Scroll to Top Button */}
			{isVisible && (
				<button onClick={scrollToTop} className="scroll-to-top">
					Scroll to Top
				</button>
			)}
		</section>
	);
}

export default ProductProp;
