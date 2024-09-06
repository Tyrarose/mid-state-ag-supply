import React from "react";
import "../styles/Products.css";

import buttonNames from "../data/products-buttonNames.json";

function Products() {
	return (
		<div className="container products-container text-center">
			<h1 className="title">Our Product Range</h1>
			<p className="products-context text-center">
				Our Product Range Explore our diverse selection of high-quality
				products designed to meet various needs:
			</p>
			<section className="buttons">
				{buttonNames.map((item) => (
					<button
						key={item.id}
						type="button"
						className="btn btn-primary btn-lg btn-block product-btn"
					>
						{item.buttonName}
					</button>
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
