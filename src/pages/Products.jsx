import React from "react";
import { Link } from "react-router-dom";
import "../styles/Products.css";

function Products() {
	const buttonNames = [
		"Shady Lane Curtains",
		"Secco Chimneys",
		"Fans",
		"Freestalls",
		"EXL Lockups",
		"Stainless Steel Tip Tanks",
		"Auto Vent Controllers",
	];

	return (
		<div className="container products-container text-center">
			<h1 className="title">Our Product Range</h1>
			<p className="products-context text-center">
				Explore our diverse selection of high-quality products designed
				to meet various needs:
			</p>

			{/* Buttons */}
			<section className="buttons">
				{buttonNames.map((productName, index) => (
					<Link key={index} to={`/products/${productName}`}>
						<button className="btn btn-primary btn-lg btn-block product-btn">
							{productName}
						</button>
					</Link>
				))}
			</section>

			<p className="products-context">
				Each product is crafted to provide exceptional quality and
				performance in its respective field.
			</p>
		</div>
	);
}

export default Products;
