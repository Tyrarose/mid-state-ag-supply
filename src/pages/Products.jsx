import React from "react";
import { Link } from "react-router-dom";
import "../styles/Products.css";

function Products() {
	const buttonNames = [
		{ name: "Shady Lane Curtains", path: "/products/shady-lane" },
		{ name: "Secco Chimneys", path: "/products/secco-chimneys" },
		{ name: "Fans", description: "High-quality ventilation fans." },
		{
			name: "Freestalls",
			description: "Durable freestalls for livestock.",
		},
		{
			name: "EXL Lockups",
			description: "Reliable lockups for farm animals.",
		},
		{
			name: "Stainless Steel Tip Tanks",
			description: "Top-notch tip tanks.",
		},
		{
			name: "Auto Vent Controllers",
			description: "Automated ventilation controllers.",
		},
	];

	return (
		<div>
			<div className="container products-container text-center">
				<h1 className="title">Our Product Range</h1>
				<p className="products-context text-center">
					Explore our diverse selection of high-quality products
					designed to meet various needs:
				</p>
				{/* Buttons */}
				<section className="buttons">
					{buttonNames.map((product, index) => (
						<Link
							key={index}
							to={
								product.path
									? product.path
									: `/products/${product.name}`
							}
						>
							<button className="btn btn-primary btn-lg btn-block product-btn">
								{product.name}
							</button>
						</Link>
					))}
				</section>
				<p className="products-context">
					Each product is crafted to provide exceptional quality and
					performance in its respective field.
				</p>
			</div>
			{/* Infinite seamless Repeated Scrolling Text loop */}
			<div className="scroll-text">
				<div className="scroll-content">
					{/* Repeated content for seamless scrolling */}
					{Array(8).fill(
						<span>
							We also offer Barn Layout and Blueprinting!&nbsp;
						</span>
					)}
				</div>
			</div>
		</div>
	);
}

export default Products;
